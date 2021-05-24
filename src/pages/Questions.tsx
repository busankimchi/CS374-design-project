import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType } from 'utils/types';
<<<<<<< HEAD
=======
import { QuestionList } from 'components/QuestionList';
>>>>>>> 581895155de76590b4a7c198c66bd786176ae4f8
import { Contents } from '../components/Contents/Contents';

interface QuestionsProp {
  pageType: PageType;
}

export const Questions: FC<QuestionsProp> = () => {
  return (
    <QuestionsContainer>
<<<<<<< HEAD
      <Contents questionId={1}/>
      <Contents questionId={1}/>
=======
      <QuestionList />
      <Contents questionId={1} />
>>>>>>> 581895155de76590b4a7c198c66bd786176ae4f8
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
display: flex;
`;
