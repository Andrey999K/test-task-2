import { SingleChoiceQuestion } from "@/components/common/SingleChoiceQuestion.tsx";
import { MultipleChoiceQuestion } from "@/components/common/MultipleChoiceQuestion.tsx";
import { useSelector } from "react-redux";
import { getAnswers } from "@/store/testSlice.ts";
import { QuestionType } from "@/types/QuestionType.ts";

type QuestionProps = {
  question: QuestionType;
  onSelect: (questionId: string, optionId: string | string[]) => void;
};

export const Question = ({ question, onSelect }: QuestionProps) => {
  const answers = useSelector(getAnswers);

  if (question.type === "single") {
    return (
      <SingleChoiceQuestion
        key={question.id}
        question={question}
        selected={answers[question.id] || []}
        onSelect={onSelect}
      />
    );
  } else {
    return (
      <MultipleChoiceQuestion
        key={question.id}
        question={question}
        selected={answers[question.id] || []}
        onSelect={onSelect}
      />
    );
  }
};
