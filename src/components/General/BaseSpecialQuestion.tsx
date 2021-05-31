import { FC } from 'react';
import styled from 'styled-components';
import { Backdrop, Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { Contents, NotSelected } from 'components/Contents';
import { SpecialQuestionList } from 'components/QuestionList';
import { dummyQuestions } from 'utils/dummyDatas';

interface BaseQuestionProp {
  isLoading: boolean;
  questionList: Question[];
  itemLink: (item: Question) => string;
  title: string;
  questionId?: number;
  questionId2?: number;
  isListShown: boolean;
  isHover: boolean;
  isHoverDual: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
  onCloseLeftContent?: () => void;
  onCloseRightContent?: () => void;
}

export const BaseSpecialQuestion: FC<BaseQuestionProp> = ({
  isLoading,
  questionList,
  itemLink,
  title,
  questionId,
  questionId2,
  isListShown,
  isHover,
  isHoverDual,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
  onCloseLeftContent,
  onCloseRightContent,
}) => {
  return (
    <QuestionsContainer>
      <QuestionDetails>
        <SpecialQuestionList
          isLoading={isLoading}
          questionList={questionList}
          questionId={questionId}
          questionId2={questionId2}
          title={title}
          itemLink={itemLink}
          isListShown={isListShown}
          onToggle={onToggle}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onHoverInDual={onHoverInDual}
          onHoverOutDual={onHoverOutDual}
        />

      </QuestionDetails>
      <QQBox>
        {questionId === undefined && <NotSelected />}
        {questionId !== undefined && (
          <QBox>
            <Contents question={dummyQuestions[questionId - 1]} closeThisContent={onCloseLeftContent} />
          </QBox>
        )}
        {questionId2 !== undefined && (
          <QBox>
            <Contents question={dummyQuestions[questionId2 - 1]} closeThisContent={onCloseRightContent} />
          </QBox>
        )}
      </QQBox>
      {/* </QuestionDetails> */}

      {isHover && <DoubleSidedPaper open={isHover} fullsize={!isHoverDual} />}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 96vh;
`;

const QBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const QQBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const QuestionDetails = styled(Box)`
  display: flex;
  height: 100%;
`;

const DoubleSidedPaper = styled(Backdrop) <{ fullsize: boolean }>`
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw' : 'left: 68vw')};
  z-index: 999;
`;
