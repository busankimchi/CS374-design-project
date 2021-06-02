import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Backdrop, Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { Contents, NotSelected } from 'components/Contents';
import { SpecialQuestionList } from 'components/QuestionList';

interface BaseQuestionProp {
  isLoading: boolean;
  questionList: Question[];
  itemLink: (item: Question) => string;
  title: string;
  questionId?: number;
  questionId2?: number;
  question1?: Question;
  question2?: Question;
  isListShown: boolean;
  isHover: boolean;
  isHoverDual: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
  onClickItemDual: (item: Question) => void;
  onCloseLeftContent?: () => void;
  onCloseRightContent?: () => void;
  currQ: Question | undefined;
  currQ2: Question | undefined;
  changeCurrQ: (question: Question | undefined) => void;
  changeCurrQ2: (question2: Question | undefined) => void;
}

export const BaseSpecialQuestion: FC<BaseQuestionProp> = ({
  isLoading,
  questionList,
  itemLink,
  title,
  questionId,
  questionId2,
  question1,
  question2,
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
  onClickItemDual,
  currQ,
  currQ2,
  changeCurrQ,
  changeCurrQ2,
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
          onClickItemDual={onClickItemDual}
          changeCurrQ={changeCurrQ}
          changeCurrQ2={changeCurrQ2}
        />
      </QuestionDetails>
      <QQBox>
        {questionId === undefined && <NotSelected />}
        {questionId !== undefined && (
          <QBox>
            {questionList !== undefined && (question1 !== undefined || currQ !== undefined) && (
              <Contents
                question={currQ !== undefined ? currQ : (question1 as Question)}
                closeThisContent={onCloseLeftContent}
              />
            )}
          </QBox>
        )}
        {questionId2 !== undefined && (
          <QBox>
            {questionList !== undefined && (question2 !== undefined || currQ2 !== undefined) && (
              <Contents
                question={currQ2 !== undefined ? currQ2 : (question2 as Question)}
                closeThisContent={onCloseRightContent}
              />
            )}
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

const DoubleSidedPaper = styled(Backdrop)<{ fullsize: boolean }>`
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw !important' : 'left: 68vw !important')};
  z-index: 999;
`;
