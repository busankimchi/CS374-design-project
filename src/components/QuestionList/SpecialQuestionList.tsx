import { FC } from 'react';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { Question } from 'utils/types';
import { H3, TRUNCATE_ONE } from 'utils/themes';
import { SpecialQuestionListElement } from './SpecialQuestionListElement';

interface QuestionListProp {
  questionList: Question[];
  title: string;
}

export const SpecialQuestionList: FC<QuestionListProp> = ({ questionList, title }) => {
  const renderQuestionListElement = (item: Question) => <SpecialQuestionListElement question={item} />;

  return (
    <QuestionListDrawer>
      <QuestionListHeader>
        <QuestionListHeaderText>${title}</QuestionListHeaderText>
      </QuestionListHeader>
      <QuestionListDrawerBody>
        {questionList !== undefined && questionList.map((item) => renderQuestionListElement(item))}
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};
 
const QuestionListDrawer = styled(Box)`
  .MuiDrawer-paperAnchorLeft {
    width: 10%;
    left: 15%;
    right: auto;
    top: 4vh;
  }
`;
const QuestionListDrawerBody = styled(List)`
  padding: 0;
`;

const QuestionListHeader = styled(Box)`
  padding: 1em;
`;

const QuestionListHeaderText = styled(Typography)`
  ${H3};
  ${TRUNCATE_ONE};
`;
