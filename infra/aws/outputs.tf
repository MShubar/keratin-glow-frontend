output "cloudfront_domain_name" {
  description = "CloudFront distribution domain to use in DNS (CNAME/ALIAS)"
  value       = aws_cloudfront_distribution.cdn.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for invalidations"
  value       = aws_cloudfront_distribution.cdn.id
}

output "website_bucket_name" {
  description = "S3 bucket hosting the site content"
  value       = aws_s3_bucket.website.bucket
}

output "acm_dns_validation_records" {
  description = "Add these CNAME records at AEserver DNS to validate the certificate"
  value = [
    for dvo in aws_acm_certificate.cert.domain_validation_options : {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
      domain = dvo.domain_name
    }
  ]
}
