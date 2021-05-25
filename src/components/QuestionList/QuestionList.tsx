import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Drawer, Box, List, Typography } from '@material-ui/core';
import { Topic, SubTopic, Question } from 'utils/types';
import { H3, TRUNCATE_ONE } from 'utils/themes';
import { useGetQuestionList } from 'apis/Question/useGetQuestionList';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListHeaderProp {
  topic: Topic;
  subTopic: SubTopic;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({ topic, subTopic }) => {
  const [questionList, setQuestionList] = useState<Question[]>();
  const questionIdList = subTopic.questionList as number[];
  console.log('questionlist', {questionIdList, subTopic});

  useEffect(()=> {
    if (questionIdList !== undefined) {
      const { questionList } = useGetQuestionList(questionIdList);
      console.log('CHANGE!', {setQuestionList});
      setQuestionList(questionList);
    }
  }, [questionIdList]);

  

  console.log('QuestionList ::::', subTopic);

  const renderQuestionListElement = (item: Question) => <QuestionListElement question={item} />;

  return (
    <QuestionListDrawer variant="permanent" anchor="left">
      <QuestionListHeader>
        <QuestionListHeaderText>
          {topic.topicName} {'>'} {subTopic.subTopicName}
        </QuestionListHeaderText>
      </QuestionListHeader>
      <QuestionListDrawerBody>
        { questionList !== undefined && (questionList.map((item) => renderQuestionListElement(item)))}
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
