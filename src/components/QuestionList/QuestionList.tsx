import { FC } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, Divider as DefaultDivider, Typography } from '@material-ui/core';
import { Topic, SubTopic } from 'utils/types';
import { H3, GRAY, TRUNCATE_ONE } from 'utils/themes';
import { dummyTopics } from 'utils/dummyDatas';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListHeaderProp {
  topicID: number;
  subTopicID: number;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({ topicID, subTopicID }) => {
  const topicInfo = dummyTopics.find((topic) => topic.id === topicID) as Topic;
  const subTopicInfo = (topicInfo.subTopic as SubTopic[]).find((subtopic) => subtopic.id === subTopicID) as SubTopic;
  return (
    <QuestionListDrawer variant="permanent" anchor="left">
      <QuestionListHeader>
        <QuestionListHeaderText>
          {topicInfo.topicName} {'>'} {subTopicInfo.subTopicName}
        </QuestionListHeaderText>
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
const QuestionListDrawerBody = styled(List)`
  padding: 0;
`;

const QuestionListHeader = styled(Box)`
  padding: 1em;
`;

const QuestionListHeaderText = styled(Typography)`
  ${H3};
  ${TRUNCATE_ONE};
`;

const Divider = styled(DefaultDivider)`
  background-color: ${GRAY};
`;
