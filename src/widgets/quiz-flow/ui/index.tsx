'use client';
import { QuizCard } from '@/entities';
import { ProgressBar } from '@/features';
import { useQuizFlow } from '../model';

export function QuizFlow() {
  return (
    <section className="flex size-full flex-col">
      <ProgressBar />
      <QuizCard />
    </section>
  );
}
