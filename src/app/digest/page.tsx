import type { Metadata } from "next";
import Link from "next/link";
import { getAllDigestMeta } from "@/lib/digests";

export const metadata: Metadata = {
  title: "Weekly Digest — Erik Huckle",
  description:
    "Weekly curated AI and technology digest for business leaders. What happened, why it matters, and what to do about it.",
  alternates: {
    types: {
      "application/rss+xml": "/digest/feed.xml",
    },
  },
};

export default function DigestIndex() {
  const posts = getAllDigestMeta();

  return (
    <main className="min-h-screen bg-bg text-fg font-mono p-4 md:p-8">
      <div className="max-w-terminal mx-auto">
        {/* Header */}
        <div className="mb-6 text-fg-dim text-xs">
          <p>HUCKLE TERMINAL v1.0.0</p>
          <p>
            Module: <span className="text-fg">weekly-digest</span>
          </p>
          <p>
            Subscribe:{" "}
            <a href="/digest/feed.xml" className="text-fg hover:bg-highlight px-1">
              [RSS]
            </a>
          </p>
        </div>

        <pre className="text-fg text-xs md:text-sm leading-tight mb-6 overflow-x-auto">
          {`
┌──────────────────────────────────────────────────────────────┐
│  WEEKLY DIGEST                                               │
│  AI, Technology & Market Intelligence                        │
│  Curated for decision-makers                                 │
└──────────────────────────────────────────────────────────────┘`}
        </pre>

        <p className="text-muted mb-2">$ ls -la ./digest/</p>

        {posts.length === 0 ? (
          <div className="pl-4">
            <p className="text-fg-dim">
              No digest entries yet. First issue coming soon.
            </p>
          </div>
        ) : (
          <div className="pl-4 space-y-4">
            {posts.map((post, index) => (
              <div key={post.slug} className="group">
                <p>
                  <span className="text-muted">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>{" "}
                  <Link
                    href={`/digest/${post.slug}`}
                    className="hover:bg-highlight px-1"
                  >
                    {post.title}
                  </Link>
                </p>
                <p className="text-muted text-xs pl-5">
                  {post.date}
                  {post.summary ? ` | ${post.summary}` : ""}
                </p>
                {post.tags.length > 0 && (
                  <p className="text-fg-dim text-xs pl-5">
                    {post.tags.map((t) => `#${t}`).join(" ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="border-t border-border my-8"></div>

        {/* Footer nav */}
        <footer className="text-muted text-xs">
          <p>
            <span className="text-muted">$</span>{" "}
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
