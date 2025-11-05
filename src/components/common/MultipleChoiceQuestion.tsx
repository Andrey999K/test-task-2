import { Checkbox, Space } from "antd";
import { QuestionType } from "@/types/QuestionType.ts";

type MultipleChoiceProps = {
  question: QuestionType;
  selected: string[];
  onSelect: (questionId: string, optionId: string[]) => void;
};

export const MultipleChoiceQuestion = ({
  question,
  selected,
  onSelect,
}: MultipleChoiceProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">{question.title}</h3>
      <Checkbox.Group
        value={selected}
        onChange={(values) => onSelect(question.id, values)}
        className="space-y-2"
      >
        <Space direction="vertical">
          {question.options.map((option) => (
            <Checkbox key={option.id} value={option.id}>
              {option.text}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </div>
  );
};
