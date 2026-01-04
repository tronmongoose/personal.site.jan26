interface PromptLineProps {
  command?: string;
}

export function PromptLine({ command }: PromptLineProps) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-accent">erik@portfolio:~$</span>
      {command && <span className="text-accent ml-1">{command}</span>}
    </div>
  );
}
