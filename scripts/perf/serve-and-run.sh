#!/usr/bin/env bash
# Outil de travail : démarre le serveur de production sur le port 3100, lance un script Node, arrête le serveur.
# Usage, depuis la racine du dépôt, après `npm run build` : scripts/perf/serve-and-run.sh <script.mjs> [arguments…]
#
# Garde-fous (les campagnes de measure.mjs s'interrompaient ou se figeaient) :
# - refuse de démarrer si le port 3100 est déjà pris : sinon le script mesurerait l'ancien serveur, peut-être d'un autre build,
#   ou resterait bloqué sur un ancien next-server figé (le libérer : fuser -k -n tcp 3100) ;
# - attend le serveur au plus 60 s, chaque requête au plus 5 s, et s'arrête si le serveur meurt au démarrage ;
# - journal du serveur dans $SERVER_LOG (par défaut un fichier temporaire, affiché en cas d'échec) ;
# - arrête le serveur et le script Node à la sortie, y compris sur Ctrl+C ou SIGTERM (le script tourne en arrière-plan
#   et `wait` rend la main au signal ; sans cela, bash attend la fin du script avant de traiter le signal).
set -euo pipefail
PORT=3100
URL="http://localhost:$PORT/fr/configurateur/ring-001"

if [ ! -f node_modules/next/dist/bin/next ]; then
  echo "serve-and-run : à lancer depuis la racine du dépôt (node_modules/next introuvable)." >&2
  exit 1
fi
if [ ! -f .next/BUILD_ID ]; then
  echo "serve-and-run : pas de build de production, lancer d'abord npm run build." >&2
  exit 1
fi
if [ "$(date -r .next/BUILD_ID +%s)" -lt "$(git log -1 --format=%ct 2>/dev/null || echo 0)" ]; then
  echo "serve-and-run : attention, le build est plus ancien que le dernier commit (npm run build)." >&2
fi
if (exec 3<>"/dev/tcp/127.0.0.1/$PORT") 2>/dev/null; then
  echo "serve-and-run : le port $PORT est déjà occupé$(command -v fuser >/dev/null && fuser -n tcp "$PORT" 2>/dev/null | sed 's/^ */ (processus /;s/$/)/')." >&2
  echo "Arrêter l'ancien serveur (fuser -k -n tcp $PORT) puis relancer." >&2
  exit 1
fi

LOG="${SERVER_LOG:-$(mktemp "${TMPDIR:-/tmp}/jr-next-start.XXXXXX")}"
NEXT_TELEMETRY_DISABLED=1 node node_modules/next/dist/bin/next start -p "$PORT" >"$LOG" 2>&1 &
SRV=$!
CHILD=

stop() {
  local pid=$1 i
  kill "$pid" 2>/dev/null || return 0
  for i in $(seq 50); do
    kill -0 "$pid" 2>/dev/null || return 0
    sleep 0.1
  done
  kill -9 "$pid" 2>/dev/null || true
}
cleanup() {
  local status=$?
  if [ -n "$CHILD" ]; then stop "$CHILD"; fi
  stop "$SRV"
  wait 2>/dev/null || true
  if [ "$status" -eq 0 ] && [ -z "${SERVER_LOG:-}" ]; then rm -f "$LOG"; fi
  exit "$status"
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

deadline=$((SECONDS + 60))
until curl -s -o /dev/null --max-time 5 "$URL"; do
  if ! kill -0 "$SRV" 2>/dev/null; then
    echo "serve-and-run : le serveur s'est arrêté au démarrage. Journal ($LOG) :" >&2
    tail -n 20 "$LOG" >&2
    exit 1
  fi
  if [ "$SECONDS" -ge "$deadline" ]; then
    echo "serve-and-run : le serveur ne répond pas après 60 s. Journal ($LOG) :" >&2
    tail -n 20 "$LOG" >&2
    exit 1
  fi
  sleep 0.2
done

node "$@" &
CHILD=$!
wait "$CHILD"
