import type { Dispatch, SetStateAction } from 'react';

type Answer = {
  text: string;
  isCorrect: boolean;
};

export interface Card {
  id: number;
  question: string; // Вопрос
  codeSnippet?: string; // без разметки markdown
  answers: Answer[]; // Массив из 6 объектов { id, text, isCorrect }
  explanation: string; // Пояснение после ответа - ОЧЕНЬ ВАЖНО!
}

export interface QuizCardProps {
  card: Card;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export interface QuestionDisplayProps {
  question: string;
  codeSnippet?: string;
}

export interface AnswerOptionsProps {
  variantsAnswers: Array<{ text: string; isCorrect: boolean }>;
  selectIndex: number | null;
}

export interface ResultModalProps {
  isCorrect?: boolean;
  explanation?: string | null;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  setSelectedAnswerIndex: Dispatch<SetStateAction<number | null>>;
}

export interface QuizFlowProps {
  initialCards?: Card[];
}

export interface CodeAreaProps {
  code: string;
}
