import { FC } from 'react';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
<<<<<<< HEAD
import { H3, TRUNCATE_ONE } from 'utils/themes';
=======
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
// import { dummyTopicList } from 'utils/dummyDatas';
>>>>>>> 63f6ff5a011d27ad2e25e4684a1f51ee1b0309ed
import { Topic, SubTopic, Question } from 'utils/types';
import { useGetQuestionList } from 'apis/Question/useGetQuestionList';
import { Hover } from 'components/Contents';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListHeaderProp {
  topic: Topic;
  subTopic: SubTopic;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({
  topic,
  subTopic,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
}) => {
  const questionIdList = subTopic.questionList as number[];
  const { questionList } = useGetQuestionList(questionIdList);

  const renderQuestionListElement = (item: Question) => (
    <QuestionListElement
      question={item}
      topicId={topic.id}
      subTopicId={subTopic.id}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
    />
  );

  return (
    <QuestionListContainer>
      <QuestionListDrawer isListShown={isListShown}>
        <QuestionListHeader>
          <QuestionListHeaderText>
            {topic.topicName} {'>'} {subTopic.subTopicName}
          </QuestionListHeaderText>
        </QuestionListHeader>
        <QuestionListDrawerBody>
          {questionList !== undefined && questionList.map((item) => renderQuestionListElement(item))}
        </QuestionListDrawerBody>
      </QuestionListDrawer>

      <Hover showQuestionList={onToggle} iconFlip={isListShown} />
    </QuestionListContainer>
  );
};

<<<<<<< HEAD
const QuestionListContainer = styled(Box)`
  display: flex;
`;

const QuestionListDrawer = styled(Box)<{ isListShown: boolean }>`
  width: ${({ isListShown }) => (isListShown ? '20em' : '0em')};
  opacity: ${({ isListShown }) => (isListShown ? '1' : '0')};
  transition: all 0.15s ease-in-out !important;
=======
const QuestionListDrawer = styled(Box)`
  /*.MuiDrawer-paperAnchorLeft {
    width: 10%;
    left: 15%;
    right: auto;
    top: 4vh;
  }
  */
  width: 15vw;
>>>>>>> 63f6ff5a011d27ad2e25e4684a1f51ee1b0309ed
`;

const QuestionListDrawerBody = styled(List)`
  padding: 0;
`;

const QuestionListHeader = styled(Box)`
  padding: 1em;
  border-bottom: solid;
  border-width: 2px;
  border-bottom-color: ${LIGHT_GRAY_1} ;
`;

const QuestionListHeaderText = styled(Typography)`
  ${H3};
  ${TRUNCATE_ONE};
`;
