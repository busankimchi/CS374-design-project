import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType, Topic, SubTopic } from 'utils/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QuestionList } from 'components/QuestionList/QuestionList';
import { useTopicList } from 'hooks/useTopicList';
import { Contents } from '../components/Contents/Contents';
// import { NotSelected } from '../components/Contents/NotSelected';
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
  // pageType == None? 잘못된 url.
  // normal? questionId주어진경우,아닌경우
  // topic, subtopic가지고 fetch를 해. subtopicID에 대응되어있는 questionlists를
  // questionId가 있다면 questionid를 찾아서 contents.tsx를 함께 띄워준다.

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
    if (topicInfo !== undefined) {
      const newSubTopicInfo = (topicInfo.subTopic as SubTopic[]).find(
        (subtopic) => subtopic.id === subTopicId,
      ) as SubTopic;
      setSubTopicInfo(newSubTopicInfo);
    }
  }, [topicInfo, topicId, subTopicId]);

  // console.log({topicInfo, subTopicInfo});

  return (
    <QuestionsContainer>
      {topicInfo !== undefined && subTopicInfo !== undefined && (
        <QuestionList topic={topicInfo} subTopic={subTopicInfo} />
      )}
      <Contents question={dummyQuestions[0]} />
      {/* <NotSelected /> */}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
`;
