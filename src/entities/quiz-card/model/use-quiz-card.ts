import { useState } from 'react';

interface UseQuizCardProps {
  onAnswer: (isCorrect: boolean) => void;
  onContinue: () => void;
}

interface UseQuizCardReturn {
  selectedAnswerIndex: number | null;
  showModal: boolean;
  isCorrectAnswer: boolean;
  handleAnswerSelect: (index: number) => void;
  handleAnswerConfirm: (index: number, isCorrect: boolean) => void;
  handleContinue: () => void;
}

export function useQuizCard({
  onAnswer,
  onContinue,
}: UseQuizCardProps): UseQuizCardReturn {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<
    number | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showModal) return;
    setSelectedAnswerIndex(index);
  };

  const handleAnswerConfirm = (index: number, isCorrect: boolean) => {
    setIsCorrectAnswer(isCorrect);
    setShowModal(true);
    onAnswer(isCorrect);
  };

  const handleContinue = () => {
    setShowModal(false);
    setSelectedAnswerIndex(null);
    onContinue();
  };

  return {
    selectedAnswerIndex,
    showModal,
    isCorrectAnswer,
    handleAnswerSelect,
    handleAnswerConfirm,
    handleContinue,
  };
}

