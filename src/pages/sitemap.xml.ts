export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://ladki-bahin-ekyc.netlify.app/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="mr" href="https://ladki-bahin-ekyc.netlify.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://ladki-bahin-ekyc.netlify.app/en" />
  </url>
  <url>
    <loc>https://ladki-bahin-ekyc.netlify.app/en</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="mr" href="https://ladki-bahin-ekyc.netlify.app/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://ladki-bahin-ekyc.netlify.app/en" />
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
}
