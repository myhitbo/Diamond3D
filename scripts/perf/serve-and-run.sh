#!/usr/bin/env bash
# Outil de travail : démarre le serveur de production, lance un script, arrête le serveur.
set -euo pipefail
NEXT_TELEMETRY_DISABLED=1 node node_modules/next/dist/bin/next start -p 3100 > /dev/null 2>&1 &
SRV=$!
trap 'kill $SRV 2>/dev/null || true' EXIT
until curl -s -o /dev/null localhost:3100/fr/configurateur/ring-001; do sleep 0.2; done
node "$@"
