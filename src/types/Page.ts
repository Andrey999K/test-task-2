import { QuestionType } from "@/types/QuestionType.ts";

export type Page = {
  id: string;
  questions: QuestionType[]; // несколько вопросов на одной странице
};
