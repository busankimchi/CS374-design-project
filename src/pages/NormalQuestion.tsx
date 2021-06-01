/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Backdrop, Box, Fade, Paper } from '@material-ui/core';
import firebase from 'firebase';
import { PageType, Topic, SubTopic, Question, QuestionFB, QuestionContent, AnswerContent } from 'utils/types';
import { TimestampToDate } from 'utils/functions';
import { QuestionList } from 'components/QuestionList/QuestionList';
import { Hover, Contents, NotSelected } from 'components/Contents';
import { useTopicList } from 'hooks/useTopicList';
import { useQuestionList } from 'apis/Question/useQuestionList';
import { Loading } from 'components/General/Loading'

interface NormalQuestionProp {
  pageType: PageType;
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
  isListShown: boolean;
  isHover: boolean;
  isHoverDual: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const NormalQuestion: FC<NormalQuestionProp> = ({

  pageType,
  topicId,
  subTopicId,
  questionId,
  questionId2,
  isListShown,
  isHover,
  isHoverDual,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const [topicInfo, setTopicInfo] = useState<Topic>();
  const [subTopicInfo, setSubTopicInfo] = useState<SubTopic>();
  const [questionIdList, setQuestionIdList] = useState<number[]>();
  const [questionList, setQuestionList] = useState<Question[]>();
  const [question1, setQuestion1] = useState<Question>();
  const [question2, setQuestion2] = useState<Question>();
  const [isLoading, setIsLoading] = useState(true);

  const { topicList } = useTopicList();
  const history = useHistory();

  /** Close questions */

  const onCloseLeftContent = () => {
    if (questionId2 !== undefined) {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId2}`);
    } else {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}`);
    }
  };

  const onCloseRightContent = () => {
    if (questionId !== undefined) {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId}`);
    } else {
      history.push(`/topic/${topicId}/subtopic/${subTopicId}`);
    }
  };

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

  /** Get Question list */

  useEffect(() => {
    if (subTopicInfo !== undefined) {
      setQuestionIdList(subTopicInfo.questionList as number[]);
    }
  }, [subTopicInfo]);

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

  useEffect(() => {
    if (questionList !== undefined) {
      setQuestion1(questionList.find((question) => question.questionId === questionId));
    }
  }, [questionList, questionId]);

  useEffect(() => {
    if (questionList !== undefined) {
      setQuestion2(questionList.find((question) => question.questionId === questionId2));
    }
  }, [questionList, questionId2]);

  return (
    <QuestionsContainer>
      <QuestionDetails>
        <QuestionList
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          topic={topicInfo}
          subTopic={subTopicInfo}
          questionList={questionList}
          questionId={questionId}
          questionId2={questionId2}
          isListShown={isListShown}
          onToggle={onToggle}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onHoverInDual={onHoverInDual}
          onHoverOutDual={onHoverOutDual}
        />

        <QQBox>
          {questionId === undefined && <NotSelected />}
          {questionId !== undefined && (
            <QBox>
              {questionList !== undefined && question1 !== undefined && (
                <Contents question={question1} closeThisContent={onCloseLeftContent} />
              )}
            </QBox>
          )}
          {questionId2 !== undefined && (
            <QBox>
              {questionList !== undefined && question2 !== undefined && (
                <Contents question={question2} closeThisContent={onCloseRightContent} />
              )}
            </QBox>
          )}
        </QQBox>
      </QuestionDetails>

      {isHover && <DoubleSidedPaper open={isHover} fullsize={!isHoverDual} />}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 96vh;
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
  width: 100%;
  height: 100%;
`;

const DoubleSidedPaper = styled(Backdrop) <{ fullsize: boolean }>`
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw' : 'left: 68vw')} !important;
  z-index: 999;
`;
