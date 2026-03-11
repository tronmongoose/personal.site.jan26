import { getAllDigestMeta } from "@/lib/digests";

export async function GET() {
  const posts = getAllDigestMeta();
  const siteUrl = "https://www.erikhuckle.com";

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/digest/${post.slug}</link>
      <guid>${siteUrl}/digest/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
      ${post.tags.map((t) => `<category>${t}</category>`).join("\n      ")}
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Erik Huckle — Weekly Digest</title>
    <link>${siteUrl}/digest</link>
    <description>Weekly curated AI and technology digest for business leaders.</description>
    <language>en-us</language>
    <managingEditor>erik@erikhuckle.com (Erik Huckle)</managingEditor>
    <atom:link href="${siteUrl}/digest/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
