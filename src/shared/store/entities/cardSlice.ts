import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import quizCard from '@/shared/constants/quiz-card.json';
import type { Card } from '@/shared/types/card.types';

interface CardsState {
  items: Card[];
  activeIndex: number;
  selectedIndex: number | null;
}

const initialState: CardsState = {
  items: quizCard,
  activeIndex: 0,
  selectedIndex: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // Установка массива карточек (например, после загрузки с API)
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.items = action.payload;
    },
    // Редюсер для смены активного индекса
    setSelectedIndex: (state, action: PayloadAction<number | null>) => {
      // Простая проверка границ массива
      state.selectedIndex = action.payload;
    },
    // Можно добавить хелпер "следующая карточка"
    nextCard: (state) => {
      if (state.activeIndex < state.items.length - 1) {
        state.activeIndex += 1;
      }
    },
    resetProgress: (state) => {
      state.activeIndex = 0;
    },
  },
});

export const { setCards, setSelectedIndex, nextCard, resetProgress } =
  cardsSlice.actions;
export default cardsSlice.reducer;
