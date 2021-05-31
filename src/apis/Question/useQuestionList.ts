import { fetchQuestionList } from 'apis/Question/fetchQuestionList';
import { useState, Dispatch, SetStateAction, useEffect, useCallback } from 'react';
import { Question } from 'utils/types';

interface QuestionListHookResponse {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  maxQuestionId: number;
  setMaxQuestionId: Dispatch<SetStateAction<number>>;
}

export const useQuestionList = (setIsLoading: Dispatch<SetStateAction<boolean>>): QuestionListHookResponse => {
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [maxQuestionId, setMaxQuestionId] = useState(0);
  // setIsLoading(true);

  // const fetchQuestionListCallback = useCallback(async () => {
  //   const response = await fetchQuestionList();

  //   setQuestionList(response.questionList);
  //   setMaxQuestionId(response.maxQuestionId);
  // }, []);

  useEffect(() => {
    // fetchQuestionListCallback();
    fetchQuestionList().then((response) => {
      setQuestionList(response.questionList);
      setMaxQuestionId(response.maxQuestionId);
      setIsLoading(false);
    })
  }, []);
  return { questionList, setQuestionList, maxQuestionId, setMaxQuestionId };
};
