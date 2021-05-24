import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { QuestionList } from 'components/QuestionList';
import { Contents } from '../components/Contents/Contents';

interface QuestionsProp {
  pageType: PageType;
}

export const Questions: FC<QuestionsProp> = () => {
  return (
    <QuestionsContainer>
      <QuestionList />
      <Contents questionId={1} />
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)``;
