import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDigestBySlug, getAllDigestSlugs } from "@/lib/digests";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllDigestSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getDigestBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Erik Huckle`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function DigestPost({ params }: Props) {
  const post = await getDigestBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-bg text-fg font-mono p-4 md:p-8">
      <div className="max-w-terminal mx-auto">
        {/* Header */}
        <div className="mb-6 text-fg-dim text-xs">
          <p>HUCKLE TERMINAL v1.0.0</p>
          <p>
            Module: <span className="text-fg">weekly-digest</span>
          </p>
        </div>

        <p className="text-muted mb-2">$ cat ./digest/{params.slug}.md</p>

        <pre className="text-fg-dim text-xs mb-4">
          {`┌──────────────────────────────────────────────────────────────┐
│  ${post.title.padEnd(61).slice(0, 61)}│
└──────────────────────────────────────────────────────────────┘`}
        </pre>

        <div className="pl-4 mb-2">
          <p className="text-muted text-xs">{post.date}</p>
          {post.tags.length > 0 && (
            <p className="text-fg-dim text-xs">
              {post.tags.map((t) => `#${t}`).join(" ")}
            </p>
          )}
        </div>

        {post.summary && (
          <p className="pl-4 text-fg-dim text-sm mb-6 italic">
            {post.summary}
          </p>
        )}

        <div className="border-t border-border my-6"></div>

        {/* Rendered markdown content */}
        <article
          className="digest-content pl-4"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="border-t border-border my-8"></div>

        {/* Footer nav */}
        <footer className="text-muted text-xs">
          <p>
            <span className="text-muted">$</span>{" "}
            <Link href="/digest" className="hover:bg-highlight px-1">
              cd ../digest
            </Link>{" "}
            |{" "}
            <Link href="/" className="hover:bg-highlight px-1">
              cd ~
            </Link>
          </p>
          <p className="mt-4">
            <span className="text-fg-dim">
              ───────────────────────────────────────
            </span>
          </p>
          <p className="mt-2">
            Published weekly.{" "}
            <a href="/digest/feed.xml" className="hover:bg-highlight px-1">
              Subscribe via RSS
            </a>
          </p>
          <p className="mt-1">
            <span className="cursor">█</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
