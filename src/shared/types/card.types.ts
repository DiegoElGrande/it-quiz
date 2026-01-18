type Answer = {
  text: string;
  isCorrect: boolean;
};
export interface Card {
  id: string; // UUID
  // Контент
  question: string;
  questionType: 'text' | 'code' | 'find_bug'; // Тип для рендеринга
  codeSnippet?: string; // Markdown/код, если нужен
  imageUrl?: string;
  // Варианты ответа
  answers: Answer[]; // Массив объектов { id, text, isCorrect }
  explanation: string; // Пояснение после ответа - ОЧЕНЬ ВАЖНО!

  // Метаданные для организации
  tags: string[]; // ["react", "hooks", "useState"]
  direction: 'frontend' | 'backend' | 'devops' | 'algorithms'; // или enum
  companies: string[]; // ["t-bank", "wb", "yandex"]
  complexity: 1 | 2 | 3; // Сложность (для алгоритма SRS)

  // Системные поля
  authorId?: string; // Если есть пользовательский контент
  isPublic: boolean; // Флаг публичной карточки из банка
  source?: string; // Источник (ссылка на MDN и т.д.)

  // Статистика и SRS (будут обновляться для КАЖДОГО пользователя отдельно!)
  userStatistics?: {
    userId: string;
    interval: number; // дней до следующего показа
    easeFactor: number; // множитель сложности (как в SM-2)
    dueDate: Date; // когда показывать следующй раз
    repetitionCount: number; // сколько раз уже повторяли
  }[];
}
