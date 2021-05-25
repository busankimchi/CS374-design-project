import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, Divider as DefaultDivider } from '@material-ui/core';
import { Topic, SubTopic } from 'utils/types';
import { H3, GRAY } from 'utils/themes';
import { dummyTopicList } from 'utils/dummyDatas';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListProp {
  topic: string;
  subtopic: string;
}
interface QuestionListHeaderProp {
  topicID: number;
  subTopicID: number;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({ topicID, subTopicID }) => {
  const topicInfo = dummyTopicList.find((topic) => topic.id === topicID) as Topic;
  const subTopicInfo = (topicInfo.subTopic as SubTopic[]).find((subtopic) => subtopic.id === subTopicID) as SubTopic;
  return (
    <QuestionListDrawer variant="permanent" anchor="left">
      <QuestionListHeader>
        {topicInfo.topicName} {'>'} {subTopicInfo.subTopicName}
      </QuestionListHeader>
      <Divider />
      <QuestionListDrawerBody>
        <QuestionListElement questionId={1} />
        <Divider />
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};

const QuestionListDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    width: 20%;
    left: 15%;
    right: auto;
    top: 4vh;
  }
`;
const QuestionListDrawerBody = styled(List)``;

const QuestionListHeader = styled(Box)`
  padding: 1em;
  ${H3}
`;

const Divider = styled(DefaultDivider)`
  background-color: ${GRAY};
`;
