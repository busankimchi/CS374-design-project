import { FC } from 'react';
import { useHistory } from 'react-router';
import { Question } from 'utils/types';
import { BaseQuestionContainer } from 'components/General';

interface NormalQuestionProp {
  questionList: Question[];
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
  isHover: boolean;
  isHoverDual: boolean;
}

export const NormalQuestion: FC<NormalQuestionProp> = ({
  questionList,
  topicId,
  subTopicId,
  questionId,
  questionId2,
  isHover,
  isHoverDual,
}) => {
  const history = useHistory();

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

  return (
    <BaseQuestionContainer
      questionList={questionList}
      questionId={questionId}
      questionId2={questionId2}
      isHover={isHover}
      isHoverDual={isHoverDual}
      onCloseLeftContent={onCloseLeftContent}
      onCloseRightContent={onCloseRightContent}
    />
  );
};
