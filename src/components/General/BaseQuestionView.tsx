import { FC } from 'react';
import styled from 'styled-components';
import { Backdrop, Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { Contents, NotSelected } from 'components/Contents';

interface BaseQuestionViewProp {
  questionList: Question[] | undefined;
  questionId?: number;
  questionId2?: number;
  question1?: Question;
  question2?: Question;
  isHover: boolean;
  isHoverDual: boolean;
  onCloseLeftContent?: () => void;
  onCloseRightContent?: () => void;
}

export const BaseQuestionView: FC<BaseQuestionViewProp> = ({
  questionList,
  questionId,
  questionId2,
  question1,
  question2,
  isHover,
  isHoverDual,
  onCloseLeftContent,
  onCloseRightContent,
}) => {
  console.log('view', questionId, questionId2);

  return (
    <QuestionsContainer>
      <QQBox>
        {questionId === undefined && <NotSelected />}
        {questionId !== undefined && (
          <QBox>
            {questionList !== undefined && question1 !== undefined && (
              <Contents question={question1} closeThisContent={onCloseLeftContent} />
            )}
          </QBox>
        )}
        {questionId2 !== undefined && (
          <QBox>
            {questionList !== undefined && question2 !== undefined && (
              <Contents question={question2} closeThisContent={onCloseRightContent} />
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
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw' : 'left: 68vw')};
  z-index: 999;
`;
