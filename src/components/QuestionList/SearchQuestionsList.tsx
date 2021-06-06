import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { useQuestionList } from 'apis/Question/useQuestionList';
import { SpecialQuestionList } from 'components/QuestionList';

interface SearchQuestionListProps {
  setTotalQuestionList: Dispatch<SetStateAction<Question[]>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  search: string;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const SearchQuestionList: FC<SearchQuestionListProps> = ({
  setTotalQuestionList,
  setQuestionList,
  search,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { questionList } = useQuestionList(setIsLoading);

  const searchList = questionList.filter((item) => {
    const { question, answers } = item;

    const contentHas = question.content.includes(search as string);
    const titleHas = question.title.includes(search as string);
    const answerHas = answers
      .map((ans) => ans.content.includes(search as string))
      .reduce((prev, next) => prev || next, false);

    return contentHas || titleHas || answerHas;
  });

  const onClickItemDual = (item: Question) => {
    const { pathname, search } = location;
    const searchQuery = search.split('&');

    if (searchQuery[2] !== undefined) {
      history.push(`${pathname}${searchQuery.slice(0, 2).join('&')}&second=${item.questionId}`);
      return;
    }
    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  useEffect(() => {
    setQuestionList(searchList);
    setTotalQuestionList(questionList);
  }, [questionList]);

  return (
    <QuestionDetails>
      <SpecialQuestionList
        isLoading={isLoading}
        questionList={searchList}
        title="SEARCH RESULT"
        itemLink={(item) => `/search?q=${search}&first=${item.questionId}`}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={onHoverInDual}
        onHoverOutDual={onHoverOutDual}
        onClickItemDual={onClickItemDual}
      />
    </QuestionDetails>
  );
};

const QuestionDetails = styled(Box)`
  display: flex;
  height: 100%;
`;
