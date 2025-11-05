import { Button, Progress } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getAnswers,
  getCurrentPageIndex,
  getCurrentQuestions,
  getPageCount,
  getQuestionsCount,
  getSelectedAnswerCount,
  getTestProgress,
  goToNextPage,
  selectAnswer,
} from "@/store/testSlice";
import { useEffect, useState } from "react";
import { ResultsScreen } from "@/components/UI/ResultsScreen.tsx";
import { Question } from "@/components/common/Question.tsx";

export const App = () => {
  const currentPageIndex = useSelector(getCurrentPageIndex);
  const pageCount = useSelector(getPageCount);
  const currentQuestions = useSelector(getCurrentQuestions);
  const questionsCount = useSelector(getQuestionsCount);
  const selectedAnswerCount = useSelector(getSelectedAnswerCount);
  const answers = useSelector(getAnswers);
  const progress = useSelector(getTestProgress);

  const [isTestFinished, setTestFinished] = useState(false);

  const dispatch = useDispatch();

  const handleSelect = (questionId: string, optionId: string | string[]) => {
    dispatch(selectAnswer({ questionId, optionId }));
  };

  const handleNext = () => {
    if (currentPageIndex === pageCount - 1) {
      setTestFinished(true);
    } else {
      dispatch(goToNextPage());
    }
  };

  const checkSelectedAnswers = () => {
    for (let i = 0; i < currentQuestions.length; i++) {
      const values = answers[currentQuestions[i].id];
      if (!values || !values.length) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (isTestFinished && selectedAnswerCount !== questionsCount) {
      setTestFinished(false);
    }
  }, [selectedAnswerCount, isTestFinished, questionsCount]);

  if (isTestFinished) {
    return <ResultsScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Тест</h1>
        <div className="mb-6">
          <Progress percent={progress} size="small" />
          <p className="text-center text-sm text-gray-500 mt-1">
            {selectedAnswerCount} / {questionsCount}
          </p>
        </div>
        {currentQuestions.map((question) => (
          <Question
            key={question.id}
            question={question}
            onSelect={handleSelect}
          />
        ))}
        <div className="flex justify-between mt-4">
          <span className="text-sm text-gray-500">
            Страница {currentPageIndex + 1} из {pageCount}
          </span>
          <Button
            type="primary"
            disabled={!checkSelectedAnswers()}
            onClick={handleNext}
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};
