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
      <header className="mb-8">
        <pre className="text-fg text-sm md:text-base overflow-x-auto">
{`
 _____ ____  ___ _  __  _   _ _   _  ____ _  ___     _____
| ____|  _ \\|_ _| |/ / | | | | | | |/ ___| |/ / |   | ____|
|  _| | |_) || || ' /  | |_| | | | | |   | ' /| |   |  _|
| |___|  _ < | || . \\  |  _  | |_| | |___| . \\| |___| |___
|_____|_| \\_\\___|_|\\_\\ |_| |_|\\___/ \\____|_|\\_\\_____|_____|
                                                  PORTFOLIO
`}
        </pre>
        <div className="space-y-1 text-muted text-sm mt-4">
          <p>status: online</p>
          <p>mode: click-only</p>
        </div>
      </header>

      <HintLine />

      <Divider />

      {/* Quick Commands */}
      <section className="mb-8">
        <h2 className="text-fg mb-4">QUICK COMMANDS</h2>
        <div className="flex flex-col gap-1">
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
            note="Selected posts"
          />
          <LinkCommand
            label="open twitter"
            href={content.links.twitter}
            external
            note="Updates"
          />
          <LinkCommand
            label="open oncyber"
            href={content.links.oncyber}
            external
            note="3D museum"
          />
        </div>

        <div className="mt-4 flex flex-col gap-1">
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
            <div key={index} className="mb-4">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {item.title}
              </a>
              <p className="text-muted text-sm">{item.date}</p>
              <p className="text-fg text-sm mt-1">{item.excerpt}</p>
            </div>
          ))}
          <div className="mt-4">
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
          <div className="mt-4">
            <LinkCommand
              label="open linkedin"
              href={content.links.linkedin}
              external
              note="view profile"
            />
          </div>
        </OutputBlock>
      </Section>

      <Divider />

      {/* Twitter Section */}
      <Section id="tweets" title="Twitter/X">
        <OutputBlock>
          {content.tweets.map((tweet, index) => (
            <div key={index} className="mb-4">
              <a
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg hover:text-accent block"
              >
                &quot;{tweet.text}&quot;
              </a>
              <p className="text-muted text-sm">{tweet.date}</p>
            </div>
          ))}
          <div className="mt-4">
            <LinkCommand
              label="open twitter"
              href={content.links.twitter}
              external
              note="@erikhuckle"
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
      <footer className="text-muted text-sm py-8">
        <PromptLine command="session ended" />
      </footer>
    </TerminalLayout>
  );
}
