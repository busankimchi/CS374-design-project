import { FC, Dispatch, SetStateAction } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { H3, TRUNCATE_ONE, GRAY, LIGHT_GRAY_1, LIGHT_GRAY_2 } from 'utils/themes';
import { Topic, SubTopic, Question } from 'utils/types';
import { Hover } from 'components/Contents';
import { Loading } from 'components/General';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListProp {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  topic: Topic;
  subTopic: SubTopic;
  questionList: Question[] | undefined;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const QuestionList: FC<QuestionListProp> = ({
  isLoading,
  topic,
  subTopic,
  questionList,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const history = useHistory();
  const location = useLocation();
  const locationSearch = location.search.split('&');
  const firstQId = locationSearch[0].substr(1).split('=')[1];
  const firstQIdNum = Number(firstQId);

  const onClickItemDual = (item: Question) => {
    const { pathname, search } = location;

    const searchQuery = search.split('&');

    if (searchQuery[1] !== undefined) {
      history.push(`${pathname}${searchQuery[0]}&second=${item.questionId}`);
      return;
    }
    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  console.log(isLoading, subTopic, topic);

  const renderQuestionListElement = (item: Question) => (
    <QuestionListElement
      key={item.questionId}
      question={item}
      topicId={topic.id}
      subTopicId={subTopic.id}
      onClickItemDual={onClickItemDual}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      dualDisable={Number.isNaN(firstQIdNum)}
    />
  );

  const drawerHeader = isLoading ? '...' : `${topic.topicName} > ${subTopic.subTopicName}`;
  const drawerBody =
    questionList === undefined || isLoading ? <Loading /> : questionList.map((item) => renderQuestionListElement(item));

  return (
    <QuestionListContainer>
      <QuestionListDrawer isListShown={isListShown}>
        <QuestionListHeader>
          <QuestionListHeaderText>{drawerHeader}</QuestionListHeaderText>
        </QuestionListHeader>
        <QuestionListDrawerBody isLoading={isLoading}>{drawerBody}</QuestionListDrawerBody>
      </QuestionListDrawer>

      <Hover showQuestionList={onToggle} iconFlip={isListShown} />
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled(Box)`
  display: flex;
  height: 100%;
`;

const QuestionListDrawer = styled(Box)<{ isListShown: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isListShown }) => (isListShown ? '20vw' : '0vw')};
  height: 100%;
  ${({ isListShown }) => !isListShown && 'display: none;'}
  transition: all 0.15s ease-in-out !important;
`;

const QuestionListDrawerBody = styled(List)<{ isLoading: boolean }>`
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 !important;

  ::-webkit-scrollbar {
    width: 4px;
    ${({ isLoading }) => !isLoading && `background-color: ${LIGHT_GRAY_2};`}
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${GRAY};
    border-radius: 10rem;
    border: 1px solid #ffffff;
  }
`;

const QuestionListHeader = styled(Box)`
  padding: 1em;
  border-bottom: solid;
  border-width: 2px;
  border-bottom-color: ${LIGHT_GRAY_1};
`;

const QuestionListHeaderText = styled(Typography)`
  ${H3};
  ${TRUNCATE_ONE};
`;
