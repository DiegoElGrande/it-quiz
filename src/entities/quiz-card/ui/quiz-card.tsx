'use client';

import type { QuizCardProps } from '@/shared/types/card.types';
import { useQuizCard } from '../model/use-quiz-card';
import { QuestionDisplay, ResultModal, AnswerOptions } from '@/shared/ui';

export function QuizCard({ card, onAnswer, onContinue }: QuizCardProps) {
  const {
    selectedAnswerIndex,
    showModal,
    isCorrectAnswer,
    handleAnswerSelect,
    handleAnswerConfirm,
    handleContinue,
  } = useQuizCard({ onAnswer, onContinue });

  return (
    <article className="flex flex-col space-y-6 p-6">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="rounded bg-zinc-800 px-2 py-1">
            {card.direction}
          </span>
          <span className="rounded bg-zinc-800 px-2 py-1">
            Сложность: {card.complexity}
          </span>
        </div>
      <QuestionDisplay
        question={card.question}
        questionType={card.questionType}
        codeSnippet={card.codeSnippet}
      />

      <AnswerOptions
        answers={card.answers}
        selectedAnswerIndex={selectedAnswerIndex}
        showModal={showModal}
        onAnswerSelect={handleAnswerSelect}
        onAnswerConfirm={handleAnswerConfirm}
      />

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

