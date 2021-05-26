import { FC } from 'react';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
// import { dummyTopicList } from 'utils/dummyDatas';
import { Topic, SubTopic, Question, PageType } from 'utils/types';
// import { useGetQuestionListSpecial } from 'apis/Question/useGetQuestionListSpecial';
import { Hover } from 'components/Contents';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListSpecialHeaderProp {
  pageType: PageType;
  questionList: Question[];
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onSelected: (item: Question) => void;
}

export const QuestionListSpecial: FC<QuestionListSpecialHeaderProp> = ({
  pageType,
  questionList,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onSelected,
}) => {
  const renderQuestionListElement = (item: Question) => (
    <QuestionListElement
      question={item}
      topicId={item.topicId}
      subTopicId={item.subTopicId}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onSelected={(item: Question) => onSelected(item)}
    />
  );

  const HeaderPicker = (pageType: PageType) => {
    switch (pageType) {
      case PageType.ALL_QUESTONS:
        return 'ALL QUESTIONS';
      case PageType.FAQ:
        return 'FAQ';
      case PageType.SEARCH:
        return 'SEARCH RESULT';
      default:
        return '';
    }
  };

  return (
    <QuestionListSpecialContainer>
      <QuestionListSpecialDrawer isListShown={isListShown}>
        <QuestionListSpecialHeader>
          <QuestionListSpecialHeaderText>{HeaderPicker(pageType)}</QuestionListSpecialHeaderText>
        </QuestionListSpecialHeader>
        <QuestionListSpecialDrawerBody>
          {questionList !== undefined && questionList.map((item) => renderQuestionListElement(item))}
        </QuestionListSpecialDrawerBody>
      </QuestionListSpecialDrawer>

      <Hover showQuestionList={onToggle} iconFlip={isListShown} />
    </QuestionListSpecialContainer>
  );
};

const QuestionListSpecialContainer = styled(Box)`
  display: flex;
`;

const QuestionListSpecialDrawer = styled(Box)<{ isListShown: boolean }>`
  width: ${({ isListShown }) => (isListShown ? '20em' : '0em')};
  opacity: ${({ isListShown }) => (isListShown ? '1' : '0')};
  transition: all 0.15s ease-in-out !important;
`;

const QuestionListSpecialDrawerBody = styled(List)`
  padding: 0;
`;

const QuestionListSpecialHeader = styled(Box)`
  padding: 1em;
  border-bottom: solid;
  border-width: 2px;
  border-bottom-color: ${LIGHT_GRAY_1};
`;

const QuestionListSpecialHeaderText = styled(Typography)`
  ${H3};
  ${TRUNCATE_ONE};
`;
