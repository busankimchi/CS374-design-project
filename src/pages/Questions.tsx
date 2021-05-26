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

  const history = useHistory();

  const [isListShown, setListShown] = useState(false);
  const [isHover, setHover] = useState(false);
  const [isHoverDual, setHoverDual] = useState(false);

  const [topicInfo, setTopicInfo] = useState<Topic>();
  const [subTopicInfo, setSubTopicInfo] = useState<SubTopic>();

  const { topicList } = useTopicList();
  // console.log({topicList});
  // const topicInfo = topicList.find((topic) => topic.id === topicId) as Topic;
  // console.log({topicInfo});
  // const subTopicInfo = (topicInfo.subTopic as SubTopic[]).find((subtopic) => subtopic.id === subTopicId) as SubTopic;

  useEffect(() => {
    if (topicList.length > 0) {
      const newTopicInfo = topicList.find((topic) => topic.id === topicId) as Topic;
      setTopicInfo(newTopicInfo);
    }
  }, [topicList, topicId, subTopicId]);

  useEffect(() => {
    console.log(topicInfo)
    if (topicInfo !== undefined) {
      const newSubTopicInfo = (topicInfo.subTopic as SubTopic[]).find(
        (subtopic) => subtopic.id === subTopicId,
      ) as SubTopic;
      setSubTopicInfo(newSubTopicInfo);
      console.log(subTopicInfo)
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
            onToggle={() => setListShown(!isListShown)}
            onHoverIn={() => setHover(true)}
            onHoverOut={() => setHover(false)}
            onHoverInDual={() => setHoverDual(true)}
            onHoverOutDual={() => setHoverDual(false)}
          />
        )}

        {/* {questionId === undefined && <NotSelected />} */}
        <QQBox>

          {questionId !== undefined && <QBox><Contents question={dummyQuestions[0]} closeThisContent={onCloseLeftContent} /></QBox>}


          {questionId2 !== undefined && <QBox><Contents question={dummyQuestions[1]} closeThisContent={onCloseRightContent} /></QBox>}

        </QQBox>
      </QuestionDetails>

      {isHover && <DoubleSidedPaper open={isHover} fullsize={!isHoverDual} />}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
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
`;

const DoubleSidedPaper = styled(Backdrop) <{ fullsize: boolean }>`
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw' : 'left: 50vw')};
  z-index: 999;
`;
