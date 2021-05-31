import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import { Box, List, Typography } from '@material-ui/core';
import { H3, TRUNCATE_ONE, LIGHT_GRAY_1 } from 'utils/themes';
import firebase from 'firebase';
import { Topic, SubTopic, Question, QuestionFB, AnswerContent, QuestionContent } from 'utils/types';
import { TimestampToDate } from 'utils/functions';
import { Hover } from 'components/Contents';
import { QuestionListElement } from './QuestionListElement';
import { Loading } from '../General/Loading'

interface QuestionListHeaderProp {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  topic: Topic;
  subTopic: SubTopic;
  isListShown: boolean;
  questionId?: number;
  questionId2?: number;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const QuestionList: FC<QuestionListHeaderProp> = ({
  isLoading,
  setIsLoading,
  topic,
  subTopic,
  isListShown,
  questionId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  questionId2,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [questionIdList, setQuestionIdList] = useState<number[]>(subTopic.questionList as number[]);
  const [questionList, setQuestionList] = useState<Question[]>();

  // setQuestionIdList(subTopic.questionList as number[]);
  useEffect(() => {
    setQuestionIdList(subTopic.questionList as number[]);
  }, [subTopic]);

  useEffect(() => {
    if (questionIdList !== undefined) {
      setIsLoading(true);
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
          setIsLoading(false);
        })
        .catch();
    }
  }, [questionIdList]);

  const onClickItem = (item: Question) => {
    const path = location.pathname;
    history.push(`${path}?second=${item.questionId}`);
  };

  const renderQuestionListElement = (item: Question) => (
    <QuestionListElement
      question={item}
      topicId={topic.id}
      subTopicId={subTopic.id}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      dualDisable={questionId === undefined}
      onClickItem={onClickItem}
    />
  );

  const drawerBody = (questionList === undefined || isLoading) ? <Loading /> : questionList.map((item) => renderQuestionListElement(item));

  return (
    <QuestionListContainer>
      <QuestionListDrawer isListShown={isListShown}>
        <QuestionListHeader>
          <QuestionListHeaderText>
            {topic.topicName} {'>'} {subTopic.subTopicName}
          </QuestionListHeaderText>
        </QuestionListHeader>
        <QuestionListDrawerBody>
          {drawerBody}
        </QuestionListDrawerBody>
      </QuestionListDrawer>

      <Hover showQuestionList={onToggle} iconFlip={isListShown} />
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled(Box)`
  display: flex;
  height: 100%;
`;

const QuestionListDrawer = styled(Box) <{ isListShown: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isListShown }) => (isListShown ? '20vw' : '0vw')};
  height: 100%;
  ${({ isListShown }) => !isListShown && 'display: none;'}
  transition: all 0.15s ease-in-out !important;
`;

const QuestionListDrawerBody = styled(List)`
  overflow-y: scroll;
  padding: 0;

  ::-webkit-scrollbar {
    display: none;
  }
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
