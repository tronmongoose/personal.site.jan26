import Image from "next/image";
import { LinkCommand } from "./LinkCommand";

interface MediaCardProps {
  title: string;
  url: string;
  date?: string;
  summary: string;
  thumbnail: string;
  thumbnailAlt?: string;
}

export function MediaCard({
  title,
  url,
  date,
  summary,
  thumbnail,
  thumbnailAlt,
}: MediaCardProps) {
  return (
    <div className="border border-divider p-4 mb-4 bg-bg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-shrink-0 w-full md:w-48 h-32 relative bg-divider overflow-hidden">
          <Image
            src={thumbnail}
            alt={thumbnailAlt || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-fg font-normal mb-1 break-words">{title}</h3>
          {date && (
            <p className="text-muted text-sm mb-2">{date}</p>
          )}
          <p className="text-fg text-sm mb-3 break-words">{summary}</p>
          <LinkCommand label="open" href={url} external note="view" />
        </div>
      </div>
    </div>
  );
}
