import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { ParamProp, Question } from 'utils/types';
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
import { Hover } from 'components/Contents';
import { SpecialQuestionListElement } from './SpecialQuestionListElement';
import { Loading } from '../General/Loading';

interface SpecialQuestionListProp {
  setQuestionId: Dispatch<SetStateAction<number | undefined>>;
  setQuestionId2: Dispatch<SetStateAction<number | undefined>>;
  isLoading: boolean;
  questionList: Question[];
  title: string;
  itemLink: (item: Question) => string;
  onClickItemDual: (item: Question) => void;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const SpecialQuestionList: FC<SpecialQuestionListProp> = ({
  setQuestionId,
  setQuestionId2,
  isLoading,
  questionList,
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
  const params = useParams<ParamProp>();

  const renderQuestionListElement = (item: Question) => (
    <SpecialQuestionListElement
      setQuestionId={setQuestionId}
      setQuestionId2={setQuestionId2}
      key={item.questionId}
      question={item}
      link={itemLink(item)}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      onClickItemDual={onClickItemDual}
      dualDisable={params.questionId === undefined}
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
