/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Backdrop, Box, Fade, Paper, Typography } from '@material-ui/core';
import { PageType, Topic, SubTopic } from 'utils/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Hover, Contents, NotSelected } from 'components/Contents';
import { useTopicList } from 'hooks/useTopicList';
import { H1 } from 'utils/themes';
import { dummyQuestions } from '../utils/dummyDatas';
import { QuestionNormal } from './QuestionNormal';
import { QuestionDouble } from './QuestionDouble';
import { QuestionDefault } from './QuestionDefault';
import { QuestionSearch } from './QuestionSearch';

interface QuestionsProp {
  pageType: PageType;
  search?: string;
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
}

export const Questions: FC<QuestionsProp> = ({ pageType, search, topicId, subTopicId, questionId, questionId2 }) => {
  // eslint-disable-next-line no-console
  console.log({ pageType, search, topicId, subTopicId, questionId, questionId2 });

  const [isListShown, setListShown] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isHoverDual, setHoverDual] = useState(false);

  const onHoverIn = () => setHover(true);
  const onHoverOut = () => setHover(false);
  const onToggle = () => setListShown(!isListShown);

  if (pageType === PageType.NORMAL) {
    return (
      <QuestionNormal
        topicId={topicId as number}
        subTopicId={subTopicId as number}
        questionId={questionId}
        isListShown={isListShown}
        isHover={isHover}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={() => setHoverDual(true)}
        onHoverOutDual={() => setHoverDual(false)}
      />
    );
  }
  if (pageType === PageType.DUAL) {
    return (
      <QuestionDouble
        topicId={topicId as number}
        subTopicId={subTopicId as number}
        questionId={questionId as number}
        questionId2={questionId2 as number}
        isListShown={isListShown}
        isHover={isHover}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={() => setHoverDual(true)}
        onHoverOutDual={() => setHoverDual(false)}
      />
    );
  }
  if (pageType === PageType.SEARCH) {
    return (
      <QuestionSearch
        pageType={PageType.SEARCH}
        search={search as string}
        isHover={isHover}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={() => setHoverDual(true)}
        onHoverOutDual={() => setHoverDual(false)}
      />
    );
  }
  if (pageType === PageType.FAQ) {
    return (
      <QuestionDefault
        pageType={PageType.FAQ}
        isFAQ
        isHover={isHover}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={() => setHoverDual(true)}
        onHoverOutDual={() => setHoverDual(false)}
      />
    );
  }
  if (pageType === PageType.ALL_QUESTONS) {
    return (
      <QuestionDefault
        pageType={PageType.ALL_QUESTONS}
        isFAQ={false}
        isHover={isHover}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={() => setHoverDual(true)}
        onHoverOutDual={() => setHoverDual(false)}
      />
    );
  }

  return (
    <Nothing>
      <NothingText>PAGE NOT FOUND!</NothingText>
    </Nothing>
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

const Nothing = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NothingText = styled(Typography)`
  ${H1}
`;
