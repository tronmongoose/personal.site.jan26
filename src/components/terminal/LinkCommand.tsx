import { Button } from "@/components/ui/button";

interface LinkCommandProps {
  label: string;
  href: string;
  external?: boolean;
  note?: string;
}

export function LinkCommand({ label, href, external = false, note }: LinkCommandProps) {
  return (
    <Button variant="ghost" asChild className="h-11 min-h-[44px] text-base">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <span className="text-accent">{label}</span>
        <span className="text-fg mx-2">-&gt;</span>
        {note && <span className="text-muted">({note})</span>}
      </a>
    </Button>
  );
}
