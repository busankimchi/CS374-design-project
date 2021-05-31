/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
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

  const [isListShown, setListShown] = useState(true);
  const [isHover, setHover] = useState(false);
  const [isHoverDual, setHoverDual] = useState(false);

  const onToggle = () => setListShown(!isListShown);
  const onHoverIn = () => setHover(true);
  const onHoverOut = () => setHover(false);
  const onHoverInDual = () => setHoverDual(true);
  const onHoverOutDual = () => setHoverDual(false);

  if (pageType === PageType.FAQ || pageType === PageType.ALL_QUESTIONS || pageType === PageType.SEARCH) {
    return (
      <SpecialQuestion
        pageType={pageType}
        search={search}
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
    />
  );
};
