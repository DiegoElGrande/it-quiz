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
  countQuestions: number;
}

export function useQuizFlow(): UseQuizFlowReturn {
  const [cards] = useState(quizData as Card[]);
  const [currentIndex, setCurrentIndex] = useState<number>(+localStorage.cardIndex || 0);
  const [isFinished, setIsFinished] = useState(false);

  const countQuestions = cards.length
  const currentCard = cards[currentIndex];



  const handleContinue = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      localStorage.cardIndex = currentIndex;
    } else {
      setIsFinished(true);
      localStorage.removeItem('cardIndex')
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFinished(false);
  };

  return {
    cards,
    currentIndex,
    countQuestions,
    isFinished,
    currentCard,
    handleContinue,
    handleRestart,
  };
}

