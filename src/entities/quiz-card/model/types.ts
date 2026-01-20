import type { Card } from '@/shared/types/card.types';

export interface QuizCardProps {
  card: Card;
  onAnswer: (isCorrect: boolean) => void;
  onContinue: () => void;
}

export interface QuestionDisplayProps {
  question: string;
  questionType: 'text' | 'code' | 'find_bug';
  codeSnippet?: string;
}

export interface AnswerOptionsProps {
  answers: Array<{ text: string; isCorrect: boolean }>;
  selectedAnswerIndex: number | null;
  showModal: boolean;
  onAnswerClick: (index: number, isCorrect: boolean) => void;
}

export interface ResultModalProps {
  isCorrect: boolean;
  explanation: string;
  onContinue: () => void;
}

export interface QuizFlowProps {
  /**
   * Позволяет передать собственный набор карточек (например, для тестов).
   * По умолчанию используется общий список из shared/constants.
   */
  initialCards?: Card[];
}

