/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Backdrop, Box, Fade, Paper } from '@material-ui/core';
import { PageType, Topic, SubTopic, Question } from 'utils/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Hover, Contents, NotSelected } from 'components/Contents';
import { useTopicList } from 'hooks/useTopicList';
import { QuestionListSpecial } from 'components/QuestionList/QuestionListSpecial';
import { dummyQuestions } from '../utils/dummyDatas';

interface QuestionSearchProp {
  pageType: PageType;
  search: string;
  isListShown: boolean;
  isHover: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

export const QuestionSearch: FC<QuestionSearchProp> = ({
  pageType,
  search,
  isListShown,
  isHover,
  onToggle,
  onHoverIn,
  onHoverOut,
}) => {
  // eslint-disable-next-line no-console
  const history = useHistory();

  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question>();

  // TODO: fetch questionList by search

  const onSelected = (item: Question) => {
    setQuestion(item);
  };

  const onCloseContent = (question: Question) => {
    history.push(`/topic/${question.topicId}/subtopic/${question.subTopicId}`);
  };

  return (
    <QuestionsContainer>
      <QuestionDetails>
        <QuestionListSpecial
          pageType={pageType}
          questionList={questionList}
          isListShown={isListShown}
          onToggle={onToggle}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onSelected={onSelected}
        />

        {question !== undefined && <Contents question={question} closeThisContent={() => onCloseContent(question)} />}
      </QuestionDetails>

      {isHover && <SearchSidedPaper open={isHover} />}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
`;

const QuestionDetails = styled(Box)`
  display: flex;
`;

const SearchSidedPaper = styled(Backdrop)`
  position: relative;
  left: 50%;
  z-index: 999999999;
`;
