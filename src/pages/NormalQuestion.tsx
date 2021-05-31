/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Backdrop, Box, Fade, Paper } from '@material-ui/core';
import { PageType, Topic, SubTopic } from 'utils/types';
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Hover, Contents, NotSelected } from 'components/Contents';
import { useTopicList } from 'hooks/useTopicList';
import { dummyQuestions } from '../utils/dummyDatas';

interface NormalQuestionProp {
  pageType: PageType;
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
  isListShown: boolean;
  isHover: boolean;
  isHoverDual: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const NormalQuestion: FC<NormalQuestionProp> = ({
  pageType,
  topicId,
  subTopicId,
  questionId,
  questionId2,
  isListShown,
  isHover,
  isHoverDual,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const [topicInfo, setTopicInfo] = useState<Topic>();
  const [subTopicInfo, setSubTopicInfo] = useState<SubTopic>();

  const { topicList } = useTopicList();
  const history = useHistory();

  const onCloseLeftContent = () => {
    if (questionId2 !== undefined) {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId2}`);
    } else {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}`);
    }
  };

  const onCloseRightContent = () => {
    if (questionId !== undefined) {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId}`);
    } else {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}`);
    }
  };

  useEffect(() => {
    if (topicList.length > 0) {
      const newTopicInfo = topicList.find((topic) => topic.id === topicId) as Topic;
      setTopicInfo(newTopicInfo);
    }
  }, [topicList, topicId, subTopicId]);

  useEffect(() => {
    if (topicInfo !== undefined) {
      const newSubTopicInfo = (topicInfo.subTopic as SubTopic[]).find(
        (subtopic) => subtopic.id === subTopicId,
      ) as SubTopic;
      setSubTopicInfo(newSubTopicInfo);
    }
  }, [topicInfo, topicId, subTopicId]);

  return (
    <QuestionsContainer>
      <QuestionDetails>
        {topicInfo !== undefined && subTopicInfo !== undefined && (
          <QuestionList
            topic={topicInfo}
            subTopic={subTopicInfo}
            questionId={questionId}
            questionId2={questionId2}
            isListShown={isListShown}
            onToggle={onToggle}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onHoverInDual={onHoverInDual}
            onHoverOutDual={onHoverOutDual}
          />
        )}

        <QQBox>
          {questionId === undefined && <NotSelected />}
          {questionId !== undefined && (
            <QBox>
              <Contents question={dummyQuestions[questionId - 1]} closeThisContent={onCloseLeftContent} />
            </QBox>
          )}
          {questionId2 !== undefined && (
            <QBox>
              <Contents question={dummyQuestions[questionId2 - 1]} closeThisContent={onCloseRightContent} />
            </QBox>
          )}
        </QQBox>
      </QuestionDetails>

      {isHover && <DoubleSidedPaper open={isHover} fullsize={!isHoverDual} />}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 96vh;
`;

const QBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const QQBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const QuestionDetails = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

const DoubleSidedPaper = styled(Backdrop)<{ fullsize: boolean }>`
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw' : 'left: 68vw')};
  z-index: 999;
`;
