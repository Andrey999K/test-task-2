import { Radio, Space } from "antd";
import { QuestionType } from "@/types/QuestionType.ts";

type SingleChoiceProps = {
  question: QuestionType;
  selected: string[];
  onSelect: (questionId: string, optionId: string) => void;
};

export const SingleChoiceQuestion = ({
  question,
  selected,
  onSelect,
}: SingleChoiceProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">{question.title}</h3>
      <Radio.Group
        value={selected?.length && selected[0]}
        onChange={(e) => onSelect(question.id, e.target.value)}
        className="space-y-2"
      >
        <Space direction="vertical">
          {question.options.map((option) => (
            <Radio key={option.id} value={option.id}>
              {option.text}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
};
