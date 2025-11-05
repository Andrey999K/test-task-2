import { AnswerType } from "@/types/AnswerType.ts";
import { AnswerOption } from "@/types/AnswerOption.ts";

export type QuestionType = {
  id: string;
  title: string;
  type: AnswerType;
  options: AnswerOption[];
};
