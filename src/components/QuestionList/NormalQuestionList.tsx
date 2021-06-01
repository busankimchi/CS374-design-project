import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';

import styled from 'styled-components';
import { Box } from '@material-ui/core';
import firebase from 'firebase';
import { Topic, SubTopic, Question, QuestionFB, QuestionContent, AnswerContent } from 'utils/types';
import { TimestampToDate } from 'utils/functions';
import { QuestionList } from 'components/QuestionList';
import { useTopicList } from 'hooks/useTopicList';

interface NormalQuestionListProp {
  setQuestionId: Dispatch<SetStateAction<number | undefined>>;
  setQuestionId2: Dispatch<SetStateAction<number | undefined>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  topicId: number;
  subTopicId: number;
  questionId?: number;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const NormalQuestionList: FC<NormalQuestionListProp> = ({
  setQuestionId,
  setQuestionId2,
  setQuestionList,
  topicId,
  subTopicId,
  questionId,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const [topicInfo, setTopicInfo] = useState<Topic>();
  const [subTopicInfo, setSubTopicInfo] = useState<SubTopic>();
  const [questionIdList, setQuestionIdList] = useState<number[]>();
  const [finalQuestionList, setFinalQuestionList] = useState<Question[]>();
  const [isLoading, setIsLoading] = useState(true);

  const { topicList } = useTopicList();

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
          setFinalQuestionList(questionListCustom);
          setIsLoading(false);
          setQuestionList(questionListCustom);
        })
        .catch();
    }
  }, [questionIdList]);

  return (
    <QuestionDetails>
      {topicInfo !== undefined && subTopicInfo !== undefined && finalQuestionList !== undefined && (
        <QuestionList
          setQuestionId={setQuestionId}
          setQuestionId2={setQuestionId2}
          isLoading={isLoading}
          topic={topicInfo}
          subTopic={subTopicInfo}
          questionList={finalQuestionList}
          questionId={questionId}
          isListShown={isListShown}
          onToggle={onToggle}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onHoverInDual={onHoverInDual}
          onHoverOutDual={onHoverOutDual}
        />
      )}
    </QuestionDetails>
  );
};

const QuestionDetails = styled(Box)`
  display: flex;
  /* width: 100%; */
  height: 100%;
`;
