import { content } from "@/content/content";

export interface WritingItem {
  title: string;
  url: string;
  date: string;
  excerpt: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractExcerpt(content: string, maxLength: number = 150): string {
  const text = stripHtml(content);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  } catch {
    return dateString;
  }
}

export async function fetchMediumRSS(): Promise<WritingItem[]> {
  const rssUrl = content.writing.rss;

  if (!rssUrl) {
    return [...content.writing.curated];
  }

  try {
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }

    const xml = await response.text();

    // Simple XML parsing for RSS items
    const items: WritingItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < 5) {
      const itemXml = match[1];

      const titleMatch = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const title = titleMatch ? titleMatch[1] : "";

      const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
      const url = linkMatch ? linkMatch[1] : "";

      const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
      const date = pubDateMatch ? formatDate(pubDateMatch[1]) : "";

      const contentMatch = itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
      const descMatch = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
      const rawContent = contentMatch ? contentMatch[1] : descMatch ? descMatch[1] : "";
      const excerpt = extractExcerpt(rawContent);

      if (title && url) {
        items.push({ title, url, date, excerpt });
      }
    }

    if (items.length > 0) {
      return items;
    }

    // Fallback to curated if RSS parsing yields no results
    return [...content.writing.curated];
  } catch (error) {
    console.error("Error fetching Medium RSS:", error);
    return [...content.writing.curated];
  }
}
