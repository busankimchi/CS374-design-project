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

interface QuestionNormalProp {
  topicId: number;
  subTopicId: number;
  questionId?: number;
  isListShown: boolean;
  isHover: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual?: () => void;
  onHoverOutDual?: () => void;
}

export const QuestionNormal: FC<QuestionNormalProp> = ({
  topicId,
  subTopicId,
  questionId,
  isListShown,
  isHover,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
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

  const onCloseContent = () => {
    history.push(`/topic/${topicId}/subtopic/${subTopicId}`);
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
        {questionId !== undefined && <Contents question={dummyQuestions[0]} closeThisContent={onCloseContent} />}
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
