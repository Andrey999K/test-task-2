import { Page } from "@/types/Page.ts";

export const mockPages: Page[] = [
  {
    id: "page1",
    questions: [
      {
        id: "q1",
        title: "Какой ваш любимый цвет?",
        type: "single",
        options: [
          { id: "opt1", text: "Красный" },
          { id: "opt2", text: "Синий" },
          { id: "opt3", text: "Зелёный" },
        ],
      },
    ],
  },
  {
    id: "page2",
    questions: [
      {
        id: "q2",
        title: "Какие фрукты вы любите?",
        type: "multiple",
        options: [
          { id: "opt4", text: "Яблоко" },
          { id: "opt5", text: "Банан" },
          { id: "opt6", text: "Апельсин" },
        ],
      },
      {
        id: "q3",
        title: "Нравится ли вам React?",
        type: "single",
        options: [
          { id: "opt7", text: "Да" },
          { id: "opt8", text: "Нет" },
        ],
      },
    ],
  },
  {
    id: "page3",
    questions: [
      {
        id: "q4",
        title: "Выберите все языки программирования, которые вы знаете",
        type: "multiple",
        options: [
          { id: "opt9", text: "JavaScript" },
          { id: "opt10", text: "TypeScript" },
          { id: "opt11", text: "Python" },
          { id: "opt12", text: "Java" },
        ],
      },
    ],
  },
];
