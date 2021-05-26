import { FC, useState } from 'react';
import styled from 'styled-components';

// import { ShadowBox } from 'components/Contents/ShadowBox';
import { Box, Typography, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { PINK_3, H5, B2, B3, LIGHT_GRAY_1, TRUNCATE_TWO, TRUNCATE_ONE } from 'utils/themes';

import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';
import { Question } from 'utils/types';
import { Link as DefaultLink } from 'react-router-dom';

import { timeForToday } from '../../utils/functions'

interface QuestionListElementProp {
  question: Question;
  topicId: number;
  subTopicId: number;
}

export const QuestionListElement: FC<QuestionListElementProp> = ({ question, topicId, subTopicId }) => {
  const [shadowPreview, setShadowPreview] = useState(true);

  const setShadow = () => {
    setShadowPreview(!shadowPreview);
  };
  return (
    <Link to={`/topic/${topicId}/subTopic/${subTopicId}/question/${question.questionId}`}>
      <QuestionListElementContainer button>
        <Text>
          <Header>
            <Title>
              <ListItemText>
                <TitleText>
                  Q{question.questionId}. {question.question.title}
                </TitleText>
              </ListItemText>
            </Title>
            <Time> {timeForToday(question.question.time)}</Time>
          </Header>

          <Body>
            <BodyText>
              <ListItemText>{question.question.content}</ListItemText>
            </BodyText>
          </Body>
        </Text>

        <DoubleSidedViewButton onMouseEnter={setShadow} onMouseLeave={setShadow}>
          <Icon icon={squareHalf} />
        </DoubleSidedViewButton>
      </QuestionListElementContainer>
    </Link>
  );
};

const QuestionListElementContainer = styled(ListItem)`
  padding: 0;
  height: wrap-content;
  display: flex;
  align-items: flex-start;
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
  border-bottom: solid;
  border-width: 2px;
  border-color: ${LIGHT_GRAY_1};
`;

const Text = styled(Box)`
  margin-left: 1em;
  margin-top: 0em;
  width: 75%;
  height: 2em;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 0em;
  justify-content: space-between;
`;

const Title = styled(Box)`
  width: 10em;
  .MuiTypography-root {
    ${H5};
  }
`;
const TitleText = styled(Typography)`
  .MuiTypography-root {
    ${H5};
  }
  ${TRUNCATE_ONE};
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
`;

const BodyText = styled(Typography)`
  .MuiTypography-root {
    ${B2};
  }
  ${TRUNCATE_TWO};
`;

const DoubleSidedViewButton = styled(IconButton)`
  padding: 1.2em 3%;
  height: 100%;
  margin: 0;
  border-radius: 0;
  :hover {
    background-color: ${LIGHT_GRAY_1};
  }
  :focus {
    background-color: ${PINK_3};
  }
  align-items: stretch;
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;
