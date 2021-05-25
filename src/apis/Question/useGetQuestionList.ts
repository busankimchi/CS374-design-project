import { useState, Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { Question } from 'utils/types';
import { getQuestionList } from './getQuestionList';

interface QuestionListHookResponse {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
}

export const useGetQuestionList = (questionIds: number[]): QuestionListHookResponse => {
  const [questionList, setQuestionList] = useState<Question[]>([]);

  const fetchQuestionListCallback = useCallback(async () => {
    const response = await getQuestionList(questionIds);

    setQuestionList(response);
  }, []);

  useEffect(() => {
    fetchQuestionListCallback();
  }, [fetchQuestionListCallback]);
  return { questionList, setQuestionList };
};
