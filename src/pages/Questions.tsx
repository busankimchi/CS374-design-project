import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Contents } from '../components/Contents/Contents';
import { Hover } from '../components/Contents/Hover';
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
  // eslint-disable-next-line no-console
  console.log({ pageType, search, topicId, subTopicId, questionId, questionId2 });
  const [isListShown, setListShown] = useState(true);

  return (
    <QuestionsContainer>
      <QuestionList topicID={1} subTopicID={1} isListShown={isListShown}/>
      <Hover showQuestionList={() => setListShown(!isListShown)} />
      <Contents question={dummyQuestion} />
      {/* <NotSelected /> */}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
`;
