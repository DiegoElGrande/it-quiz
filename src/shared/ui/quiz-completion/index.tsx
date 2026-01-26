interface QuizCompletionProps {
  score: { correct: number; total: number };
  onRestart: () => void;
}

export function QuizCompletion({ score, onRestart }: QuizCompletionProps) {
  const accuracy =
    score.total === 0 ? 0 : Math.round((score.correct / score.total) * 100);

  return (
    <div className="flex size-full flex-col items-center justify-center space-y-6 p-6">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-zinc-100">
          Квиз завершен!
        </h2>
        <p className="text-zinc-400">
          Правильных ответов: {score.correct} из {score.total}
        </p>
        <p className="mt-2 text-lg text-zinc-300">Точность: {accuracy}%</p>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500"
      >
        Начать заново
      </button>
    </div>
  );
}

