import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { posts } from "./src/content/posts";
import { papers } from "./src/content/papers";
import { SITE_URL } from "./src/content/profile";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Emits rss.xml and sitemap.xml from the same content the pages render. */
function feeds(): Plugin {
  return {
    name: "msp-feeds",
    apply: "build",
    generateBundle() {
      const items = posts
        .map(
          p => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/writing/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/writing/${p.slug}</guid>
      <pubDate>${new Date(p.date + "T00:00:00Z").toUTCString()}</pubDate>
      <category>${esc(p.tag)}</category>${p.summary ? `\n      <description>${esc(p.summary)}</description>` : ""}
    </item>`,
        )
        .join("\n");
      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MSP Raja · Writing</title>
    <link>${SITE_URL}/writing</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Essays, research notes and a daily lessons series on agents, evaluation and AI in supply chains.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
      const today = new Date().toISOString().slice(0, 10);
      const urls: [string, string][] = [
        ["/", today],
        ["/writing", posts[0]?.date ?? today],
        ["/papers", papers[0]?.date ?? today],
        ["/research", today],
        ["/about", today],
        ...posts.map(p => [`/writing/${p.slug}`, p.date] as [string, string]),
        ...papers.map(p => [`/papers/${p.slug}`, p.date] as [string, string]),
      ];
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, d]) => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${d}</lastmod></url>`).join("\n")}
</urlset>
`;
      this.emitFile({ type: "asset", fileName: "rss.xml", source: rss });
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemap });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), feeds()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
