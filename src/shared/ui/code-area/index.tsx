import type { CodeAreaProps } from '@/shared/types/card.types';

export function CodeArea({ code }: CodeAreaProps) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs text-zinc-100">
      <code>{code}</code>
    </pre>
  );
}