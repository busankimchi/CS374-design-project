import { FC } from 'react';
import styled from 'styled-components';
import { Box, Typography, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { PINK_3, H5, B2, B3, LIGHT_GRAY_1, TRUNCATE_TWO } from 'utils/themes';
import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';
import { dummyQuestion } from '../../utils/dummyDatas';

interface QuestionListElementProp {
  questionId: number;
}

export const QuestionListElement: FC<QuestionListElementProp> = ({ questionId }) => {
  const question = dummyQuestion;

  return (
    <QuestionListElementContainer button>
      <Text>
        <Header>
          <Title>
            <ListItemText>
              Q{questionId}. {question.title}
            </ListItemText>
          </Title>
          <Time> {question.time.toDateString()}</Time>
        </Header>

        <Body>
          <BodyText>
            <ListItemText>{question.content}</ListItemText>
          </BodyText>
        </Body>
      </Text>

      <DoubleSidedViewButton>
        <Icon icon={squareHalf} />
      </DoubleSidedViewButton>
    </QuestionListElementContainer>
  );
};

const QuestionListElementContainer = styled(ListItem)`
  padding: 0;
  display: flex;
  alignitems: left;
  justify-content: space-between;
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
const Text = styled(Box)`
  margin-left: 1em;
  margin-bottom: 0.3em;
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Box)`
  width: 10em;
  .MuiTypography-root {
    ${H5};
  }
`;

const Time = styled(Box)`
  width: 7.5em;
  margin-right: 0.1em;
  ${B3}
`;

const Body = styled(Box)`
  .MuiTypography-root {
    ${B2};
  }
  white-space: pre-line;
`;

const BodyText = styled(Typography)`
  .MuiTypography-root {
    ${B2};
  }
  ${TRUNCATE_TWO};
`;

const DoubleSidedViewButton = styled(IconButton)`
  padding: 1em 0.1em 1em 0.1em;
  height: 100%;
  margin-left: 0.2em;
  margin-right: 0.1em;
  .MuiIconButton-root {
    border-radius: 0;
  }
  :hover {
    background-color: ${LIGHT_GRAY_1};
  }
  :focus {
    background-color: ${PINK_3};
  }
`;
