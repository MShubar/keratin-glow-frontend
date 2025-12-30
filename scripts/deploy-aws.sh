#!/usr/bin/env bash
set -euo pipefail

# Build the app, upload to S3, and invalidate CloudFront.
# Requires: AWS CLI, Terraform initialized/applied, and valid AWS credentials.

# You can pass BUCKET and DIST_ID or let the script read from terraform outputs.
BUCKET="${BUCKET:-}"
DIST_ID="${DIST_ID:-}"

if [[ -z "$BUCKET" ]]; then
  if command -v terraform >/dev/null 2>&1; then
    BUCKET=$(terraform -chdir="infra/aws" output -raw website_bucket_name)
  else
    echo "Set BUCKET env var or install Terraform to read outputs." >&2
    exit 1
  fi
fi

if [[ -z "$DIST_ID" ]]; then
  if command -v terraform >/dev/null 2>&1; then
    DIST_ID=$(terraform -chdir="infra/aws" output -raw cloudfront_distribution_id)
  else
    echo "Set DIST_ID env var or install Terraform to read outputs." >&2
    exit 1
  fi
fi

# Build with Vite
npm ci
npm run build

# Sync artifacts to S3
aws s3 sync ./dist "s3://$BUCKET" --delete

# Invalidate CloudFront cache (ensure users see latest HTML quickly)
aws cloudfront create-invalidation \
  --distribution-id "$DIST_ID" \
  --paths "/*"

echo "Deployed to S3 bucket $BUCKET and invalidated CloudFront $DIST_ID"
