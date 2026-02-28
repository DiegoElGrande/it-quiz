import { Button, ResultStatus } from '@/shared/ui';
import { useResultModal } from '../model';

export function ResultModal() {
  const { handleClick, explanation, isCorrect } = useResultModal();
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-zinc-900 p-4 text-zinc-100 shadow-xl">
        <ResultStatus correct={isCorrect} />

        <div className="mb-6 rounded-lg border border-indigo-500/50 bg-indigo-500/10 p-4">
          <p className="text-sm leading-relaxed text-indigo-100">
            {explanation}
          </p>
        </div>
        <Button
          onClick={handleClick}
          className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500"
        >
          Продолжить
        </Button>
      </div>
    </section>
  );
}
