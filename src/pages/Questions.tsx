import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Contents } from '../components/Contents/Contents';
// import { NotSelected } from '../components/Contents/NotSelected';
import { dummyQuestion } from '../utils/dummyDatas'

interface QuestionsProp {
  pageType: PageType;
}

export const Questions: FC<QuestionsProp> = () => {
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
