import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-6">
      <h2 className="text-fg mb-4 overflow-hidden">
        <span className="whitespace-nowrap">
          ==[ {title.toUpperCase()} ]==============================================
        </span>
      </h2>
      <div className="pl-0 md:pl-4">{children}</div>
    </section>
  );
}
