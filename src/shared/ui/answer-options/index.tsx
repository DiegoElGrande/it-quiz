import type { AnswerOptionsProps } from '@/shared/types/card.types';

export function AnswerOptions({
  answers,
  selectedAnswerIndex,
  showModal,
  onAnswerSelect,
  onAnswerConfirm,
}: AnswerOptionsProps) {
  const handleConfirm = () => {
    if (selectedAnswerIndex !== null) {
      const selectedAnswer = answers[selectedAnswerIndex];
      onAnswerConfirm(selectedAnswerIndex, selectedAnswer.isCorrect);
    }
  };

  return (
    <div className="flex flex-col space-y-4" id="answerOption">
      <div className="flex flex-col space-y-3">
        {answers.map((answer, index) => {
          const isSelected = selectedAnswerIndex === index;
          const isCorrect = answer.isCorrect;
          const showResult = showModal && isSelected;

          let labelClass =
            'flex items-center gap-3 w-full rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors cursor-pointer';

          if (showResult) {
            if (isCorrect) {
              labelClass +=
                ' border-green-500 bg-green-500/20 text-green-100';
            } else {
              labelClass += ' border-red-500 bg-red-500/20 text-red-100';
            }
          } else if (showModal && isCorrect) {
            // Подсвечиваем правильный ответ при открытом модальном окне
            labelClass +=
              ' border-green-500/50 bg-green-500/10 text-green-100';
          } else if (isSelected) {
            labelClass += ' border-indigo-500 bg-indigo-500/20 text-indigo-100';
          } else {
            labelClass +=
              ' border-zinc-700 bg-zinc-800/50 text-zinc-100 hover:bg-zinc-800';
          }

          return (
            <label key={index} className={labelClass}>
              <input
                type="radio"
                name="answer"
                value={index}
                checked={isSelected}
                onChange={() => onAnswerSelect(index)}
                disabled={showModal}
                className="h-4 w-4 cursor-pointer accent-indigo-500 disabled:cursor-not-allowed"
              />
              <span className="flex-1">{answer.text}</span>
            </label>
          );
        })}
      </div>

      {!showModal && (
        <button
          type="button"
          onClick={handleConfirm}
          hidden={selectedAnswerIndex === null}
          className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Подтвердить ответ
        </button>
      )}
    </div>
  );
}

