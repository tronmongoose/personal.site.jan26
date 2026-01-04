import {
  TerminalLayout,
  HintLine,
  PromptLine,
  Divider,
  Section,
  LinkCommand,
  OutputBlock,
  MediaCard,
} from "@/components/terminal";
import { content } from "@/content/content";
import { fetchMediumRSS } from "@/lib/rss";

export default async function Home() {
  const writingItems = await fetchMediumRSS();

  return (
    <TerminalLayout>
      {/* Boot Header */}
      <header className="mb-6">
        <div className="border border-divider p-4 mb-4">
          <h1 className="text-accent text-xl md:text-2xl font-normal tracking-wide">
            ERIK HUCKLE
          </h1>
          <p className="text-muted text-sm mt-1">
            ~/portfolio
          </p>
        </div>
        <div className="flex gap-4 text-muted text-sm">
          <span>status: <span className="text-green-500">online</span></span>
          <span>mode: click-only</span>
        </div>
      </header>

      <HintLine />

      <Divider />

      {/* Quick Commands */}
      <section className="mb-6">
        <h2 className="text-fg text-sm mb-3">$ COMMANDS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
          <LinkCommand
            label="open medium"
            href={content.links.medium}
            external
            note="Writing"
          />
          <LinkCommand
            label="open linkedin"
            href={content.links.linkedin}
            external
            note="Profile"
          />
          <LinkCommand
            label="open twitter"
            href={content.links.twitter}
            external
            note="@Beyourhuckberry"
          />
          <LinkCommand
            label="open oncyber"
            href={content.links.oncyber}
            external
            note="3D museum"
          />
          <LinkCommand
            label="open seize"
            href={content.links.seize}
            external
            note="6529 profile"
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
          <LinkCommand label="show writing" href="#writing" />
          <LinkCommand label="show linkedin" href="#linkedin" />
          <LinkCommand label="show tweets" href="#tweets" />
          <LinkCommand label="show museum" href="#museum" />
        </div>
      </section>

      <Divider />

      {/* Writing Section */}
      <Section id="writing" title="Writing">
        <OutputBlock>
          {writingItems.map((item, index) => (
            <div key={index} className="mb-3 pb-3 border-b border-divider last:border-0 last:mb-0 last:pb-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {item.title}
              </a>
              <span className="text-muted text-sm ml-2">{item.date}</span>
              {item.excerpt && (
                <p className="text-fg text-sm mt-1 opacity-80">{item.excerpt}</p>
              )}
            </div>
          ))}
          <div className="mt-3">
            <LinkCommand
              label="open medium"
              href={content.links.medium}
              external
              note="view all"
            />
          </div>
        </OutputBlock>
      </Section>

      <Divider />

      {/* LinkedIn Section */}
      <Section id="linkedin" title="LinkedIn">
        <OutputBlock>
          <p className="text-muted text-sm mb-3">Selected posts from my profile</p>
          {content.linkedinPosts.map((post, index) => (
            <MediaCard
              key={index}
              title={post.title}
              url={post.url}
              date={post.date}
              summary={post.summary}
              thumbnail={post.thumbnail}
            />
          ))}
          <LinkCommand
            label="open linkedin"
            href={content.links.linkedin}
            external
            note="view profile"
          />
        </OutputBlock>
      </Section>

      <Divider />

      {/* Twitter Section */}
      <Section id="tweets" title="Twitter/X">
        <OutputBlock>
          <p className="text-muted text-sm mb-3">@Beyourhuckberry</p>
          {content.tweets.map((tweet, index) => (
            <div key={index} className="mb-2 pb-2 border-b border-divider last:border-0 last:mb-0 last:pb-0">
              <a
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg hover:text-accent"
              >
                &ldquo;{tweet.text}&rdquo;
              </a>
              <span className="text-muted text-sm ml-2">{tweet.date}</span>
            </div>
          ))}
          <div className="mt-3">
            <LinkCommand
              label="open twitter"
              href={content.links.twitter}
              external
              note="follow"
            />
          </div>
        </OutputBlock>
      </Section>

      <Divider />

      {/* OnCyber Section */}
      <Section id="museum" title="Museum">
        <OutputBlock>
          <MediaCard
            title={content.oncyber.title}
            url={content.oncyber.url}
            summary={content.oncyber.summary}
            thumbnail={content.oncyber.thumbnail}
          />
        </OutputBlock>
      </Section>

      <Divider />

      {/* Footer */}
      <footer className="text-muted text-sm py-4">
        <PromptLine command="session ended" />
      </footer>
    </TerminalLayout>
  );
}
