interface ProgressBarProps {
  currentIndex: number;
  total: number;
  correct: number;
  totalAnswered: number;
}

export function ProgressBar({
  currentIndex,
  total,
  correct,
  totalAnswered,
}: ProgressBarProps) {
  return (
    <div className="border-b border-zinc-800 p-4">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Вопрос {currentIndex + 1} из {total}
        </span>
        <span>
          Правильно: {correct} / {totalAnswered}
        </span>
      </div>
    </div>
  );
}

