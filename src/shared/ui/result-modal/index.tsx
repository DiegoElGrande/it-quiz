import type { ResultModalProps } from '@/shared/types/card.types';

export function ResultModal({
  isCorrect,
  explanation,
  onContinue,
}: ResultModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-6 text-zinc-100 shadow-xl">
        {/* Заголовок с результатом */}
        <div className="mb-4 flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${
              isCorrect
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400'
            }`}
          >
            {isCorrect ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div>
            <h3
              className={`text-lg font-semibold ${
                isCorrect ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {isCorrect ? 'Правильно!' : 'Неправильно'}
            </h3>
            {!isCorrect && (
              <p className="text-xs text-zinc-400">
                Правильный ответ выделен зеленым
              </p>
            )}
          </div>
        </div>

        {/* Объяснение */}
        <div className="mb-6 rounded-lg border border-indigo-500/50 bg-indigo-500/10 p-4">
          <p className="text-sm leading-relaxed text-indigo-100">
            {explanation}
          </p>
        </div>

        {/* Кнопка "Продолжить" */}
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500"
        >
          Продолжить
        </button>
      </div>
    </div>
  );
}

