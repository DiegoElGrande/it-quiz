'use client';

import { useQuizCard } from '../model';
import { QuestionDisplay, AnswerOptions, Button } from '@/shared/ui';
import Link from 'next/link';

export function QuizCard() {
  const { card, handleFormChange, selectedIndex } = useQuizCard();
  return (
    <form className="flex flex-col gap-4 px-4" onChange={handleFormChange}>
      <QuestionDisplay
        question={card.question}
        codeSnippet={card.codeSnippet}
      />
      <AnswerOptions
        variantsAnswers={card.answers}
        selectIndex={selectedIndex}
      />
      <Link href="/result">
        <Button
          className="size-full p-3 text-center text-indigo-100 rounded-lg border-2 border-indigo-400/50 bg-indigo-950"
          type="button"
          hidden={typeof selectedIndex !== 'number'}
        >
          Проверить ответ
        </Button>
      </Link>
    </form>
  );
}
