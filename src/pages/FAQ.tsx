import { FC } from 'react';
import { useHistory } from 'react-router';
import { Question } from 'utils/types';
import { BaseQuestionContainer } from 'components/General';

interface FAQProp {
  questionList: Question[];
  questionId?: number;
  questionId2?: number;
  isHover: boolean;
  isHoverDual: boolean;
}

export const FAQ: FC<FAQProp> = ({ questionList, questionId, questionId2, isHover, isHoverDual }) => {
  const history = useHistory();

  const onCloseLeftContent = () => {
    if (questionId2 !== undefined) {
      history.push(`/faq/${questionId2}`);
    } else {
      history.push(`/faq`);
    }
  };

  const onCloseRightContent = () => {
    if (questionId !== undefined) {
      history.push(`/faq/${questionId}`);
    } else {
      history.push(`/faq`);
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
