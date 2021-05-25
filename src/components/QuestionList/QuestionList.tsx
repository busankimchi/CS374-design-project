import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, Divider as DefaultDivider } from '@material-ui/core';
import { H3, GRAY_1 } from 'utils/themes';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListHeaderProp {
  topic: string;
  subtopic: string;
}

export const QuestionList: FC = () => {
  const QuestionListHeaderContent: QuestionListHeaderProp = {
    topic: 'Project 1',
    subtopic: 'Alarm-Clock',
  };

  return (
    <QuestionListDrawer variant="permanent" anchor="left">
      <QuestionListHeader>
        {QuestionListHeaderContent.topic} {'>'} {QuestionListHeaderContent.subtopic}
      </QuestionListHeader>
      <Divider />
      <QuestionListDrawerBody>
        <QuestionListElement />
        <Divider />
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};

const QuestionListDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 20%;
    left: 15%;
    right: auto;
    top: 4vh;
  }
`;
const QuestionListDrawerBody = styled(List)``;

const QuestionListHeader = styled(Box)`
  padding: 1em;
  ${H3}
`;

const Divider = styled(DefaultDivider)`
  background-color: ${GRAY_1};
`;
