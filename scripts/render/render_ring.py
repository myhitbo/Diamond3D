"""Rendus photoréalistes (Blender Cycles) du modèle réel, pour les images du site.

Le modèle est celui du configurateur avant simplification : maillage de rendu du fichier de fabrication (Ring.3dm), avec les
retouches web demandées par l'atelier (griffes rabattues, « 8 » supprimés). Aucune pièce n'est ajoutée ni redessinée. Comme
dans KeyShot ou Matrix, les arêtes vives de la CAO sont adoucies au rendu seulement (nœud Bevel, rayon de l'ordre d'un
polissage) : la géométrie n'est pas modifiée.

Prérequis : `pip install bpy==5.3.0` (Python 3.13, environnement séparé conseillé : la roue pèse 430 Mo), et le modèle
dense retouché :
  python -I pipeline/extract_3dm.py pipeline/recipes/ring-001.json --out-glb <dir>/ring-001.raw.glb --out-meta <dir>/geometry.json
  python -I pipeline/web_retouch.py <dir>/ring-001.raw.glb pipeline/recipes/ring-001.json <dir>/edits.json
  node scripts/models/apply-web-edits.mjs <dir>/ring-001.raw.glb <dir>/edits.json <dir>/ring-001.retouched.glb --no-compress

Usage : python scripts/render/render_ring.py <modèle.glb> <dossier de sortie> [nom de vue…] [--samples N] [--scale S]
Vues : voir SHOTS. Sortie : PNG RVBA (fond transparent, ombre portée conservée par un « attrapeur d'ombre »).
"""

import math
import sys
import time

import bpy
from mathutils import Matrix, Vector

# Couleurs de réflectance (F0) en linéaire, d'après les mesures publiées pour l'or, le rhodium (or blanc rhodié) et le platine.
METALS = {
    'yellow-18k': (1.0, 0.70, 0.30),
    'white-18k': (0.80, 0.80, 0.80),
    'rose-18k': (0.98, 0.60, 0.45),
    'platinum': (0.70, 0.68, 0.64),
}

# Vues : composition, métal, direction de la caméra (repère glTF du configurateur, Y vers le haut), focale, format.
SHOTS = {
    'hero': dict(composition='ensemble', metal='yellow-18k', dir=(0.70, 0.42, 0.58), lens=105, size=(2000, 1600), zoom=1.15),
    'or-jaune': dict(composition='ensemble', metal='yellow-18k', dir=(0.62, 0.5, 0.6), lens=105, size=(1200, 1500), zoom=1.4),
    'or-blanc': dict(composition='ensemble', metal='white-18k', dir=(0.62, 0.5, 0.6), lens=105, size=(1200, 1500), zoom=1.4),
    'or-rose': dict(composition='ensemble', metal='rose-18k', dir=(0.62, 0.5, 0.6), lens=105, size=(1200, 1500), zoom=1.4),
    'platine': dict(composition='ensemble', metal='platinum', dir=(0.62, 0.5, 0.6), lens=105, size=(1200, 1500), zoom=1.4),
    'marquise-detail': dict(composition='solitaire', metal='yellow-18k', dir=(0.0, 1.0, 0.18), lens=105, size=(1800, 1300), zoom=2.4),
    'solitaire': dict(composition='solitaire', metal='yellow-18k', dir=(0.52, 0.76, 0.40), lens=105, size=(1500, 1500), zoom=1.3),
}

PIECES = {'ensemble': ('A__', 'B__'), 'solitaire': ('A__',), 'alliance': ('B__',)}


def args():
    a = sys.argv[1:]
    opts = {'samples': 256, 'scale': 1.0}
    for k in list(opts):
        if f'--{k}' in a:
            i = a.index(f'--{k}')
            opts[k] = float(a[i + 1])
            del a[i : i + 2]
    return a[0], a[1], a[2:] or list(SHOTS), opts


def node_tree(mat):
    mat.use_nodes = True
    nt = mat.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    return nt, out


def metal_material(name, f0, roughness=0.045, bevel=0.035):
    mat = bpy.data.materials.new(name)
    nt, out = node_tree(mat)
    bsdf = nt.nodes.new('ShaderNodeBsdfPrincipled')
    bsdf.inputs['Base Color'].default_value = (*f0, 1)
    bsdf.inputs['Metallic'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = roughness
    # Arêtes adoucies au rendu (comme les « rounded edges » de KeyShot) : rayon en millimètres.
    bev = nt.nodes.new('ShaderNodeBevel')
    bev.samples = 6
    bev.inputs['Radius'].default_value = bevel
    nt.links.new(bev.outputs['Normal'], bsdf.inputs['Normal'])
    nt.links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
    return mat


def diamond_material():
    mat = bpy.data.materials.new('diamant')
    nt, out = node_tree(mat)
    glass = nt.nodes.new('ShaderNodeBsdfGlass')
    glass.inputs['IOR'].default_value = 2.417
    glass.inputs['Roughness'].default_value = 0.0
    glass.inputs['Color'].default_value = (1, 1, 1, 1)
    # Dispersion (« feu ») : 20 / nombre d'Abbe ; diamant, Abbe ≈ 55.
    if 'Dispersion' in glass.inputs:
        glass.inputs['Dispersion'].default_value = 20 / 55
    nt.links.new(glass.outputs['BSDF'], out.inputs['Surface'])
    return mat


def emitter(name, strength, w, h, tint=(1, 1, 1), gradient=True, glossy=True):
    """Boîte à lumière : plan émissif, plus fort au centre qu'aux bords ; invisible pour la caméra, visible en reflet."""
    bpy.ops.mesh.primitive_plane_add(size=1)
    o = bpy.context.object
    o.name = name
    o.scale = (w, h, 1)
    mat = bpy.data.materials.new(name)
    nt, out = node_tree(mat)
    em = nt.nodes.new('ShaderNodeEmission')
    em.inputs['Color'].default_value = (*tint, 1)
    if gradient:
        # Dégradé radial doux : coordonnées de texture centrées, distance au centre, rampe.
        tc = nt.nodes.new('ShaderNodeTexCoord')
        mp = nt.nodes.new('ShaderNodeMapping')
        mp.inputs['Scale'].default_value = (2, 2, 1)
        vm = nt.nodes.new('ShaderNodeVectorMath')
        vm.operation = 'LENGTH'
        ramp = nt.nodes.new('ShaderNodeValToRGB')
        ramp.color_ramp.elements[0].position = 0.0
        ramp.color_ramp.elements[0].color = (1, 1, 1, 1)
        ramp.color_ramp.elements[1].position = 1.15
        ramp.color_ramp.elements[1].color = (0.0, 0.0, 0.0, 1)
        mul = nt.nodes.new('ShaderNodeMath')
        mul.operation = 'MULTIPLY'
        mul.inputs[1].default_value = strength
        nt.links.new(tc.outputs['UV'], mp.inputs['Vector'])
        # Les coordonnées vont de 0 à 1 sur le plan : centrées puis doublées → de −1 à 1.
        mp.inputs['Location'].default_value = (-1, -1, 0)
        nt.links.new(mp.outputs['Vector'], vm.inputs[0])
        nt.links.new(vm.outputs['Value'], ramp.inputs['Fac'])
        bw = nt.nodes.new('ShaderNodeRGBToBW')
        nt.links.new(ramp.outputs['Color'], bw.inputs['Color'])
        nt.links.new(bw.outputs['Val'], mul.inputs[0])
        nt.links.new(mul.outputs['Value'], em.inputs['Strength'])
    else:
        em.inputs['Strength'].default_value = strength
    nt.links.new(em.outputs['Emission'], out.inputs['Surface'])
    o.data.materials.append(mat)
    o.visible_camera = False
    o.visible_shadow = False
    # Petites sources « étincelles » : vues à travers les pierres seulement, pas en reflet sur le métal (points parasites).
    o.visible_glossy = glossy
    return o


def place_facing(o, target, direction, distance):
    o.location = target + direction.normalized() * distance
    # Le plan regarde la cible (normale −Z vers la cible avec track_quat 'Z').
    o.rotation_mode = 'QUATERNION'
    o.rotation_quaternion = (target - o.location).to_track_quat('-Z', 'Y')


def relative(cam_dir, az_deg, el_deg):
    """Direction décalée de `az_deg` (vers la droite) et `el_deg` (vers le haut) par rapport à la direction de la caméra :
    l'éclairage suit la caméra, si bien que la vue de dessus est éclairée comme la vue de trois quarts."""
    up = Vector((0, 0, 1)) if abs(cam_dir.z) < 0.95 else Vector((0, 1, 0))
    right = up.cross(cam_dir).normalized()
    upv = cam_dir.cross(right).normalized()
    a, e = math.radians(az_deg), math.radians(el_deg)
    v = cam_dir * math.cos(a) * math.cos(e) + right * math.sin(a) * math.cos(e) + upv * math.sin(e)
    return v.normalized()


def main():
    glb, out_dir, names, opts = args()
    scale = opts['scale']
    for name in names:
        shot = SHOTS[name]
        t0 = time.time()
        bpy.ops.wm.read_factory_settings(use_empty=True)
        bpy.ops.import_scene.gltf(filepath=glb)
        meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
        # Mètres → millimètres : la scène est à l'échelle du bijou (rayons de biseau, distances de lumières).
        for o in meshes:
            o.matrix_world = Matrix.Scale(1000, 4) @ o.matrix_world
        keep = PIECES[shot['composition']]
        gold = metal_material('metal', METALS[shot['metal']])
        gem = diamond_material()
        shown = []
        for o in meshes:
            if not o.name.startswith(keep):
                o.hide_render = True
                continue
            shown.append(o)
            o.data.materials.clear()
            is_gem = '__gem_' in o.name
            o.data.materials.append(gem if is_gem else gold)
            # Pierres : facettes planes (un ombrage lissé brouille la réfraction) ; métal : lissé (normales du fichier).
            for p in o.data.polygons:
                p.use_smooth = not is_gem
        # Centre et rayon de l'ensemble visible.
        pts = [o.matrix_world @ Vector(c) for o in shown for c in o.bound_box]
        lo = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
        hi = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
        center = (lo + hi) / 2
        radius = (hi - lo).length / 2

        # Caméra : repère glTF (x, y, z) → Blender (x, −z, y).
        d = Vector((shot['dir'][0], -shot['dir'][2], shot['dir'][1])).normalized()
        cam_data = bpy.data.cameras.new('cam')
        cam_data.lens = shot['lens']
        cam_data.clip_start = 1
        cam_data.clip_end = 5000
        cam = bpy.data.objects.new('cam', cam_data)
        bpy.context.scene.collection.objects.link(cam)
        w, h = shot['size']
        fov = 2 * math.atan(36 / 2 / cam_data.lens) if w >= h else 2 * math.atan(36 / 2 / cam_data.lens * w / h)
        dist = radius / math.sin(fov / 2) * 1.08 / shot.get('zoom', 1.0)
        cam.location = center + d * dist
        cam.rotation_mode = 'QUATERNION'
        cam.rotation_quaternion = (center - cam.location).to_track_quat('-Z', 'Y')
        bpy.context.scene.camera = cam
        cam_data.sensor_fit = 'AUTO'

        # Studio : boîtes à lumière autour de la caméra (mêmes reflets quelle que soit la vue).
        R = radius
        # (nom, intensité, largeur, hauteur, décalage horizontal et vertical par rapport à la caméra en degrés, distance, teinte)
        lights = [
            ('principale', 9, 3.2 * R, 2.0 * R, 22, 28, 4.5 * R, (1, 0.98, 0.95)),
            ('remplissage', 3, 3.0 * R, 2.4 * R, -35, 10, 5 * R, (1, 0.98, 0.95)),
            ('bande gauche', 22, 0.35 * R, 4.0 * R, -80, 0, 4 * R, (1, 1, 1)),
            ('bande droite', 18, 0.3 * R, 4.0 * R, 85, 4, 4 * R, (1, 1, 1)),
            ('contre-jour', 10, 3.0 * R, 1.2 * R, 165, 25, 4.5 * R, (1, 0.9, 0.78)),
            ('haut', 4, 4.0 * R, 2.0 * R, 0, 70, 5 * R, (1, 1, 1)),
            ('réflecteur bas', 1.5, 4.0 * R, 0.8 * R, 10, -30, 4 * R, (1, 0.97, 0.92)),
            ('point vif', 60, 0.25 * R, 0.25 * R, 38, 45, 4 * R, (1, 1, 1)),
        ]
        for nm, s, lw, lh, az, el, dd, tint in lights:
            o = emitter(nm, s, lw, lh, tint)
            place_facing(o, center, relative(d, az, el), dd)
        # Couronne de petites sources autour de la caméra : ce sont elles qui font scintiller les diamants (chaque facette
        # renvoie l'une d'elles), comme les rampes de LED des photographes de joaillerie. Invisibles en reflet sur le métal.
        for i in range(16):
            az = -180 + i * 360 / 16 + 8 * (i % 2)
            o = emitter(f'étincelle {i}', 50, 0.22 * R, 0.6 * R, glossy=False)
            place_facing(o, center, relative(d, az * 0.5, 20 + 25 * (i % 3) - 25), 4.2 * R)

        # Sol : attrapeur d'ombre (fond transparent, ombre douce conservée).
        floor_z = lo.z
        bpy.ops.mesh.primitive_plane_add(size=40 * R, location=(center.x, center.y, floor_z))
        bpy.context.object.is_shadow_catcher = True

        world = bpy.data.worlds.new('monde')
        bpy.context.scene.world = world
        world.use_nodes = True
        wn = world.node_tree.nodes
        bg = wn['Background']
        # Monde : presque noir pour le métal (contraste des reflets) ; vu à travers une pierre (rayon déjà réfracté), un studio
        # clair, plus lumineux au zénith : c'est ce qui rend un diamant blanc et vif au lieu de gris.
        lp = wn.new('ShaderNodeLightPath')
        gt = wn.new('ShaderNodeMath')
        gt.operation = 'GREATER_THAN'
        gt.inputs[1].default_value = 0.5
        mix = wn.new('ShaderNodeMix')
        mix.data_type = 'RGBA'
        mix.inputs['A'].default_value = (0.02, 0.019, 0.018, 1)
        # Studio vu à travers la pierre : bandes claires et sombres (le contraste noir et blanc des photographes de diamants).
        tc = wn.new('ShaderNodeTexCoord')
        wave = wn.new('ShaderNodeTexWave')
        wave.inputs['Scale'].default_value = 3.0
        wave.inputs['Distortion'].default_value = 4.0
        wave.inputs['Detail'].default_value = 1.0
        ramp = wn.new('ShaderNodeValToRGB')
        ramp.color_ramp.elements[0].position = 0.35
        ramp.color_ramp.elements[0].color = (0.04, 0.04, 0.04, 1)
        ramp.color_ramp.elements[1].position = 0.6
        ramp.color_ramp.elements[1].color = (2.2, 2.18, 2.15, 1)
        world.node_tree.links.new(tc.outputs['Generated'], wave.inputs['Vector'])
        world.node_tree.links.new(wave.outputs['Fac'], ramp.inputs['Fac'])
        world.node_tree.links.new(ramp.outputs['Color'], mix.inputs['B'])
        world.node_tree.links.new(lp.outputs['Transmission Depth'], gt.inputs[0])
        world.node_tree.links.new(gt.outputs['Value'], mix.inputs['Factor'])
        world.node_tree.links.new(mix.outputs['Result'], bg.inputs['Color'])
        bg.inputs['Strength'].default_value = 1.0

        sc = bpy.context.scene
        sc.render.engine = 'CYCLES'
        sc.cycles.device = 'CPU'
        sc.cycles.samples = int(opts['samples'])
        sc.cycles.use_adaptive_sampling = True
        sc.cycles.adaptive_threshold = 0.01
        sc.cycles.use_denoising = True
        sc.cycles.max_bounces = 16
        sc.cycles.transmission_bounces = 14
        sc.cycles.glossy_bounces = 8
        sc.cycles.transparent_max_bounces = 16
        sc.cycles.caustics_reflective = False
        sc.cycles.caustics_refractive = False
        sc.cycles.blur_glossy = 0.3
        sc.render.film_transparent = True
        sc.render.resolution_x = int(w * scale)
        sc.render.resolution_y = int(h * scale)
        sc.render.resolution_percentage = 100
        sc.render.image_settings.file_format = 'PNG'
        sc.render.image_settings.color_mode = 'RGBA'
        sc.view_settings.view_transform = 'AgX'
        sc.view_settings.exposure = 0.45
        try:
            sc.view_settings.look = 'AgX - Punchy'
        except TypeError:
            pass
        sc.render.filepath = f'{out_dir}/{name}.png'
        bpy.ops.render.render(write_still=True)
        print(f'{name} : {time.time() - t0:.0f} s, {sc.render.resolution_x} × {sc.render.resolution_y}, {sc.cycles.samples} échantillons', flush=True)


main()
