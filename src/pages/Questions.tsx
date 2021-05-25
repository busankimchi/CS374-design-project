import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
// import { useParams } from 'react-router';
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Contents } from '../components/Contents/Contents';

// import { NotSelected } from '../components/Contents/NotSelected';
import { dummyQuestion } from '../utils/dummyDatas'

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
      <QuestionList topicID={1} subTopicID={1} />
      <Contents question={dummyQuestion} />
      {/* <NotSelected /> */}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  width: 100%;
`;
