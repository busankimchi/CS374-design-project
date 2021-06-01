import { FC, Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { PageType, Question } from 'utils/types';
import { Box } from '@material-ui/core';
import { MainQuestionList } from './MainQuestionList';
import { QuestionDetail } from './QuestionDetail';

interface QuestionsProps {
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  setPageType: Dispatch<SetStateAction<PageType>>;
  pageType: PageType;
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
  setPageType,
  pageType,
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
  const [questionId, setQuestionId] = useState<number>();
  const [questionId2, setQuestionId2] = useState<number>();

  return (
    <QuestionContainer>
      <MainQuestionList
        setQuestionId={setQuestionId}
        setQuestionId2={setQuestionId2}
        setQuestionList={setQuestionList}
        setPageType={setPageType}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={onHoverInDual}
        onHoverOutDual={onHoverOutDual}
      />

      <QuestionDetail
        pageType={pageType}
        questionList={questionList}
        questionId={questionId}
        questionId2={questionId2}
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
