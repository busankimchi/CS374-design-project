import '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import { PINK_3 } from 'utils/themes';

interface QuestionListHeaderProp {
  topic: string;
  subtopic: string;
}
interface QuestionListElementProp {
  title: string;
  content: string;
  timestamp: string;
}

export const QuestionList: FC = () => {
  const QuestionListHeaderContent: QuestionListHeaderProp = {
    topic: 'Project 1',
    subtopic: 'Alarm-Clock',
  };
  const QuestionListElementContent: QuestionListElementProp = {
    title: "Regarding 'disk.c'",
    content: 'I had a question regarding disk.c. When I added line thread_yield in sema_up, disk.c failed ...',
    timestamp: '3 hours ago',
  };

  return (
    <QuestionListDrawer variant="permanent" anchor="left">
      <QuestionListHeader>
        {QuestionListHeaderContent.topic} {'>'} {QuestionListHeaderContent.subtopic}
      </QuestionListHeader>
      <QuestionListDrawerBody>
        <QuestionListElement button>{QuestionListElementContent.title}</QuestionListElement>
        <Divider />
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};

const QuestionListElement = styled(ListItem)`
  :hover {
    background-color: #cdcdcd;
  }
  :focus {
    background-color: #{PINK_3};
  }
`;
const QuestionListDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    left: 15%;
    right: auto;
    top: 4vh;
  }
  width: 25%;
`;
const QuestionListDrawerBody = styled(List)``;

const QuestionListHeader = styled(Box)`
  font-family: Lato;
`;
