/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { PageType } from 'utils/types';
import { SpecialQuestion } from './SpecialQuestion';
import { NormalQuestion } from './NormalQuestion';

interface QuestionsProp {
  pageType: PageType;
  search?: string;
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
}

export const Questions: FC<QuestionsProp> = ({ pageType, search, topicId, subTopicId, questionId, questionId2 }) => {
  // eslint-disable-next-line no-console
  console.log({ pageType, search, topicId, subTopicId, questionId, questionId2 });

  const history = useHistory();
  const [isListShown, setListShown] = useState(true);
  const [isHover, setHover] = useState(false);
  const [isHoverDual, setHoverDual] = useState(false);

  const onCloseLeftContent = () => {
    history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId}`);
  };

  const onCloseRightContent = () => {
    history.push(`/topic/${topicId}/subtopic/${subTopicId}/question/${questionId2}`);
  };

  const onToggle = () => setListShown(!isListShown);
  const onHoverIn = () => setHover(true);
  const onHoverOut = () => setHover(false);
  const onHoverInDual = () => setHoverDual(true);
  const onHoverOutDual = () => setHoverDual(false);

  if (pageType === PageType.FAQ || pageType === PageType.ALL_QUESTIONS) {
    return (
      <SpecialQuestion
        pageType={pageType}
        questionId={questionId}
        questionId2={questionId2}
        isListShown={isListShown}
        isHover={isHover}
        isHoverDual={isHoverDual}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={onHoverInDual}
        onHoverOutDual={onHoverOutDual}
        onCloseLeftContent={onCloseLeftContent}
        onCloseRightContent={onCloseRightContent}
      />
    );
  }
  return (
    <NormalQuestion
      pageType={pageType}
      topicId={topicId}
      subTopicId={subTopicId}
      questionId={questionId}
      questionId2={questionId2}
      isListShown={isListShown}
      isHover={isHover}
      isHoverDual={isHoverDual}
      onToggle={onToggle}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onHoverInDual={onHoverInDual}
      onHoverOutDual={onHoverOutDual}
      onCloseLeftContent={onCloseLeftContent}
      onCloseRightContent={onCloseRightContent}
    />
  );
};
