import { FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
import firebase from 'firebase';
import { Topic, SubTopic, Question, QuestionFB, AnswerContent, QuestionContent } from 'utils/types';
import { TimestampToDate } from 'utils/functions';
import { Hover } from 'components/Contents';
import { QuestionListElement } from './QuestionListElement';


interface QuestionListHeaderProp {
  topic: Topic;
  subTopic: SubTopic;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({
  topic,
  subTopic,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  // const questionIdList = subTopic.questionList as number[];
  // // const { questionList, setQuestionList } = useGetQuestionList(questionIdList);
  // const [questionList, setQuestionList] = useState(getQuestionList(questionIdList).then((val) => { return val }));

  const history = useHistory();
  const location = useLocation();
  const questionIdList = useState(subTopic.questionList as number[])[0];
  const [questionList, setQuestionList] = useState<Question[]>();

  useEffect(() => {
    if (questionIdList !== undefined) {
      firebase
        .firestore()
        .collection('questions')
        .get()
        .then((doc) => {
          const questionListCustom = [] as Question[];
          doc.docs.filter((item) => {
            const { question, answers, ...rest } = item.data() as QuestionFB;
            const questionContent = { ...question, time: TimestampToDate(question.time) } as QuestionContent;
            const answerContents = answers.map(
              (item) => ({ ...item, time: TimestampToDate(item.time) } as AnswerContent),
            );

            const finalQuestion = { question: questionContent, answers: answerContents, ...rest } as Question;

            if (questionIdList.includes(finalQuestion.questionId)) {
              questionListCustom.push(finalQuestion);
            }

            return finalQuestion;
          });
          questionListCustom.sort((a, b) => b.questionId - a.questionId);
          setQuestionList(questionListCustom);
        })
        .catch();
    }
  }, [questionIdList]);

  const onClickItem = (item: Question) => {
    const path = location.pathname;
    history.push(`${path}?second=${item.questionId}`)
  }

  const renderQuestionListElement = (item: Question) => (
    <QuestionListElement
      question={item}
      topicId={topic.id}
      subTopicId={subTopic.id}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      onClickItem={onClickItem}
    />
  );

  return (
    <QuestionListContainer>
      <QuestionListDrawer isListShown={isListShown}>
        <QuestionListHeader>
          <QuestionListHeaderText>
            {topic.topicName} {'>'} {subTopic.subTopicName}
          </QuestionListHeaderText>
        </QuestionListHeader>
        <QuestionListDrawerBody>
          {questionList !== undefined && questionList.map((item) => renderQuestionListElement(item))}
        </QuestionListDrawerBody>
      </QuestionListDrawer>

      <Hover showQuestionList={onToggle} iconFlip={isListShown} />
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled(Box)`
  display: flex;
`;

const QuestionListDrawer = styled(Box) <{ isListShown: boolean }>`
  width: ${({ isListShown }) => (isListShown ? '20vw' : '0vw')};
  ${({ isListShown }) => !isListShown && 'display: none;'}
  transition: all 0.15s ease-in-out !important;
`;

const QuestionListDrawerBody = styled(List)`
  scroll-y: scroll;
  padding: 0;
`;

const QuestionListHeader = styled(Box)`
  padding: 1em;
  border-bottom: solid;
  border-width: 2px;
  border-bottom-color: ${LIGHT_GRAY_1};
`;

const QuestionListHeaderText = styled(Typography)`
  ${H3};
  ${TRUNCATE_ONE};
`;
