import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, Divider as DefaultDivider, Typography } from '@material-ui/core';
import { Topic, SubTopic, Question } from 'utils/types';
import { H3, GRAY, TRUNCATE_ONE } from 'utils/themes';
import { dummyTopics } from 'utils/dummyDatas';
import { useGetQuestionList } from 'apis/Question/useGetQuestionList';
import { QuestionListElement } from './QuestionListElement';


interface QuestionListHeaderProp {
  topic: Topic;
  subTopic: SubTopic;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({ topic, subTopic }) => {
  const [questionList, setQuestionList] = useState<Question[]>();
  const questionIdList = subTopic.questionList as number[];

  useEffect(() => {
    if (questionIdList !== undefined) {
      const { questionList } = useGetQuestionList(questionIdList);
      setQuestionList(questionList);
    }
  }, [questionIdList]);


  const renderQuestionListElement = (item: Question) => <QuestionListElement question={item} />;

  return (
    <QuestionListDrawer>
      <QuestionListHeader>
        <QuestionListHeaderText>
          {topic.topicName} {'>'} {subTopic.subTopicName}
        </QuestionListHeaderText>
      </QuestionListHeader>
      <QuestionListDrawerBody>
        {questionList !== undefined && questionList.map((item) => renderQuestionListElement(item))}
      </QuestionListDrawerBody>
    </QuestionListDrawer>
  );
};

const QuestionListDrawer = styled(Box)`
  .MuiDrawer-paperAnchorLeft {
    width: 10%;
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
