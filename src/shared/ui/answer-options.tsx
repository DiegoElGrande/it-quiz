import type { AnswerOptionsProps } from '@/shared/types/card.types';

export function AnswerOptions({
  variantsAnswers,
  selectIndex,
}: AnswerOptionsProps) {
  return (
    <>
      {variantsAnswers.map((answer, index) => {
        const isSelected = selectIndex === index;

        let labelClass = `flex items-center gap-3 w-full rounded-lg border-2 px-3 py-2 text-left text-sm transition-colors cursor-pointer ${isSelected && `border-indigo-500`} `;

        return (
          <label key={index} className={labelClass}>
            <input
              type="radio"
              name="answer"
              value={index}
              checked={isSelected}
              className="h-4 w-4 cursor-pointer accent-indigo-500 disabled:cursor-not-allowed"
            />
            <span className="flex-1">{answer.text}</span>
          </label>
        );
      })}
    </>
  );
}
