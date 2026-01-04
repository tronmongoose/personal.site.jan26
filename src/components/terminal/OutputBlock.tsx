import { ReactNode } from "react";

interface OutputBlockProps {
  children: ReactNode;
}

export function OutputBlock({ children }: OutputBlockProps) {
  return <div className="pl-4 space-y-3">{children}</div>;
}
