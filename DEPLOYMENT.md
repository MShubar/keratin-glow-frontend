# AWS Deployment Guide - Keratin Glow

Deploy your Vite + React frontend to AWS S3 + CloudFront with global edge caching.

## Prerequisites

- AWS CLI installed and configured: `aws configure`
- Node.js and npm installed
- Domain `keratinglow.bh` registered with AEserver

## Deployment Steps

### 0. Run commands from the project directory

Git Bash (bash.exe on Windows):
```bash
cd "/c/Users/smdbhlp02/Desktop/Keratin Glow/keratin-glow-frontend"
```

PowerShell alternative:
```powershell
cd "C:\Users\smdbhlp02\Desktop\Keratin Glow\keratin-glow-frontend"
```

### 1. Create an ACM certificate in us-east-1

CloudFront requires certificates in `us-east-1`.

```bash
aws acm request-certificate \
  --region us-east-1 \
  --domain-name keratinglow.bh \
  --subject-alternative-names www.keratinglow.bh \
  --validation-method DNS \
  --options CertificateTransparencyLoggingPreference=ENABLED \
  --tags Key=Name,Value=keratinglow-website
```

Get validation CNAME records:
```bash
aws acm describe-certificate \
  --region us-east-1 \
  --certificate-arn <CERTIFICATE_ARN> \
  --query 'Certificate.DomainValidationOptions[*].ResourceRecord'
```

Add the shown CNAMEs in AEserver DNS and wait for validation:
```bash
aws acm wait certificate-validated \
  --region us-east-1 \
  --certificate-arn <CERTIFICATE_ARN>
```

### 2. Deploy Infrastructure (CloudFormation in us-east-1)

```bash
aws cloudformation deploy \
  --template-file infrastructure.yml \
  --stack-name keratinglow-website \
  --parameter-overrides DomainName=keratinglow.bh BucketName=keratinglow-bh-website AcmCertificateArn=<CERTIFICATE_ARN> \
  --capabilities CAPABILITY_IAM \
  --region us-east-1
```

Note: If you see “Invalid template path infrastructure.yml”, ensure you’re in the project folder or pass an absolute path with `--template-file`.

### 3. Get CloudFront Distribution Details

```bash
# Get distribution ID and domain
aws cloudformation describe-stacks \
  --stack-name keratinglow-website \
  --query 'Stacks[0].Outputs' \
  --region us-east-1
```

Copy the `DistributionId` and `DistributionDomainName` values.

### 4. Update deploy.sh

Edit `deploy.sh` and set:
```bash
DISTRIBUTION_ID="E1ABCDEFGHIJK"  # Your CloudFront distribution ID
```

Make the script executable:
```bash
chmod +x deploy.sh
```

### 5. Deploy Your Website

```bash
# Build and deploy in one command
./deploy.sh
```

Or manually:
```bash
# Build
npm ci
npm run build

# Upload to S3
aws s3 sync ./dist s3://keratinglow-bh-website --delete --region us-east-1

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E1ABCDEFGHIJK --paths "/*"
```

### 6. Configure AEserver DNS

**Option A: If AEserver supports ALIAS/ANAME records (recommended)**

Add these records in AEserver DNS panel:

```
Type: ALIAS (or ANAME)
Name: @
Value: d1234abcdef.cloudfront.net  # Your CloudFront domain
TTL: Auto or 300

Type: CNAME
Name: www
Value: d1234abcdef.cloudfront.net
TTL: 300
```

**Option B: If AEserver does NOT support ALIAS at apex**

You have two choices:

1. **Use www as primary (simplest):**
   ```
   Type: CNAME
   Name: www
   Value: d1234abcdef.cloudfront.net
   TTL: 300
   
   Type: URL Redirect (if AEserver offers it)
   From: keratinglow.bh
   To: https://www.keratinglow.bh
   ```

2. **Move DNS to Route 53 (best performance):**
   - In AWS Route 53, create a hosted zone for `keratinglow.bh`
   - Get the Route 53 nameservers
   - Update nameservers at AEserver to the Route 53 ones
   - In Route 53, create:
     - `A` record (Alias) `@` → CloudFront distribution
     - `CNAME` `www` → CloudFront distribution

### 7. Verify Deployment

Wait for DNS propagation (5 minutes to 48 hours, usually < 1 hour), then:

```bash
# Check HTTP response
curl -I https://keratinglow.bh
curl -I https://www.keratinglow.bh

# Check DNS
dig keratinglow.bh
dig www.keratinglow.bh
```

You should see:
- HTTP 200 responses
- `x-cache` headers from CloudFront
- Your React app content

## Updates & Maintenance

### Deploy updates
```bash
./deploy.sh
```

### Monitor CloudFront
```bash
# Check invalidation status
aws cloudfront list-invalidations --distribution-id E1ABCDEFGHIJK

# View distribution config
aws cloudfront get-distribution --id E1ABCDEFGHIJK
```

### Cost estimation
- S3: ~$0.023/GB storage, ~$0.01/1000 GET requests
- CloudFront: ~$0.085/GB transfer (Middle East), first 10TB/month
- ACM certificate: FREE
- Route 53 (if used): $0.50/month per hosted zone + $0.40/million queries

For a small marketing site with moderate traffic, expect $5-20/month.

## Troubleshooting

### Certificate validation stuck
- Verify CNAME records are correct in AEserver DNS
- DNS propagation can take time; wait 30 minutes and retry
- Check with: `dig _abc123xyz.keratinglow.bh CNAME`

### 403 errors after deploy
- Check S3 bucket policy allows CloudFront OAC
- Verify CloudFormation stack created successfully
- CloudFront may cache errors; create an invalidation

### SPA routes return 404
- Custom error responses are configured in CloudFormation
- After deployment, test client-side routes like `/services`, `/pricing`

### Slow first load
- First request to CloudFront edge may be slow (cache miss)
- Subsequent requests will be fast (edge cached)
- Pre-warm cache by visiting all pages after deploy

## Architecture

```
User Browser
    ↓ HTTPS
CloudFront (Global Edge Locations)
    ↓ (OAC)
S3 Bucket (me-south-1, private)
    ← Contains: index.html, assets/, etc.
```

- **S3**: Origin storage, private bucket
- **CloudFront**: Global CDN, HTTP/3, Brotli compression, edge caching
- **OAC**: Secure S3 access (Origin Access Control)
- **ACM**: Free SSL/TLS certificates
- **AEserver DNS**: Points your domain to CloudFront

## Security Features

✅ Private S3 bucket (no public access)  
✅ CloudFront OAC (secure origin access)  
✅ HTTPS enforced (redirect HTTP → HTTPS)  
✅ TLS 1.2+ only  
✅ HTTP/3 + QUIC support  
✅ Automatic Brotli/Gzip compression  

## Performance Optimizations

✅ Long cache for hashed assets (1 year)  
✅ Short cache for `index.html` (immediate updates)  
✅ Global edge locations (low latency worldwide)  
✅ HTTP/2 and HTTP/3 enabled  
✅ Automatic compression  

---

**Questions?** Check AWS CloudFormation stack events or CloudFront distribution settings in the AWS Console.
