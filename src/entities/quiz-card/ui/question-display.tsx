import type { QuestionDisplayProps } from '../model/types';
import { cleanCodeSnippet } from '../model/lib/utils';

export function QuestionDisplay({
  question,
  questionType,
  codeSnippet,
}: QuestionDisplayProps) {
  const renderCodeSnippet = (code: string) => {
    const cleanedCode = cleanCodeSnippet(code);

    return (
      <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
        <code>{cleanedCode}</code>
      </pre>
    );
  };

  switch (questionType) {
    case 'code':
      return (
        <div className="space-y-4">
          <p className="text-base leading-relaxed">{question}</p>
          {codeSnippet && renderCodeSnippet(codeSnippet)}
        </div>
      );
    case 'find_bug':
      return (
        <div className="space-y-4">
          <p className="text-base leading-relaxed">{question}</p>
          {codeSnippet && renderCodeSnippet(codeSnippet)}
        </div>
      );
    default:
      return <p className="text-base leading-relaxed">{question}</p>;
  }
}

