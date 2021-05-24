import { FC } from 'react';
import styled from 'styled-components';
import { Box, Typography, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { PINK_3, H5, B2, B3, GRAY_3, TRUNCATE_TWO } from 'utils/themes';
import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';

interface QuestionListElementProp {
  title: string;
  content: string;
  timestamp: string;
}

export const QuestionListElement: FC = () => {
  const QuestionListElementContent: QuestionListElementProp = {
    title: "Regarding 'disk.c'",
    content: 'I had a question regarding disk.c. When I added line thread_yield in sema_up, disk.c failed ...',
    timestamp: '3 hours ago',
  };

  return (
    <QuestionListElementContainer button>
      <QuestionListElementText>
        <QuestionListElementHeader>
          <QuestionListElementTitle>
            <ListItemText>{QuestionListElementContent.title}</ListItemText>
          </QuestionListElementTitle>
          <QuestionListElementDate> {QuestionListElementContent.timestamp}</QuestionListElementDate>
        </QuestionListElementHeader>

        <QuestionListElementBody>
          <QuestionListElementBodyText>
            <ListItemText>{QuestionListElementContent.content}</ListItemText>
          </QuestionListElementBodyText>
        </QuestionListElementBody>
      </QuestionListElementText>

      <DoubleSidedViewButton>
        <Icon icon={squareHalf} />
      </DoubleSidedViewButton>
    </QuestionListElementContainer>
  );
};

const DoubleSidedViewButton = styled(IconButton)`
  padding: 1em 0.1em 1em 0.1em;
  height: 100%;
  margin-left: 0.2em;
  .MuiIconButton-root {
    border-radius: 0;
}
  :hover {
    background-color: ${GRAY_3};
  }
  :focus {

    background-color: ${PINK_3};
  }
`;

const QuestionListElementContainer = styled(ListItem)`
  padding: 0;
  display: flex;
  alignitems: left;
  :hover {
    background-color: rgba(205, 205, 205, 0.3);
  }
  :focus {
    background-color: ${PINK_3};
  }
  :focus-within {
    background-color: ${PINK_3};
  }
  .MuiListItem-root {
    align-items: flex-start;
  }
`;
const QuestionListElementText = styled(Box)`
  margin-left: 1em;
  margin-bottom: 0.3em;
  display: flex;
  flex-direction: column;
`;

const QuestionListElementHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuestionListElementTitle = styled(Box)`
  width: 10em;
  .MuiTypography-root {
    ${H5};
  }
`;

const QuestionListElementDate = styled(Box)`
  width: 5em;
  margin-right: 0.1em;
  ${B3}
`;

const QuestionListElementBody = styled(Box)`
  .MuiTypography-root {
    ${B2};
  }
  white-space: pre-line;
`;

const QuestionListElementBodyText = styled(Typography)`
  .MuiTypography-root {
    ${B2};
  }
  ${TRUNCATE_TWO};
`;
