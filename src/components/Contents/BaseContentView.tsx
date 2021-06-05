import { FC, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Backdrop, Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { Contents, NotSelected } from 'components/Contents';

interface BaseContentViewProp {
  questionList: Question[] | undefined;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  setQuestion1: Dispatch<SetStateAction<Question | undefined>>;
  setQuestion2: Dispatch<SetStateAction<Question | undefined>>;
  questionId?: number;
  questionId2?: number;
  question1?: Question;
  question2?: Question;
  isHover: boolean;
  isHoverDual: boolean;
  onCloseLeftContent?: () => void;
  onCloseRightContent?: () => void;
}

export const BaseContentView: FC<BaseContentViewProp> = ({
  questionList,
  setQuestionList,
  setQuestion1,
  setQuestion2,
  questionId,
  questionId2,
  question1,
  question2,
  isHover,
  isHoverDual,
  onCloseLeftContent,
  onCloseRightContent,
}) => {
  return (
    <QuestionsContainer>
      <QQBox>
        {questionId === undefined && <NotSelected />}
        {questionId !== undefined && (
          <QBox>
            {questionList !== undefined && question1 !== undefined && (
              <Contents
                allQuestionList={questionList}
                setQuestionList={setQuestionList}
                question={question1}
                setQuestion={setQuestion1}
                closeThisContent={onCloseLeftContent}
              />
            )}
          </QBox>
        )}
        {questionId2 !== undefined && (
          <QBox>
            {questionList !== undefined && question2 !== undefined && (
              <Contents
                allQuestionList={questionList}
                setQuestionList={setQuestionList}
                question={question2}
                setQuestion={setQuestion2}
                closeThisContent={onCloseRightContent}
              />
            )}
          </QBox>
        )}
      </QQBox>
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

const DoubleSidedPaper = styled(Backdrop)<{ fullsize: boolean }>`
  left: ${({ fullsize }) => (fullsize ? '37vw' : '68vw')} !important;
  z-index: 999 !important;
`;
