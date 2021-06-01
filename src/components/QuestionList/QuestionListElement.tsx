import { FC, useState, Dispatch, SetStateAction } from 'react';
import { Link as DefaultLink } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import squareHalf from '@iconify-icons/bi/square-half';
import { Box, Typography, ListItem, Divider, IconButton } from '@material-ui/core';
import { PINK_3, H5, H5I, B2, B2I, B3, B3I, LIGHT_GRAY_1, TRUNCATE_TWO, TRUNCATE_ONE } from 'utils/themes';
import { Question } from 'utils/types';
import { timeForToday } from 'utils/functions';

interface QuestionListElementProp {
  setQuestionId: Dispatch<SetStateAction<number | undefined>>;
  setQuestionId2: Dispatch<SetStateAction<number | undefined>>;
  question: Question;
  topicId: number;
  subTopicId: number;
  dualDisable: boolean;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
  onClickItemDual: (question: Question) => void;
}

export const QuestionListElement: FC<QuestionListElementProp> = ({
  setQuestionId,
  setQuestionId2,
  question,
  topicId,
  subTopicId,
  dualDisable,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
  onClickItemDual,
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
      <Link
        to={`/topic/${topicId}/subTopic/${subTopicId}/question/${question.questionId}`}
        onClick={() => setQuestionId(question.questionId)}
      >
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
        onClick={() => {
          onClickItemDual(question);
          setQuestionId2(question.questionId);
        }}
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
