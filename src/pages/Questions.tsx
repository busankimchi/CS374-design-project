import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { QuestionList } from 'components/QuestionList';
import { Contents } from '../components/Contents/Contents';
// import { NotSelected } from '../components/Contents/NotSelected';

interface QuestionsProp {
  pageType: PageType;
}

export const Questions: FC<QuestionsProp> = () => {
  return (
    <QuestionsContainer>
      {/* <QuestionList /> */}
      <Contents questionId={1} />
      {/* <NotSelected /> */}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  width: 100%;
`;
