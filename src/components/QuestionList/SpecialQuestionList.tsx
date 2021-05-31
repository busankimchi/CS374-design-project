import { FC } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { Question } from 'utils/types';
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
import { Hover } from 'components/Contents';
import { SpecialQuestionListElement } from './SpecialQuestionListElement';
import { Loading } from '../General/Loading'

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
}) => {
  const history = useHistory();
  const location = useLocation();

  const onClickItem = (item: Question) => {
    const { pathname, search } = location;

    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  const renderQuestionListElement = (item: Question) => (
    <SpecialQuestionListElement
      question={item}
      link={itemLink(item)}
      dualDisable={questionId === undefined}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      onClickItem={onClickItem}
    />
  );

  const drawerBody = (questionList === undefined || isLoading) ? <Loading /> : questionList.map((item) => renderQuestionListElement(item));

  return (
    <QuestionListContainer>
      <QuestionListDrawer isListShown={isListShown}>
        <QuestionListHeader>
          <QuestionListHeaderText>{title}</QuestionListHeaderText>
        </QuestionListHeader>
        <QuestionListDrawerBody>
          {drawerBody}
        </QuestionListDrawerBody>
      </QuestionListDrawer>

      <Hover showQuestionList={onToggle} iconFlip={isListShown} />
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled(Box)`
  display: flex;
  height: 100%;
`;

const QuestionListDrawer = styled(Box) <{ isListShown: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isListShown }) => (isListShown ? '20vw' : '0vw')};
  height: 100%;
  ${({ isListShown }) => !isListShown && 'display: none;'}
  transition: all 0.15s ease-in-out !important;
`;

const QuestionListDrawerBody = styled(List)`
  overflow-y: scroll;
  padding: 0;

  ::-webkit-scrollbar {
    display: none;
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
