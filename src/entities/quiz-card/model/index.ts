import type { Card } from '@/shared/types/card.types';
import { useAppSelector, useAppDispatch } from '@/shared/store/hooks';
import { setSelectedIndex } from '@/shared/store/entities/cardSlice';

export function useQuizCard() {
  const dispath = useAppDispatch();
  const { items, activeIndex, selectedIndex } = useAppSelector(
    (store) => store.cards,
  );

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    const value = Number(e.currentTarget.answer.value);
    dispath(setSelectedIndex(value));
  };

  const card = items[activeIndex];

  return { card, handleFormChange, selectedIndex };
}
