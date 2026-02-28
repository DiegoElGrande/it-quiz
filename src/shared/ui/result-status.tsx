import { CircleCheckBig, OctagonX } from 'lucide-react';

type ResultStatusIconProps = {
  correct: boolean | undefined;
};

export function ResultStatus({ correct }: ResultStatusIconProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className={`flex size-10 items-center justify-center rounded-full ${
          correct
            ? 'bg-green-500/20 text-green-400'
            : 'bg-red-500/20 text-red-400'
        }`}
      >
        {correct ? <CircleCheckBig /> : <OctagonX />}
      </div>
      <h3
        className={`text-lg font-semibold ${
          correct ? 'text-green-400' : 'text-red-400'
        }`}
      >
        {correct ? 'Правильно!' : 'Неправильно'}
      </h3>
    </div>
  );
}
