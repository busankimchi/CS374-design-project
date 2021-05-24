import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, ListItem, ListItemText, Typography, Divider as DefaultDivider } from '@material-ui/core';
import { H3, H5, B1, B2, B3, GRAY } from 'utils/themes';

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
      <Divider />
      <QuestionListDrawerBody>
        <QuestionListElement button>
          <QuestionListElementTitle>
            <ListItemText>
              {QuestionListElementContent.title} <br />
            </ListItemText>
          </QuestionListElementTitle>
          <QuestionListElementBody>
            <ListItemText>{QuestionListElementContent.content}</ListItemText>
          </QuestionListElementBody>
        </QuestionListElement>
        <Divider />
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};

const QuestionListElement = styled(ListItem)`
  padding: 0.2em 0.2em 0.2em 1em;
  display: flex;
  flex-direction: column;
  alignItems: 'left';
  :hover {
    background-color: #cdcdcd;
  }
  :focus {
    background-color: #{PINK_3};
  }
`;

const QuestionListElementBody = styled(Box)`
  .MuiTypography-root {
    ${B3};
  }
  white-space: pre-line;
`;

const QuestionListElementTitle = styled(Box)`
.MuiTypography-root {
  ${H5};
}
`;

const QuestionListDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 25%;
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
  background-color: ${GRAY};
`;
