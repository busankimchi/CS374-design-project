import { FC } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { BaseQuestionContainer } from 'components/General/BaseQuestionContainer';

import { Question } from 'utils/types';

interface AllQuestionsProp {
  questionList: Question[];
  questionId?: number;
  questionId2?: number;

  isHover: boolean;
  isHoverDual: boolean;
}

export const AllQuestions: FC<AllQuestionsProp> = ({ questionList, questionId, questionId2, isHover, isHoverDual }) => {
  const history = useHistory();

  const onCloseLeftContent = () => {
    if (questionId2 !== undefined) {
      history.push(`/all_questions/${questionId2}`);
    } else {
      history.push(`/all_questions`);
    }
  };

  const onCloseRightContent = () => {
    if (questionId !== undefined) {
      history.push(`/all_questions/${questionId}`);
    } else {
      history.push(`/all_questions`);
    }
  };

  return (
    <BaseQuestionContainer
      questionList={questionList}
      questionId={questionId}
      questionId2={questionId2}
      isHover={isHover}
      isHoverDual={isHoverDual}
      onCloseLeftContent={onCloseLeftContent}
      onCloseRightContent={onCloseRightContent}
    />
  );
};
