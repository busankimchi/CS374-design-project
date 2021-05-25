import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { QuestionList } from 'components/QuestionList';
import { Contents } from '../components/Contents/Contents';

interface QuestionsProp {
  pageType: PageType;
  search?: string;
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
}

export const Questions: FC<QuestionsProp> = ({ pageType, search, topicId, subTopicId, questionId, questionId2 }) => {
  console.log({ pageType, search, topicId, subTopicId, questionId, questionId2 });

  return (
    <QuestionsContainer>
      <QuestionList />
      <Contents questionId={1} />
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)``;
