import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { SpecialQuestionList } from 'components/QuestionList/SpecialQuestionList';
import { useQuestionList } from 'apis/Question/useQuestionList';

interface AllQuestionListProps {
  setQuestionId: Dispatch<SetStateAction<number | undefined>>;
  setQuestionId2: Dispatch<SetStateAction<number | undefined>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const AllQuestionList: FC<AllQuestionListProps> = ({
  setQuestionId,
  setQuestionId2,
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
    const { pathname } = location;
    history.push(`${pathname}?second=${item.questionId}`);
  };

  useEffect(() => {
    setQuestionList(questionList);
  }, [questionList]);

  return (
    <QuestionDetails>
      <SpecialQuestionList
        setQuestionId={setQuestionId}
        setQuestionId2={setQuestionId2}
        isLoading={isLoading}
        questionList={questionList}
        title="ALL QUESTIONS"
        itemLink={(item) => `/all_questions/${item.questionId}`}
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
