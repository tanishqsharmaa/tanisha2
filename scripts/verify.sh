#!/usr/bin/env bash
set -euo pipefail

echo "=== 1. TypeScript Check ==="
npm run typecheck

echo "=== 2. ESLint Check ==="
npm run lint

echo "=== 3. Vitest Test Suite ==="
npm run test -- --run

echo "=== 4. Production Build ==="
npm run build

echo "=== ALL VERIFICATIONS PASSED ==="
