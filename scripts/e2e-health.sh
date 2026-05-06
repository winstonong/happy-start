#!/usr/bin/env bash
# E2E smoke test: verifies /api/health returns HTTP 200
set -euo pipefail

BASE_URL="${1:-http://localhost:8080}"
ENDPOINT="$BASE_URL/api/health"

STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$ENDPOINT")

if [ "$STATUS" = "200" ]; then
  echo "✅ PASS — GET $ENDPOINT returned $STATUS"
  exit 0
else
  echo "❌ FAIL — GET $ENDPOINT returned $STATUS (expected 200)"
  exit 1
fi
