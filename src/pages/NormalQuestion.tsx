import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Question } from 'utils/types';
import { BaseQuestionContainer } from 'components/Contents';
import { useLocation } from 'react-router-dom';

interface NormalQuestionProp {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  topicId?: number;
  subTopicId?: number;
  isHover: boolean;
  isHoverDual: boolean;
}

export const NormalQuestion: FC<NormalQuestionProp> = ({
  questionList,
  setQuestionList,
  topicId,
  subTopicId,
  isHover,
  isHoverDual,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [questionId, setQuestionId] = useState<number | undefined>();
  const [questionId2, setQuestionId2] = useState<number | undefined>();

  useEffect(() => {
    const searchQuery = location.search.split('&');

    const firstPair = searchQuery[0].split('=');
    const firstKey = firstPair[0].substr(1);
    const firstValue = firstPair[1];

    if (firstKey === 'first') {
      const qId = Number(firstValue);

      if (!Number.isNaN(qId)) {
        if (searchQuery[1] !== undefined) {
          const secondPair = searchQuery[1].split('=');
          const secondKey = secondPair[0];
          const secondValue = secondPair[1];

          if (secondKey === 'second') {
            const qId2 = Number(secondValue);
            if (!Number.isNaN(qId2)) {
              setQuestionId(qId);
              setQuestionId2(qId2);
              return;
            }
          }
        }
        setQuestionId(qId);
        setQuestionId2(undefined);
        return;
      }
    }
    setQuestionId(undefined);
    setQuestionId2(undefined);
  }, [location]);

  const onCloseLeftContent = () => {
    if (questionId2 !== undefined) {
      history.push(`/topic/${topicId}/subTopic/${subTopicId}?first=${questionId2}`);
    } else {
      history.push(`/topic/${topicId}/subTopic/${subTopicId}`);
    }
  };

  const onCloseRightContent = () => {
    if (questionId !== undefined) {
      history.push(`/topic/${topicId}/subTopic/${subTopicId}?first=${questionId}`);
    } else {
      history.push(`/topic/${topicId}/subTopic/${subTopicId}`);
    }
  };

  return (
    <BaseQuestionContainer
      questionList={questionList}
      setQuestionList={setQuestionList}
      questionId={questionId}
      questionId2={questionId2}
      isHover={isHover}
      isHoverDual={isHoverDual}
      onCloseLeftContent={onCloseLeftContent}
      onCloseRightContent={onCloseRightContent}
    />
  );
};
