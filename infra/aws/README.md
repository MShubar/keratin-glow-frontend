# AWS Static Hosting (S3 + CloudFront) for `keratinglow.bh`

This Terraform sets up a private S3 bucket, a CloudFront distribution (global CDN), and an ACM certificate. You will add DNS CNAMEs in AEserver to validate the certificate, then point the domain to CloudFront.

## Prereqs
- AWS CLI v2 and Terraform v1.5+
- AWS credentials configured (e.g., `aws configure`)
- Pick a globally unique S3 bucket name.

## Configure
Edit `infra/aws/terraform.tfvars` (create it) with values:

```hcl
aws_region  = "me-south-1"
domain_name = "keratinglow.bh"
bucket_name = "keratinglow-bh-website"
price_class = "PriceClass_All"
```

## Steps
1) Initialize Terraform
```bash
terraform -chdir="infra/aws" init
```

2) Create the ACM certificate first to get DNS records
```bash
terraform -chdir="infra/aws" apply -target=aws_acm_certificate.cert -auto-approve
terraform -chdir="infra/aws" output acm_dns_validation_records
```
Copy the CNAME records into AEserver DNS exactly as shown (name, type CNAME, value).

3) After DNS propagates and ACM shows "Issued", continue:
```bash
terraform -chdir="infra/aws" apply -auto-approve
```
This creates CloudFront, S3, OAC, and the bucket policy.

4) AEserver DNS (point the domain to CloudFront)
- Use the output `cloudfront_domain_name` (looks like `dXXXX.cloudfront.net`).
- If AEserver supports apex `ALIAS/ANAME`:
  - `ALIAS/ANAME` `@` → CloudFront domain
  - `CNAME` `www` → CloudFront domain
- If apex ALIAS isn’t supported:
  - Prefer moving DNS to Route 53 (or Cloudflare) for apex alias flattening, then set `A (Alias)` `@` → CloudFront and `CNAME` `www` → CloudFront.
  - Alternatively, make `www` primary and redirect apex to `www`.

5) Deploy app artifacts
```bash
bash ./scripts/deploy-aws.sh
```
This builds the app, syncs `dist/` to S3, and invalidates CloudFront.

## Notes
- SPA routing: CloudFront custom error responses route 403/404 → `/index.html` with 200.
- Caching: `index.html` short TTL; `/assets/*` cached for 1 year.
- Compression and HTTP/2/3 are enabled via CloudFront automatically.
