import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { nextCard, setSelectedIndex } from '@/shared/store/entities/cardSlice';

export function useResultModal() {
  const dispath = useAppDispatch();
  const router = useRouter();

  const { items, activeIndex, selectedIndex } = useAppSelector(
    (state) => state.cards,
  );
  const card = items[activeIndex];
  const explanation = card.explanation;

  const correctIndex = card.answers.findIndex((item) => item.isCorrect);
  const isCorrect = correctIndex === selectedIndex;

  const handleClick = () => {
    router.back();
    dispath(nextCard());
    dispath(setSelectedIndex(null));
  };

  return {
    handleClick,
    explanation,
    isCorrect,
  };
}
