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
  onClickItemDual,
}) => {
  const [question1, setQuestion1] = useState<Question>();
  const [question2, setQuestion2] = useState<Question>();

  useEffect(() => {
    if (questionList !== undefined) {
      setQuestion1(questionList.find((question) => question.questionId === questionId));
    }
  }, [questionList, questionId]);

  useEffect(() => {
    if (questionList !== undefined) {
      setQuestion2(questionList.find((question) => question.questionId === questionId2));
    }
  }, [questionList, questionId2]);

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
        />
      </QuestionDetails>
      <QQBox>
        {questionId === undefined && <NotSelected />}
        {questionId !== undefined && (
          <QBox>
            {questionList !== undefined && question1 !== undefined && (
              <Contents question={question1} setQuestion={setQuestion1} closeThisContent={onCloseLeftContent} />
            )}
          </QBox>
        )}
        {questionId2 !== undefined && (
          <QBox>
            {questionList !== undefined && question2 !== undefined && (
              <Contents question={question2} setQuestion={setQuestion2} closeThisContent={onCloseRightContent} />
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
  /* position: relative; */
  left: ${({ fullsize }) => (fullsize ? '37vw' : '68vw')} !important;
  z-index: 999 !important;
`;
