import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { SpecialQuestionList } from 'components/QuestionList';
import { useQuestionList } from 'apis/Question/useQuestionList';

interface AllQuestionListProps {
  setTotalQuestionList: Dispatch<SetStateAction<Question[]>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const AllQuestionList: FC<AllQuestionListProps> = ({
  setTotalQuestionList,
  setQuestionList,
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

  const onClickItemDual = (item: Question) => {
    const { pathname, search } = location;

    const searchQuery = search.split('&');

    if (searchQuery[1] !== undefined) {
      history.push(`${pathname}${searchQuery[0]}&second=${item.questionId}`);
      return;
    }
    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  useEffect(() => {
    setQuestionList(questionList);
    setTotalQuestionList(questionList);
  }, [questionList]);

  return (
    <QuestionDetails>
      <SpecialQuestionList
        isLoading={isLoading}
        questionList={questionList}
        title="ALL QUESTIONS"
        itemLink={(item) => `/all_questions?first=${item.questionId}`}
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
