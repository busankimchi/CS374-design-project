import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { QuestionList } from 'components/QuestionList';
import { Contents } from '../components/Contents/Contents';

interface QuestionsProp {
  pageType: PageType;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Questions: FC<QuestionsProp> = ({ pageType }) => {
  return (
    <QuestionsContainer>
      <QuestionList />
      <Contents questionId={1} />
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)``;
