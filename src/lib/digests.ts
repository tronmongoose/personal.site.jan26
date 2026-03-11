import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const digestsDirectory = path.join(process.cwd(), "src/content/digests");

export interface DigestPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  contentHtml: string;
}

export interface DigestMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

function getDigestFiles(): string[] {
  if (!fs.existsSync(digestsDirectory)) return [];
  return fs
    .readdirSync(digestsDirectory)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse(); // newest first
}

export function getAllDigestMeta(): DigestMeta[] {
  return getDigestFiles().map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(digestsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags || [],
    };
  });
}

export async function getDigestBySlug(
  slug: string
): Promise<DigestPost | null> {
  const filePath = path.join(digestsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    summary: data.summary || "",
    tags: data.tags || [],
    contentHtml,
  };
}

export function getAllDigestSlugs(): string[] {
  return getDigestFiles().map((f) => f.replace(/\.md$/, ""));
}
