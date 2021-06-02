import { FC, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Question } from 'utils/types';
import { Box } from '@material-ui/core';
import { MainQuestionList } from './MainQuestionList';
import { QuestionDetail } from './QuestionDetail';

interface QuestionsProps {
  setQuestionList: Dispatch<SetStateAction<Question[]>>;

  questionList: Question[];
  isListShown: boolean;
  isHover: boolean;
  isHoverDual: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const Questions: FC<QuestionsProps> = ({
  setQuestionList,

  questionList,
  isListShown,
  isHover,
  isHoverDual,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  return (
    <QuestionContainer>
      <MainQuestionList
        setQuestionList={setQuestionList}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={onHoverInDual}
        onHoverOutDual={onHoverOutDual}
      />

      <QuestionDetail
        questionList={questionList}
        setQuestionList={setQuestionList}
        isHover={isHover}
        isHoverDual={isHoverDual}
      />
    </QuestionContainer>
  );
};

const QuestionContainer = styled(Box)`
  display: flex;
  width: 100%;
`;
