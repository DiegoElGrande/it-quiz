import type { QuestionDisplayProps } from '@/shared/types/card.types';
import { CodeArea } from '@/shared/ui';

export function QuestionDisplay({
  question,
  codeSnippet,
}: QuestionDisplayProps) {
  return (
    <>
      <h2 className="text-base leading-relaxed">{question}</h2>
      {codeSnippet && <CodeArea code={codeSnippet} />}
    </>
  );
}
