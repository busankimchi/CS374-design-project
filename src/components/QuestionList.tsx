import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, ListItem, ListItemText, Divider as DefaultDivider } from '@material-ui/core';
import { PINK_3, H3, H5, B3, GRAY_1, GRAY_3 } from 'utils/themes';
import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';

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
          <QuestionListElementText>
            <QuestionListElementTitle>
              <ListItemText>{QuestionListElementContent.title}</ListItemText>
            </QuestionListElementTitle>
            <QuestionListElementDate> {QuestionListElementContent.timestamp}</QuestionListElementDate>
            <QuestionListElementBody>
              <ListItemText>{QuestionListElementContent.content}</ListItemText>
            </QuestionListElementBody>
          </QuestionListElementText>
          <DoubleSidedViewButton>
            <Icon icon={squareHalf} />
          </DoubleSidedViewButton>
        </QuestionListElement>
        <Divider />
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};

const QuestionListElement = styled(ListItem)`
height: 10vh;
  padding: 0.2em 0.5em 0.2em 1em;
  display: flex;
  alignitems: 'left';
  :hover {
    background-color: rgba(205, 205, 205, 0.3);
  }
  :focus {
    background-color: ${PINK_3};
  }
  .MuiListItem-root {
    align-items: flex-start;
  }
`;

const QuestionListElementText = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const QuestionListElementDate = styled(Box)`
  width: 5em;
  ${B3}
`;

const QuestionListElementBody = styled(Box)`
  .MuiTypography-root {
    ${B3};
  }
  white-space: pre-line;
`;

const QuestionListElementTitle = styled(Box)`
  width: 10em;
  .MuiTypography-root {
    ${H5};
  }
`;

const DoubleSidedViewButton = styled(Box)`
  padding: 1em;
  :hover {
    background-color: ${GRAY_3};
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
  background-color: ${GRAY_1};
`;
