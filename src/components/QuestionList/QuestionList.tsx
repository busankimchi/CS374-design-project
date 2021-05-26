import { FC } from 'react';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { Topic, SubTopic, Question } from 'utils/types';
import { H3, TRUNCATE_ONE } from 'utils/themes';
import { useGetQuestionList } from 'apis/Question/useGetQuestionList';
import { QuestionListElement } from './QuestionListElement';

interface QuestionListHeaderProp {
  topic: Topic;
  subTopic: SubTopic;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({ topic, subTopic }) => {
  // const [questionList, setQuestionList] = useState<Question[]>();
  const questionIdList = subTopic.questionList as number[];
  const { questionList } = useGetQuestionList(questionIdList);

  // useEffect(() => {
  //   if (questionIdList !== undefined) {
  //     const { questionList } = useGetQuestionList(questionIdList);
  //     setQuestionList(questionList);
  //   }
  // }, [questionIdList]);

  const renderQuestionListElement = (item: Question) => (
    <QuestionListElement question={item} topicId={topic.id} subTopicId={subTopic.id} />
  );

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
