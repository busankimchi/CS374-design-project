import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Contents } from '../components/Contents/Contents';

// import { NotSelected } from '../components/Contents/NotSelected';

interface QuestionsProp {
  pageType: PageType;
  search?: string;
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
}

export const Questions: FC<QuestionsProp> = ({ pageType, search, topicId, subTopicId, questionId, questionId2 }) => {
  // eslint-disable-next-line no-console
  console.log({ pageType, search, topicId, subTopicId, questionId, questionId2 });

  return (
    <QuestionsContainer>
<<<<<<< HEAD
      <QuestionList topicID={topicId as number} subTopicID={subTopicId as number} />
      <Contents questionId={questionId as number} />
=======
      {/* <QuestionList topicID={topicId as number} subTopicID={subTopicId as number} /> */}
      <Contents questionId={1} />
>>>>>>> feeb1b600233e05c839149fdb6a7d21601cc8311
      {/* <NotSelected /> */}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  width: 100%;
`;
