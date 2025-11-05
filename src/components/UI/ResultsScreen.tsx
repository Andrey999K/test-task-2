import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers, getQuestions, resetTest } from "@/store/testSlice.ts";
import { QuestionType } from "@/types/QuestionType.ts";

export const ResultsScreen = () => {
  const dispatch = useDispatch();
  const questions = useSelector(getQuestions);
  const answers = useSelector(getAnswers);

  const handleRestart = () => {
    dispatch(resetTest());
  };

  const showAnswer = (question: QuestionType) => {
    return answers[question.id]
      ?.map((answer) => {
        return question.options.find((option) => option.id === answer)?.text;
      })
      .join(", ");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-6 text-center">Результаты теста</h1>

        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id}>
              <h3 className="font-semibold">{question.title}</h3>
              <div className="flex gap-1">
                <span>Ответ:</span>{" "}
                <div className="flex gap-1">{showAnswer(question)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button type="primary" onClick={handleRestart}>
            Пройти тест снова
          </Button>
        </div>
      </div>
    </div>
  );
};
