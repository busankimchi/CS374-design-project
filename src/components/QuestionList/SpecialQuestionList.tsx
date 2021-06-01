import { FC } from 'react';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { Question } from 'utils/types';
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
import { Hover } from 'components/Contents';
import { SpecialQuestionListElement } from './SpecialQuestionListElement';
import { Loading } from '../General/Loading';

interface QuestionListProp {
  isLoading: boolean;
  questionList: Question[];
  questionId?: number;
  questionId2?: number;
  title: string;
  itemLink: (item: Question) => string;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
  onClickItemDual: (item: Question) => void;
}

export const SpecialQuestionList: FC<QuestionListProp> = ({
  isLoading,
  questionList,
  questionId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  questionId2,
  title,
  itemLink,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
  onClickItemDual,
}) => {
  const renderQuestionListElement = (item: Question) => (
    <SpecialQuestionListElement
      key={item.questionId}
      question={item}
      link={itemLink(item)}
      dualDisable={questionId === undefined}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      onClickItemDual={onClickItemDual}
    />
  );

  const drawerBody =
    questionList === undefined || isLoading ? <Loading /> : questionList.map((item) => renderQuestionListElement(item));

  return (
    <QuestionListContainer>
      <QuestionListDrawer isListShown={isListShown}>
        <QuestionListHeader>
          <QuestionListHeaderText>{title}</QuestionListHeaderText>
        </QuestionListHeader>
        <QuestionListDrawerBody>{drawerBody}</QuestionListDrawerBody>
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

const QuestionListDrawerBody = styled(List)`
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
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
