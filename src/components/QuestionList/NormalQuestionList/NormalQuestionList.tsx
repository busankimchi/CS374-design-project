import { FC, useEffect, useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Topic, SubTopic, Question } from 'utils/types';
import { useTopicList, useQuestionList } from 'hooks';
import { QuestionList } from './QuestionList';

interface NormalQuestionListProp {
  setTotalQuestionList: Dispatch<SetStateAction<Question[]>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  topicId: number;
  subTopicId: number;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const NormalQuestionList: FC<NormalQuestionListProp> = ({
  setTotalQuestionList,
  setQuestionList,
  topicId,
  subTopicId,
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
  const [normalList, setNormalList] = useState<Question[]>();
  const [isLoading, setIsLoading] = useState(true);
  const { questionList } = useQuestionList(setIsLoading);
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

  useEffect(() => {
    if (subTopicInfo !== undefined) {
      setQuestionIdList(subTopicInfo.questionList as number[]);
    }
  }, [subTopicInfo]);

  /** Get Question list */

  useEffect(() => {
    setTotalQuestionList(questionList);
  }, [questionList]);

  useEffect(() => {
    if (questionIdList !== undefined) {
      const newNormalList = questionList.filter((item) => questionIdList.includes(item.questionId));
      setQuestionList(newNormalList);
      setNormalList(newNormalList);
    }
  }, [questionIdList]);

  return (
    <QuestionDetails>
      {topicInfo !== undefined && subTopicInfo !== undefined && (
        <QuestionList
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          topic={topicInfo}
          subTopic={subTopicInfo}
          questionList={normalList}
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
