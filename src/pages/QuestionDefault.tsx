/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Backdrop, Box, Fade, Paper } from '@material-ui/core';
import { PageType, Topic, SubTopic, Question } from 'utils/types';
import { dummyQuestions } from 'utils/dummyDatas';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Hover, Contents, NotSelected } from 'components/Contents';
import { useTopicList } from 'hooks/useTopicList';
import { QuestionListSpecial } from 'components/QuestionList/QuestionListSpecial';

interface QuestionDefaultProp {
  pageType: PageType;
  isFAQ: boolean;
  isListShown: boolean;
  isHover: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

export const QuestionDefault: FC<QuestionDefaultProp> = ({
  pageType,
  isFAQ,
  isListShown,
  isHover,
  onToggle,
  onHoverIn,
  onHoverOut,
}) => {
  // eslint-disable-next-line no-console
  const history = useHistory();

  // TODO: fetch questionList
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question>();

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

        {/* {questionId === undefined && <NotSelected />} */}
        {question !== undefined && <Contents question={question} closeThisContent={() => onCloseContent(question)} />}
      </QuestionDetails>

      {isHover && <DoubleSidedPaper open={isHover} />}
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

const DoubleSidedPaper = styled(Backdrop)`
  position: relative;
  left: 50%;
  z-index: 999999999;
`;
