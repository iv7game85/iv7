import { BLOG_POSTS, NAV_LINKS, SITE_URL } from "../../config/constants";

export async function GET() {
  const pages = ["/", ...NAV_LINKS.map((n) => n.href)];

  const blogUrls = BLOG_POSTS.map((b) => `/blog/${b.slug}`);

  const urls = Array.from(new Set([...pages, ...blogUrls]));

  const lastmod = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => {
    const loc = `${SITE_URL}${path}`;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
