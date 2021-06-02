import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { BaseQuestionView } from 'components/Contents';

interface BaseQuestionProp {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  questionId?: number;
  questionId2?: number;
  isHover: boolean;
  isHoverDual: boolean;
  onCloseLeftContent?: () => void;
  onCloseRightContent?: () => void;
}

export const BaseQuestionContainer: FC<BaseQuestionProp> = ({
  questionList,
  setQuestionList,
  questionId,
  questionId2,
  isHover,
  isHoverDual,
  onCloseLeftContent,
  onCloseRightContent,
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
      <BaseQuestionView
        questionList={questionList}
        setQuestionList={setQuestionList}
        setQuestion1={setQuestion1}
        setQuestion2={setQuestion2}
        questionId={questionId}
        questionId2={questionId2}
        question1={question1}
        question2={question2}
        isHover={isHover}
        isHoverDual={isHoverDual}
        onCloseLeftContent={onCloseLeftContent}
        onCloseRightContent={onCloseRightContent}
      />
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 96vh;
`;
