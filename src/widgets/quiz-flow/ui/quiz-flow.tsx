'use client'
import type { QuizFlowProps } from '@/shared/types/card.types';
import { QuizCard } from '@/entities/quiz-card/';
import { ProgressBar } from '@/shared/ui';
import { QuizCompletion } from '@/shared/ui';
import { useQuizFlow } from '../model/use-quiz-flow';

export function QuizFlow({ initialCards }: QuizFlowProps) {
  const {
    cards,
    currentIndex,
    score,
    isFinished,
    currentCard,
    handleAnswer,
    handleContinue,
    handleRestart,
  } = useQuizFlow(initialCards);

  if (isFinished) {
    return <QuizCompletion score={score} onRestart={handleRestart} />;
  }

  return (
    <section className="flex size-full flex-col">
      <ProgressBar
        currentIndex={currentIndex}
        total={cards.length}
        correct={score.correct}
        totalAnswered={score.total}
      />

      <QuizCard
        key={currentCard.id}
        card={currentCard}
        onAnswer={handleAnswer}
        onContinue={handleContinue}
      />
      
    </section>
  );
}


