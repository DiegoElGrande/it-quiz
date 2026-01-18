import type { AnswerOptionsProps } from '../model/types';

export function AnswerOptions({
  answers,
  selectedAnswerIndex,
  showModal,
  onAnswerClick,
}: AnswerOptionsProps) {
  return (
    <div className="flex flex-col space-y-3">
      {answers.map((answer, index) => {
        const isSelected = selectedAnswerIndex === index;
        const isCorrect = answer.isCorrect;
        const showResult = showModal && isSelected;

        let buttonClass =
          'w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors hover:bg-zinc-800';

        if (showResult) {
          if (isCorrect) {
            buttonClass +=
              ' border-green-500 bg-green-500/20 text-green-100';
          } else {
            buttonClass += ' border-red-500 bg-red-500/20 text-red-100';
          }
        } else if (showModal && isCorrect) {
          // Подсвечиваем правильный ответ при открытом модальном окне
          buttonClass +=
            ' border-green-500/50 bg-green-500/10 text-green-100';
        } else {
          buttonClass += ' border-zinc-700 bg-zinc-800/50 text-zinc-100';
        }

        return (
          <button
            key={index}
            type="button"
            onClick={() => onAnswerClick(index, answer.isCorrect)}
            disabled={selectedAnswerIndex !== null}
            className={buttonClass}
          >
            {answer.text}
          </button>
        );
      })}
    </div>
  );
}

