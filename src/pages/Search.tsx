import { FC } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { BaseQuestionContainer } from 'components/General/BaseQuestionContainer';

interface SearchProp {
  questionList: Question[];
  search?: string;
  questionId?: number;
  questionId2?: number;
  isHover: boolean;
  isHoverDual: boolean;
}

export const Search: FC<SearchProp> = ({ questionList, search, questionId, questionId2, isHover, isHoverDual }) => {
  const history = useHistory();

  const onCloseLeftContent = () => {
    history.push(`/search?q=${search}&first=${questionId2}`);
  };

  const onCloseRightContent = () => {
    history.push(`/search?q=${search}&first=${questionId}`);
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
