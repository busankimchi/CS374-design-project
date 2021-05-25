import { FC } from 'react';
import styled from 'styled-components';

import { Box, Drawer, List, Divider as DefaultDivider, Typography } from '@material-ui/core';
import { Topic, SubTopic } from 'utils/types';
import { H3, GRAY, TRUNCATE_ONE } from 'utils/themes';
import { dummyTopicList } from 'utils/dummyDatas';
import { QuestionListElement } from './QuestionListElement';


interface QuestionListHeaderProp {
  topicID: number;
  subTopicID: number;
  isListShown: boolean;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({ topicID, subTopicID,isListShown }) => {
  const topicInfo = dummyTopicList.find((topic) => topic.id === topicID) as Topic;
  const subTopicInfo = (topicInfo.subTopic as SubTopic[]).find((subtopic) => subtopic.id === subTopicID) as SubTopic;
  if (isListShown) {
    return (
      <QuestionListDrawer>
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
  return (<div />);
}



const QuestionListDrawer = styled(Box)`
  /*.MuiDrawer-paperAnchorLeft {
    width: 10%;
    left: 15%;
    right: auto;
    top: 4vh;
  }
  */
 width: 15%;
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
