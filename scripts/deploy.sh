#!/usr/bin/env bash
# Déploie le contenu de dist/ vers le serveur via rsync + SSH.
# Usage : npm run deploy (build + ce script). Ne pas lancer ce script seul
# sans avoir buildé avant, sinon une version obsolète serait envoyée.
#
# Configuration : copier .env.example en .env (jamais commit, voir .gitignore)
# et renseigner SERVER, TARGET_PATH, PORT (optionnel, défaut 22),
# SSH_KEY_PATH (optionnel, sinon utilise la clé/agent SSH par défaut).
set -euo pipefail

if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

BUILD_DIR="dist"
TARGET_PATH="${TARGET_PATH:-}"
SERVER="${SERVER:-}"
PORT="${PORT:-22}"

if [ -z "$SERVER" ] || [ -z "$TARGET_PATH" ]; then
  echo "Erreur : SERVER et TARGET_PATH doivent être définis (copie .env.example en .env)." >&2
  exit 1
fi

# Évite d'écraser tout le serveur si TARGET_PATH est mal configuré.
if [ "$TARGET_PATH" = "/" ]; then
  echo "Erreur : TARGET_PATH=\"/\" refusé par sécurité." >&2
  exit 1
fi

if [ ! -d "$BUILD_DIR" ]; then
  echo "Erreur : \"$BUILD_DIR\" est introuvable. Lance d'abord \`npm run build\` (ou \`npm run deploy\` qui le fait automatiquement)." >&2
  exit 1
fi

SSH_OPTS="-p $PORT"
if [ -n "${SSH_KEY_PATH:-}" ]; then
  key_path="${SSH_KEY_PATH/#\~/$HOME}"
  if [ ! -f "$key_path" ]; then
    echo "Erreur : clé SSH introuvable : $key_path" >&2
    exit 1
  fi
  SSH_OPTS="$SSH_OPTS -i $key_path"
fi

RSYNC_OPTS=(-avz)
[ "${DEPLOY_DELETE:-false}" = "true" ] && RSYNC_OPTS+=(--delete)
[ "${DEPLOY_DRY_RUN:-false}" = "true" ] && RSYNC_OPTS+=(--dry-run)

echo "Deploying to server: $SERVER, path: $TARGET_PATH..."
# Slash final sur "$BUILD_DIR/" (et non "$BUILD_DIR/*") : rsync copie alors
# le contenu du dossier, fichiers cachés inclus, même si dist/ est vide ou
# contient un jour un fichier commençant par un point (ex: .htaccess) —
# le glob "*" du shell les aurait silencieusement ignorés.
rsync "${RSYNC_OPTS[@]}" -e "ssh $SSH_OPTS" "$BUILD_DIR"/ "$SERVER:$TARGET_PATH"

echo "Déploiement terminé."
