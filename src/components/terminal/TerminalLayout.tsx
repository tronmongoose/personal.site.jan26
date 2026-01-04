import { ReactNode } from "react";

interface TerminalLayoutProps {
  children: ReactNode;
}

export function TerminalLayout({ children }: TerminalLayoutProps) {
  return (
    <main className="min-h-screen bg-bg text-fg font-mono">
      <div className="max-w-terminal mx-auto px-[18px] py-[18px] md:px-[28px] md:py-[28px]">
        {children}
      </div>
    </main>
  );
}
