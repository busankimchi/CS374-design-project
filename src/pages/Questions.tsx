import { FC, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Question } from 'utils/types';
import { Box } from '@material-ui/core';
import { MainQuestionList } from './MainQuestionList';
import { QuestionDetail } from './QuestionDetail';

interface QuestionsProps {
  setTotalQuestionList: Dispatch<SetStateAction<Question[]>>;
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isListShown: boolean;
  question1: Question | undefined;
  question2: Question | undefined;
  setQuestion1: Dispatch<SetStateAction<Question | undefined>>;
  setQuestion2: Dispatch<SetStateAction<Question | undefined>>;
  isHover: boolean;
  isHoverDual: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const Questions: FC<QuestionsProps> = ({
  setTotalQuestionList,
  questionList,
  setQuestionList,
  isListShown,
  question1,
  question2,
  setQuestion1,
  setQuestion2,
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
        setTotalQuestionList={setTotalQuestionList}
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
        question1={question1}
        question2={question2}
        setQuestion1={setQuestion1}
        setQuestion2={setQuestion2}
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
