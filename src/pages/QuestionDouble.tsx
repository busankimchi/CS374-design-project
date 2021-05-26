/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Backdrop, Box, Fade, Paper } from '@material-ui/core';
import { PageType, Topic, SubTopic } from 'utils/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Hover, Contents, NotSelected } from 'components/Contents';
import { useTopicList } from 'hooks/useTopicList';
import { dummyQuestions } from '../utils/dummyDatas';

interface QuestionDoubleProp {
  topicId: number;
  subTopicId: number;
  questionId: number;
  questionId2: number;
  isListShown: boolean;
  isHover: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
}

export const QuestionDouble: FC<QuestionDoubleProp> = ({
  topicId,
  subTopicId,
  questionId,
  questionId2,
  isListShown,
  isHover,
  onToggle,
  onHoverIn,
  onHoverOut,
}) => {
  // eslint-disable-next-line no-console
  const history = useHistory();
  const [topicInfo, setTopicInfo] = useState<Topic>();
  const [subTopicInfo, setSubTopicInfo] = useState<SubTopic>();
  const { topicList } = useTopicList();

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

  const onCloseLeftContent = () => {
    history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId}`);
  };

  const onCloseRightContent = () => {
    history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId2}`);
  };

  return (
    <QuestionsContainer>
      <QuestionDetails>
        {topicInfo !== undefined && subTopicInfo !== undefined && (
          <QuestionList
            topic={topicInfo}
            subTopic={subTopicInfo}
            isListShown={isListShown}
            onToggle={onToggle}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
          />
        )}

        {/* {questionId === undefined && <NotSelected />} */}
        <Contents question={dummyQuestions[0]} closeThisContent={onCloseLeftContent} />
        <Contents question={dummyQuestions[1]} closeThisContent={onCloseRightContent} />
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
