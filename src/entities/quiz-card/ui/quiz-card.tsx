'use client';

import { useState } from 'react';
import type { QuizCardProps } from '../model/types';
import { QuestionDisplay } from './question-display';
import { AnswerOptions } from './answer-options';
import { ResultModal } from './result-modal';

export function QuizCard({ card, onAnswer, onContinue }: QuizCardProps) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<
    number | null
  >(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleAnswerClick = (index: number, isCorrect: boolean) => {
    if (selectedAnswerIndex !== null) return; // Предотвращаем повторный выбор

    setSelectedAnswerIndex(index);
    setIsCorrectAnswer(isCorrect);
    setShowModal(true);

    // Передаем результат в родительский компонент
    onAnswer(isCorrect);
  };

  const handleContinue = () => {
    setShowModal(false);
    onContinue();
  };

  return (
    <article className="flex flex-col space-y-6 p-6">
      {/* Вопрос */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="rounded bg-zinc-800 px-2 py-1">
            {card.direction}
          </span>
          <span className="rounded bg-zinc-800 px-2 py-1">
            Сложность: {card.complexity}
          </span>
        </div>
        <div className="text-zinc-100">
          <QuestionDisplay
            question={card.question}
            questionType={card.questionType}
            codeSnippet={card.codeSnippet}
          />
        </div>
      </div>

      {/* Варианты ответов */}
      <AnswerOptions
        answers={card.answers}
        selectedAnswerIndex={selectedAnswerIndex}
        showModal={showModal}
        onAnswerClick={handleAnswerClick}
      />

      {/* Модальное окно с результатом ответа */}
      {showModal && (
        <ResultModal
          isCorrect={isCorrectAnswer}
          explanation={card.explanation}
          onContinue={handleContinue}
        />
      )}
    </article>
  );
}

