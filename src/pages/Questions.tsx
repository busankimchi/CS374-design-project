import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { useParams } from 'react-router';
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Contents } from '../components/Contents/Contents';

// import { NotSelected } from '../components/Contents/NotSelected';

interface QuestionsProp {
  pageType: PageType;
}

interface urlParamsType {
  topicId: string;
  subTopicId: string;
}

export const Questions: FC<QuestionsProp> = () => {
  const urlParams = useParams<urlParamsType>();
  return (
    <QuestionsContainer>
      <QuestionList topicID={+urlParams.topicId} subTopicID={+urlParams.subTopicId} />
      <Contents questionId={1} />
      {/* <NotSelected /> */}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  width: 100%;
`;
