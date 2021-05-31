import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { Box, Typography, ListItem, Divider, IconButton } from '@material-ui/core';
import { PINK_3, H5, H5I, B2, B2I, B3, B3I, LIGHT_GRAY_1, TRUNCATE_TWO, TRUNCATE_ONE } from 'utils/themes';
import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';
import { Question } from 'utils/types';
import { timeForToday } from 'utils/functions';

interface SpecialQuestionListElementProp {
  question: Question;
  link: string;
  dualDisable: boolean;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
  onClickItem: (question: Question) => void;
}

export const SpecialQuestionListElement: FC<SpecialQuestionListElementProp> = ({
  question,
  link,
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
      <Link to={link}>
        <TextBox>
          <Header>
            <Title notAnswered={notAnswered}>
              <TitleText>
                Q{question.questionId}. {question.question.title}
              </TitleText>
            </Title>
            <Time notAnswered={notAnswered}> {timeForToday(question.question.time)}</Time>
          </Header>

          <Body>
            <BodyText notAnswered={notAnswered}>{question.question.content}</BodyText>
          </Body>
        </TextBox>
      </Link>
      <Divider orientation="vertical" flexItem />
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
  display: flex;
  align-items: center;
  padding: 0;
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
    align-items: center;
  }
  border-bottom: solid;
  border-width: 2px;
  border-color: ${LIGHT_GRAY_1};
`;

const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 0em;
  justify-content: space-between;
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
  margin-right: 0.1em;
  ${({ notAnswered }) => (notAnswered ? B3I : B3)};
`;

const Body = styled(Box)`
  display: flex;
  width: 15em;
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
  height: 100%;
  padding: 1.2em 0.3em;

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
  width: 100%;
  height: fit-content;
  margin: 0.5em;
`;
