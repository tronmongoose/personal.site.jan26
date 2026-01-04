import { content } from "@/content/content";
import { fetchMediumRSS } from "@/lib/rss";

export default async function Home() {
  const writingItems = await fetchMediumRSS();

  return (
    <main className="min-h-screen bg-bg text-fg font-mono p-4 md:p-8">
      <div className="max-w-terminal mx-auto">

        {/* Boot sequence */}
        <div className="mb-6 text-fg-dim text-xs">
          <p>HUCKLE TERMINAL v1.0.0</p>
          <p>Copyright (c) 2025 Erik Huckle</p>
          <p>Loading profile data... <span className="text-fg">OK</span></p>
          <p>Establishing connections... <span className="text-fg">OK</span></p>
          <p className="mt-2">Type &apos;help&apos; for available commands or click any [link]</p>
        </div>

        {/* ASCII Header */}
        <pre className="text-fg text-xs md:text-sm leading-tight mb-6 overflow-x-auto">
{`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ███████╗██████╗ ██╗██╗  ██╗                                ║
║   ██╔════╝██╔══██╗██║██║ ██╔╝                                ║
║   █████╗  ██████╔╝██║█████╔╝                                 ║
║   ██╔══╝  ██╔══██╗██║██╔═██╗                                 ║
║   ███████╗██║  ██║██║██║  ██╗                                ║
║   ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝                                ║
║                                                               ║
║   ██╗  ██╗██╗   ██╗ ██████╗██╗  ██╗██╗     ███████╗          ║
║   ██║  ██║██║   ██║██╔════╝██║ ██╔╝██║     ██╔════╝          ║
║   ███████║██║   ██║██║     █████╔╝ ██║     █████╗            ║
║   ██╔══██║██║   ██║██║     ██╔═██╗ ██║     ██╔══╝            ║
║   ██║  ██║╚██████╔╝╚██████╗██║  ██╗███████╗███████╗          ║
║   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝          ║
║                                                               ║
║   Writer • Creator • Builder                                  ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`}
        </pre>

        {/* Command prompt - Links */}
        <div className="mb-8">
          <p className="text-muted mb-2">$ ls -la ./links/</p>
          <div className="pl-4 space-y-1">
            <p>
              <span className="text-muted">drwxr-xr-x</span>{" "}
              <a href={content.links.medium} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                [medium]
              </a>{" "}
              <span className="text-muted">-&gt; writing &amp; articles</span>
            </p>
            <p>
              <span className="text-muted">drwxr-xr-x</span>{" "}
              <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                [linkedin]
              </a>{" "}
              <span className="text-muted">-&gt; professional profile</span>
            </p>
            <p>
              <span className="text-muted">drwxr-xr-x</span>{" "}
              <a href={content.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                [twitter]
              </a>{" "}
              <span className="text-muted">-&gt; @Beyourhuckberry</span>
            </p>
            <p>
              <span className="text-muted">drwxr-xr-x</span>{" "}
              <a href={content.links.oncyber} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                [oncyber]
              </a>{" "}
              <span className="text-muted">-&gt; 3D digital museum</span>
            </p>
            <p>
              <span className="text-muted">drwxr-xr-x</span>{" "}
              <a href={content.links.seize} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                [6529]
              </a>{" "}
              <span className="text-muted">-&gt; CryptoTron72 profile</span>
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <p className="text-muted mb-2">$ cat ./sections.txt</p>
          <div className="pl-4 flex flex-wrap gap-4">
            <a href="#writing" className="hover:bg-highlight px-1">[1] writing</a>
            <a href="#linkedin" className="hover:bg-highlight px-1">[2] linkedin</a>
            <a href="#tweets" className="hover:bg-highlight px-1">[3] tweets</a>
            <a href="#museum" className="hover:bg-highlight px-1">[4] museum</a>
          </div>
        </div>

        <div className="border-t border-border my-8"></div>

        {/* Writing Section */}
        <section id="writing" className="mb-8 scroll-mt-4">
          <p className="text-muted mb-2">$ cat ./writing/recent.log</p>
          <pre className="text-fg-dim text-xs mb-4">
{`┌──────────────────────────────────────────────────────────────┐
│  RECENT ARTICLES                                             │
└──────────────────────────────────────────────────────────────┘`}
          </pre>
          <div className="pl-4 space-y-4">
            {writingItems.map((item, index) => (
              <div key={index} className="group">
                <p>
                  <span className="text-muted">[{String(index + 1).padStart(2, '0')}]</span>{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-highlight px-1"
                  >
                    {item.title}
                  </a>
                </p>
                <p className="text-muted text-xs pl-5">
                  {item.date} | {item.excerpt}
                </p>
              </div>
            ))}
            <p className="mt-4">
              <span className="text-muted">$</span>{" "}
              <a href={content.links.medium} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                open medium --all
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-border my-8"></div>

        {/* LinkedIn Section */}
        <section id="linkedin" className="mb-8 scroll-mt-4">
          <p className="text-muted mb-2">$ cat ./linkedin/posts.log</p>
          <pre className="text-fg-dim text-xs mb-4">
{`┌──────────────────────────────────────────────────────────────┐
│  LINKEDIN POSTS                                              │
└──────────────────────────────────────────────────────────────┘`}
          </pre>
          <div className="pl-4 space-y-4">
            {content.linkedinPosts.map((post, index) => (
              <div key={index}>
                <p>
                  <span className="text-muted">[{String(index + 1).padStart(2, '0')}]</span>{" "}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-highlight px-1"
                  >
                    {post.title}
                  </a>
                </p>
                <p className="text-muted text-xs pl-5">
                  {post.date} | {post.summary}
                </p>
              </div>
            ))}
            <p className="mt-4">
              <span className="text-muted">$</span>{" "}
              <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                open linkedin --profile
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-border my-8"></div>

        {/* Twitter Section */}
        <section id="tweets" className="mb-8 scroll-mt-4">
          <p className="text-muted mb-2">$ tail -f ./twitter/feed.log</p>
          <pre className="text-fg-dim text-xs mb-4">
{`┌──────────────────────────────────────────────────────────────┐
│  @Beyourhuckberry                                            │
└──────────────────────────────────────────────────────────────┘`}
          </pre>
          <div className="pl-4 space-y-3">
            {content.tweets.map((tweet, index) => (
              <div key={index}>
                <p>
                  <span className="text-muted">&gt;</span>{" "}
                  <a
                    href={tweet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-highlight px-1"
                  >
                    &quot;{tweet.text}&quot;
                  </a>
                </p>
                <p className="text-muted text-xs pl-3">
                  — {tweet.date}
                </p>
              </div>
            ))}
            <p className="mt-4">
              <span className="text-muted">$</span>{" "}
              <a href={content.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                follow @Beyourhuckberry
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-border my-8"></div>

        {/* Museum Section */}
        <section id="museum" className="mb-8 scroll-mt-4">
          <p className="text-muted mb-2">$ ./museum --launch</p>
          <pre className="text-fg-dim text-xs mb-4">
{`┌──────────────────────────────────────────────────────────────┐
│  3D DIGITAL MUSEUM                                           │
└──────────────────────────────────────────────────────────────┘`}
          </pre>
          <div className="pl-4">
            <p className="mb-2">
              <span className="text-fg">{content.oncyber.title}</span>
            </p>
            <p className="text-muted text-sm mb-4">
              {content.oncyber.summary}
            </p>
            <p>
              <span className="text-muted">$</span>{" "}
              <a href={content.oncyber.url} target="_blank" rel="noopener noreferrer" className="hover:bg-highlight px-1">
                enter museum
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-border my-8"></div>

        {/* Footer */}
        <footer className="text-muted text-xs">
          <p>$ exit</p>
          <p className="mt-2">Connection closed.</p>
          <p className="mt-4">
            <span className="text-fg-dim">───────────────────────────────────────</span>
          </p>
          <p className="mt-2">
            © 2025 Erik Huckle | Built with Next.js
          </p>
          <p className="mt-1">
            <span className="cursor">█</span>
          </p>
        </footer>

      </div>
    </main>
  );
}
