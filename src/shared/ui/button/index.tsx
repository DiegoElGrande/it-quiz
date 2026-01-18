'use client';

import { useState, type ReactNode } from 'react';

interface GenerateButtonProps {
  type?: 'generated' | 'answer';
  className?: string;
  children?: ReactNode;
}

export function Button({
  type,
  className = '',
  children,
}: GenerateButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (type === 'generated') {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenModal}
        className={className}
      >
        {children}
      </button>

      {isModalOpen && type === 'generated' && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-zinc-900 p-4 text-zinc-100 shadow-xl">
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className="text-base font-semibold">Генерация набора</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
              >
                Закрыть
              </button>
            </div>
            <p className="mb-4 text-xs text-zinc-400">
              Здесь в будущем появится форма для генерации наборов
              вопросов.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="w-full rounded-full bg-indigo-600 px-3 py-2 text-sm font-medium hover:bg-indigo-500"
            >
              Ок
            </button>
          </div>
        </div>
      )}
    </>
  );
}
