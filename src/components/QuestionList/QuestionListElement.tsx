import { FC, useState } from 'react';
import { Link as DefaultLink } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';
import { Box, Typography, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { PINK_3, H5, H5I, B2, B2I, B3, B3I, LIGHT_GRAY_1, TRUNCATE_TWO, TRUNCATE_ONE } from 'utils/themes';
import { Question } from 'utils/types';
import { timeForToday } from 'utils/functions';

interface QuestionListElementProp {
  question: Question;
  topicId: number;
  subTopicId: number;
  dualDisable: boolean;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
  onClickItem: (question: Question) => void;
}

export const QuestionListElement: FC<QuestionListElementProp> = ({
  question,
  topicId,
  subTopicId,
  dualDisable,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
  onClickItem,
}) => {
  const [shadowPreview, setShadowPreview] = useState(true);

  const notAnswered: boolean = question.answers.length === 0;

  const setShadowIn = () => {
    setShadowPreview(!shadowPreview);
    onHoverInDual();
  };

  const setShadowOut = () => {
    setShadowPreview(!shadowPreview);
    onHoverOutDual();
  };

  return (
    <QuestionListElementContainer button onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
      <Link to={`/topic/${topicId}/subTopic/${subTopicId}/question/${question.questionId}`}>
        <Text>
          <Header>
            <Title notAnswered={notAnswered}>
              <ListItemText>
                <TitleText>
                  Q{question.questionId}. {question.question.title}
                </TitleText>
              </ListItemText>
            </Title>
            <Time notAnswered={notAnswered}> {timeForToday(question.question.time)}</Time>
          </Header>

          <Body>
            <BodyText notAnswered={notAnswered}>
              <ListItemText>{question.question.content}</ListItemText>
            </BodyText>
          </Body>
        </Text>
      </Link>

      <DoubleSidedViewButton
        onMouseEnter={setShadowIn}
        onMouseLeave={setShadowOut}
        onClick={() => onClickItem(question)}
        disabled={dualDisable}
      >
        <Icon icon={squareHalf} />
      </DoubleSidedViewButton>
    </QuestionListElementContainer>
  );
};

const QuestionListElementContainer = styled(ListItem)`
  padding: 0 !important;
  height: auto !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  :hover {
    background-color: rgba(205, 205, 205, 0.3) !important;
  }
  :focus {
    background-color: ${PINK_3} !important;
  }
  :focus-within {
    background-color: ${PINK_3} !important;
  }
  border-bottom: solid !important;
  border-width: 2px !important;
  border-color: ${LIGHT_GRAY_1} !important;
`;

const Text = styled(Box)`
  margin-left: 1em !important;
  margin-top: 0em !important;
  width: 95% !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
`;

const Header = styled(Box)`
  display: flex !important;
  align-items: center !important;
  margin-bottom: 0em !important;
  justify-content: space-between !important;
`;

const Title = styled(Box)<{ notAnswered: boolean }>`
  width: 10em;
  .MuiTypography-root {
    ${({ notAnswered }) => (notAnswered ? H5I : H5)};
  }
`;

const TitleText = styled(Typography)`
  .MuiTypography-root {
    ${H5};
  }
  ${TRUNCATE_ONE};
`;

const Time = styled(Box)<{ notAnswered: boolean }>`
  width: 7.5em;
  margin-right: 0.1em !important;
  ${({ notAnswered }) => (notAnswered ? B3I : B3)};
`;

const Body = styled(Box)`
  .MuiTypography-root {
    ${B2};
  }
`;

const BodyText = styled(Typography)<{ notAnswered: boolean }>`
  .MuiTypography-root {
    ${({ notAnswered }) => (notAnswered ? B2I : B2)};
  }
  ${TRUNCATE_TWO};
`;

const DoubleSidedViewButton = styled(IconButton)`
  padding: 1.2em 3% !important;
  height: 100% !important;
  margin: 0 !important;
  border-radius: 0;
  :hover {
    background-color: ${LIGHT_GRAY_1} !important;
  }
  :focus {
    background-color: ${PINK_3} !important;
  }
  align-items: stretch !important;
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;
