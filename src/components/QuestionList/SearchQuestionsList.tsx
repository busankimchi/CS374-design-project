import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType, Question } from 'utils/types';
import { useQuestionList } from 'apis/Question/useQuestionList';
import { SpecialQuestionList } from 'components/QuestionList';

interface SearchQuestionListProps {
  setQuestionId: Dispatch<SetStateAction<number | undefined>>;
  setQuestionId2: Dispatch<SetStateAction<number | undefined>>;
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
  setQuestionId,
  setQuestionId2,
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
    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  useEffect(() => {
    setQuestionList(searchList);
  }, [questionList]);

  return (
    <QuestionDetails>
      <SpecialQuestionList
        setQuestionId={setQuestionId}
        setQuestionId2={setQuestionId2}
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
