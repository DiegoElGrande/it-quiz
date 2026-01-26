import { useState } from 'react';
import type { Card } from '@/shared/types/card.types';
import quizData from '@/shared/constants/quiz-card-items.json';

interface Score {
  correct: number;
  total: number;
}

interface UseQuizFlowReturn {
  cards: Card[];
  currentIndex: number;
  score: Score;
  isFinished: boolean;
  currentCard: Card;
  handleAnswer: (isCorrect: boolean) => void;
  handleContinue: () => void;
  handleRestart: () => void;
}

export function useQuizFlow(initialCards?: Card[]): UseQuizFlowReturn {
  const [cards] = useState<Card[]>(() =>
    initialCards ? initialCards : (quizData as Card[]),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState<Score>({ correct: 0, total: 0 });
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

  return {
    cards,
    currentIndex,
    score,
    isFinished,
    currentCard,
    handleAnswer,
    handleContinue,
    handleRestart,
  };
}

