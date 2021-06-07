import { FC, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Backdrop, Box } from '@material-ui/core';
import ResizePanel from 'react-resize-panel-ts';
import { Question } from 'utils/types';
import { H1, LIGHT_GRAY_1 } from 'utils/themes';
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
          <ResizeContainer>
            <ResizePanel direction="w" style={{ width: '31vw' }}>
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
            </ResizePanel>
          </ResizeContainer>
        )}
      </QQBox>
      {isHover && (
        <DoubleSidedPaper open={isHover} fullsize={!isHoverDual}>
          Open Here
        </DoubleSidedPaper>
      )}
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
  ${H1};
  color: #ffffff;
`;

const ResizeContainer = styled.div`
  border-left: 1px solid ${LIGHT_GRAY_1};
  display: flex;
`;
