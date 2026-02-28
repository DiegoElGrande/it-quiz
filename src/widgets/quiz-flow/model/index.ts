import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Card } from '@/shared/types/card.types';
import quizData from '@/shared/constants/quiz-card.json';

interface UseQuizFlowReturn {
  cards: Card[];
  currentIndex: number;
  currentCard: Card;
  countQuestions: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export function useQuizFlow(): UseQuizFlowReturn {
  const [cards] = useState(quizData as Card[]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const countQuestions = cards.length;
  const currentCard = cards[currentIndex];

  return {
    cards,
    currentIndex,
    countQuestions,
    currentCard,
    setCurrentIndex,
  };
}
