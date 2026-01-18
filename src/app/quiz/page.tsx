'use client';

import { useState } from 'react';
import { QuizCard } from '@/entities/quiz-card/ui';
import type { Card } from '@/shared/types/card.types';
import quizData from '@/shared/constants/quiz-card-items.json';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards] = useState<Card[]>(quizData as Card[]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const currentCard = cards[currentIndex];

  const handleAnswer = (isCorrect: boolean) => {
    setScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
    }));
  };

  const handleContinue = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="flex size-full flex-col items-center justify-center space-y-6 p-6">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-zinc-100">
            Квиз завершен!
          </h2>
          <p className="text-zinc-400">
            Правильных ответов: {score.correct} из {score.total}
          </p>
          <p className="mt-2 text-lg text-zinc-300">
            Точность: {Math.round((score.correct / score.total) * 100)}%
          </p>
        </div>
        <button
          type="button"
          onClick={handleRestart}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500"
        >
          Начать заново
        </button>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="flex size-full items-center justify-center">
        <p className="text-zinc-400">Загрузка...</p>
      </div>
    );
  }

  return (
    <div className="flex size-full flex-col">
      {/* Прогресс бар */}
      <div className="border-b border-zinc-800 p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
          <span>
            Вопрос {currentIndex + 1} из {cards.length}
          </span>
          <span>
            Правильно: {score.correct} / {score.total}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            className="h-full bg-indigo-600 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Карточка вопроса */}
      <div className="flex-1 overflow-y-auto">
        <QuizCard
          key={currentCard.id}
          card={currentCard}
          onAnswer={handleAnswer}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
}
