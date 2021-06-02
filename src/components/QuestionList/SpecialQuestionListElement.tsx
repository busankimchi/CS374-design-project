import { FC, useState } from 'react';
import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { Tooltip, Box, Typography, Divider, IconButton } from '@material-ui/core';
import { H5, H5I, B2, B2I, B3, B3I, LIGHT_GRAY_1, TRUNCATE_TWO, TRUNCATE_ONE } from 'utils/themes';
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
  onClickItemDual: (question: Question) => void;
  changeCurrQ: (question: Question | undefined) => void;
  changeCurrQ2: (question2: Question | undefined) => void;
}

export const SpecialQuestionListElement: FC<SpecialQuestionListElementProp> = ({
  question,
  link,
  dualDisable,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
  onClickItemDual,
  changeCurrQ,
  changeCurrQ2,
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
    <QuestionListElementContainer>
      <TextBox onMouseEnter={onHoverIn} onMouseLeave={onHoverOut}>
        <Link to={link} onClick={() => changeCurrQ(question)}>
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
        </Link>
      </TextBox>

      <Divider orientation="vertical" flexItem />
      <Tooltip title="Open in double-sided view">
        <DoubleSidedViewButton
          onMouseEnter={setShadowIn}
          onMouseLeave={setShadowOut}
          onClick={() => {
            onClickItemDual(question);
            changeCurrQ2(question);
          }}
          disabled={dualDisable}
        >
          <Icon icon={squareHalf} />
        </DoubleSidedViewButton>
      </Tooltip>
    </QuestionListElementContainer>
  );
};

/** component changed  */
const QuestionListElementContainer = styled(Box)`
  display: flex !important;
  align-items: center !important;
  padding: 0 !important;
  justify-content: space-evenly !important;
  border-bottom: solid !important;
  border-width: 2px !important;
  border-color: ${LIGHT_GRAY_1} !important;
`;

const TextBox = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  width: 80% !important;
  padding: 0.5em !important;
  justify-content: space-between !important;
  :hover {
    background-color: rgba(205, 205, 205, 0.3);
  }
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
  margin-right: 0.1em !important;
  ${({ notAnswered }) => (notAnswered ? B3I : B3)};
`;

const Body = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 0.2em;
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
  height: 100% !important;
  padding: 1.2em 0.3em !important;
  margin-right: 0.1em !important;

  border-radius: 0 !important;
  :hover {
    background-color: ${LIGHT_GRAY_1} !important;
  }
  align-items: stretch !important;
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
  width: 100%;
  height: 100%;
  margin: 0em;
`;
