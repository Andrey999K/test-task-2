import { Page } from "@/types/Page.ts";
import { mockPages } from "@/mock/questions.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store.ts";
import { getSelectedCount } from "@/utils/getSelectedCount.ts";

export interface TestState {
  pages: Page[]; // вместо questions: QuestionType[]
  currentPageIndex: number; // индекс текущей страницы
  answers: Record<string, string[]>; // всё ещё по questionId
}

const initialState: TestState = {
  pages: mockPages,
  currentPageIndex: 0,
  answers: {},
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    selectAnswer: (
      state,
      action: PayloadAction<{ questionId: string; optionId: string | string[] }>
    ) => {
      const { questionId, optionId } = action.payload;

      const allQuestions = state.pages.flatMap((page) => page.questions);
      const question = allQuestions.find((q) => q.id === questionId);

      if (!question) return;

      if (!state.answers[questionId]) {
        state.answers[questionId] = [];
      }

      if (question.type === "single" && optionId) {
        state.answers[questionId] = [optionId as string];
      } else {
        state.answers[questionId] = optionId as string[];
      }
    },

    goToNextPage: (state) => {
      if (state.currentPageIndex < state.pages.length - 1) {
        state.currentPageIndex += 1;
      }
    },

    goToPreviousPage: (state) => {
      if (state.currentPageIndex > 0) {
        state.currentPageIndex -= 1;
      }
    },

    resetTest: (state) => {
      state.currentPageIndex = 0;
      state.answers = {};
    },
  },
});

export const { selectAnswer, goToNextPage, goToPreviousPage, resetTest } =
  testSlice.actions;

export const getCurrentPageIndex = (state: RootState) =>
  state.test.currentPageIndex;

export const getPageCount = (state: RootState) => state.test.pages.length;

export const getSelectedAnswerCount = (state: RootState) =>
  getSelectedCount(state.test.answers);

export const getQuestionsCount = (state: RootState) =>
  state.test.pages.flatMap((page) => page.questions).length;

export const getQuestions = (state: RootState) =>
  state.test.pages.flatMap((page) => page.questions);

export const getCurrentQuestions = (state: RootState) => {
  const currentState = state.test;
  const { pages, currentPageIndex } = currentState;
  return pages[currentPageIndex].questions;
};

export const getAnswers = (state: RootState) => state.test.answers;

export const getTestProgress = (state: RootState) => {
  const { answers, pages } = state.test;
  const allQuestions = pages.flatMap((page) => page.questions);
  return (getSelectedCount(answers) / allQuestions.length) * 100;
};

export default testSlice.reducer;
