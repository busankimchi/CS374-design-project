import '@material-ui/core';
import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';
import { PINK_3 } from 'utils/themes';

export const QuestionList = (props: QuestionListHeaderProp) => {
  //const QuestionListElement :
  const QuestionListHeaderContent: QuestionListHeaderProp = {
    topic: 'Project 1',
    subtopic: 'Alarm-Clock',
  };
  const QuestionListElementContent: QuestionListElement ={
      title: "Regarding 'disk.c'",
      content: "I had a question regarding disk.c. When I added line thread_yield in sema_up, disk.c failed ...",
      timestamp: '3 hours ago'
  }

  return (
    <Drawer variant="permanent" anchor="left">
      <QuestionListHeader>
          {QuestionListHeaderContent.topic} {'>'} {QuestionListHeaderContent.subtopic}
      </QuestionListHeader>
      <QuestionListDrawer>
        <QuestionListElement button>{QuestionListElementContent.title}</QuestionListElement>
      </QuestionListDrawer>
    </Drawer>
  );
};

const QuestionListDrawerWidth = 378;
const QuestionListElement = styled(ListItem)`
  :hover {
    background-color: #cdcdcd;
  }
  :focus {
    background-color: #{PINK_3};
  }
`;

const QuestionListDrawer = styled(List)``;

const QuestionListHeader = styled(Box)`
  font-family: Lato;
`;

type QuestionListElement = {
  title: string;
  content: string;
  timestamp: string;
};

type QuestionListHeaderProp = {
  topic: string;
  subtopic: string;
};
