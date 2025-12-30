#!/bin/bash
set -e

# Keratin Glow - AWS Deployment Script
# Builds the app and deploys to S3 + CloudFront

# Configuration - UPDATE THESE VALUES
BUCKET_NAME="keratinglow-bh-website"
DISTRIBUTION_ID=""  # Add your CloudFront distribution ID after creation
# IMPORTANT: CloudFront uses ACM certs in us-east-1. Deploy stack in us-east-1
# The S3 bucket created by the stack is also in us-east-1 by default
AWS_REGION="us-east-1"
AWS_PROFILE="${AWS_PROFILE:-default}"

echo "🔨 Building production bundle..."
npm ci
npm run build

echo "📦 Syncing to S3 bucket: $BUCKET_NAME"
aws s3 sync ./dist "s3://${BUCKET_NAME}" \
  --delete \
  --region "$AWS_REGION" \
  --profile "$AWS_PROFILE" \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "index.html" \
  --exclude "*.map"

# Upload index.html separately with short cache
echo "📄 Uploading index.html with short cache..."
aws s3 cp ./dist/index.html "s3://${BUCKET_NAME}/index.html" \
  --region "$AWS_REGION" \
  --profile "$AWS_PROFILE" \
  --cache-control "public,max-age=0,must-revalidate" \
  --content-type "text/html"

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "🔄 Invalidating CloudFront cache..."
  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --profile "$AWS_PROFILE"
  echo "✅ Deployment complete! CloudFront invalidation in progress."
else
  echo "⚠️  DISTRIBUTION_ID not set. Skipping CloudFront invalidation."
  echo "✅ S3 upload complete!"
fi

echo ""
echo "🌐 Once DNS is configured, your site will be live at:"
echo "   https://keratinglow.bh"
echo "   https://www.keratinglow.bh"
