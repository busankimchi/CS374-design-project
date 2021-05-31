import { FC } from 'react';
import { useHistory } from 'react-router';
import { PageType } from 'utils/types';
import { useQuestionList } from 'apis/Question/useQuestionList';
import { BaseSpecialQuestion } from 'components/General/BaseSpecialQuestion';

interface SpecialQuestionProp {
  pageType: PageType;
  search?: string;
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

export const SpecialQuestion: FC<SpecialQuestionProp> = ({
  pageType,
  search,
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
  const { questionList } = useQuestionList();

  const history = useHistory();

  if (pageType === PageType.FAQ) {
    const FAQList = questionList.filter((question) => question.isFaq);

    const onCloseLeftContent = () => {
      history.push(`/faq/${questionId}`);
    };

    const onCloseRightContent = () => {
      history.push(`/faq/${questionId2}`);
    };

    return (
      <BaseSpecialQuestion
        questionList={FAQList}
        title="FAQ"
        itemLink={(item) => `/faq/${item.questionId}`}
        isListShown={isListShown}
        isHover={isHover}
        isHoverDual={isHoverDual}
        questionId={questionId}
        questionId2={questionId2}
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
  if (pageType === PageType.SEARCH) {
    const searchList = questionList.filter((item) => {
      const { question, answers } = item;

      const contentHas = question.content.includes(search as string);
      const titleHas = question.title.includes(search as string);
      const answerHas = answers
        .map((ans) => ans.content.includes(search as string))
        .reduce((prev, next) => prev || next, false);

      return contentHas || titleHas || answerHas;
    });

    const onCloseLeftContent = () => {
      history.push(`/search?q=${search}&first=${questionId}`);
    };

    const onCloseRightContent = () => {
      history.push(`/search?q=${search}&first=${questionId2}`);
    };

    return (
      <BaseSpecialQuestion
        questionList={searchList}
        title="SEARCH RESULT"
        itemLink={(item) => `/search?q=${search}&first=${item.questionId}`}
        isListShown={isListShown}
        isHover={isHover}
        isHoverDual={isHoverDual}
        questionId={questionId}
        questionId2={questionId2}
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

  const onCloseLeftContent = () => {
    history.push(`/all_questions/${questionId}`);
  };

  const onCloseRightContent = () => {
    history.push(`/all_questions/${questionId2}`);
  };

  return (
    <BaseSpecialQuestion
      questionList={questionList}
      title="ALL QUESTIONS"
      itemLink={(item) => `/all_questions/${item.questionId}`}
      isListShown={isListShown}
      isHover={isHover}
      isHoverDual={isHoverDual}
      questionId={questionId}
      questionId2={questionId2}
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
