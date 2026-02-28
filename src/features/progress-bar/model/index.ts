import { useAppSelector, useAppDispatch } from '@/shared/store/hooks';
import { resetProgress } from '@/shared/store/entities/cardSlice';

export function useProgressBar() {
  const { activeIndex, items } = useAppSelector((store) => store.cards);
  const dispath = useAppDispatch();
  const handleClick = () => {
    dispath(resetProgress());
  };
  return {
    activeIndex,
    items,
    handleClick,
  };
}
