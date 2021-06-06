import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Question } from 'utils/types';
import { fetchQuestionList } from 'apis/Question/fetchQuestionList';

interface QuestionListHookResponse {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  maxQuestionId: number;
  setMaxQuestionId: Dispatch<SetStateAction<number>>;
}

export const useQuestionList = (setIsLoading: Dispatch<SetStateAction<boolean>>): QuestionListHookResponse => {
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [maxQuestionId, setMaxQuestionId] = useState(0);

  useEffect(() => {
    fetchQuestionList()
      .then((response) => {
        // response.questionList.reverse();
        setQuestionList(response.questionList);
        setMaxQuestionId(response.maxQuestionId);
        setIsLoading(false);
      })
      .catch();
  }, []);

  return { questionList, setQuestionList, maxQuestionId, setMaxQuestionId };
};
