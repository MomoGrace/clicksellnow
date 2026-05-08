# ClickSellNow PDF Tools v2

This is a complete static website package for clicksellnow.com.

Included:
- 20 public PDF tool pages
- 30 PDF guide articles
- Homepage, All Tools, Guides hub
- About, Contact, Privacy Policy, Terms of Use
- robots.txt, sitemap.xml, ads.txt
- Unified footer and support email: clicksellnow@proton.me
- Google AdSense publisher script using ca-pub-5952834143682557

Important notes:
- Tools run in the browser using pdf-lib, PDF.js, and JSZip loaded from CDN.
- Compress PDF is a basic browser-side optimizer/rebuilder and is transparent about limitations.
- PDF to Text extracts selectable text only; it does not perform OCR.
- WEBP to PDF uses browser canvas conversion.
- Test all main tools after deploying, especially on Vercel production URL.

Deployment:
1. Backup your current site first.
2. Replace your project files with this package.
3. Deploy to Vercel.
4. Visit /sitemap.xml and /ads.txt to confirm they load.
5. Submit sitemap.xml in Google Search Console.
6. Do not resubmit AdSense until pages are live, navigable, and tested.
