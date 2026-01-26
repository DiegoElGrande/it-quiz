
import type { QuestionDisplayProps } from '@/shared/types/card.types';
import { CodeArea } from '@/shared/ui';

export function QuestionDisplay({
  question,
  codeSnippet,
}: QuestionDisplayProps) {
  
  return (
    <>
      <p className="text-base leading-relaxed">{question}</p>
      {codeSnippet && <CodeArea code={codeSnippet}/>}
    </>
  );
  
}