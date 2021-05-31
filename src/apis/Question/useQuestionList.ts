import { fetchQuestionList } from 'apis/Question/fetchQuestionList';
import { useState, Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { Question } from 'utils/types';

interface QuestionListHookResponse {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  maxQuestionId: number;
  setMaxQuestionId: Dispatch<SetStateAction<number>>;
}

export const useQuestionList = (): QuestionListHookResponse => {
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [maxQuestionId, setMaxQuestionId] = useState(0);

  const fetchQuestionListCallback = useCallback(async () => {
    const response = await fetchQuestionList();

    setQuestionList(response.questionList);
    setMaxQuestionId(response.maxQuestionId);

    response.questionList.reverse();
  }, []);

  useEffect(() => {
    fetchQuestionListCallback();
  }, [fetchQuestionListCallback]);
  return { questionList, setQuestionList, maxQuestionId, setMaxQuestionId };
};
