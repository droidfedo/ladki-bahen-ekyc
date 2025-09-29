export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://ladki-bahin-ekyc.netlify.app/sitemap.xml

# Government website - allow all search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=86400'
    }
  });
}
