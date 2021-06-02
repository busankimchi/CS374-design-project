import { FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { PageType, Question } from 'utils/types';
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
  currQ: Question | undefined;
  currQ2: Question | undefined;
  changeCurrQ: (question: Question | undefined) => void;
  changeCurrQ2: (question2: Question | undefined) => void;
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
  currQ,
  currQ2,
  changeCurrQ,
  changeCurrQ2,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { questionList, setQuestionList } = useQuestionList(setIsLoading);

  const [question1, setQuestion1] = useState<Question>();
  const [question2, setQuestion2] = useState<Question>();

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

  if (pageType === PageType.FAQ) {
    const FAQList = questionList.filter((question) => question.isFaq);

    const onCloseLeftContent = () => {
      changeCurrQ2(undefined);
      if (questionId2 !== undefined) {
        changeCurrQ(question2);
        history.push(`/faq/${questionId2}`);
      } else {
        changeCurrQ(undefined);
        history.push(`/faq`);
      }
    };

    const onCloseRightContent = () => {
      changeCurrQ2(undefined);
      if (questionId !== undefined) {
        history.push(`/faq/${questionId}`);
      } else {
        changeCurrQ(undefined);
        history.push(`/faq`);
      }
    };

    const onClickItemDual = (item: Question) => {
      const { pathname } = location;
      history.push(`${pathname}?second=${item.questionId}`);
    };

    return (
      <BaseSpecialQuestion
        isLoading={isLoading}
        questionList={FAQList}
        allQuestionList={questionList}
        setQuestionList={setQuestionList}
        title="FAQ"
        itemLink={(item) => `/faq/${item.questionId}`}
        isListShown={isListShown}
        isHover={isHover}
        isHoverDual={isHoverDual}
        questionId={questionId}
        questionId2={questionId2}
        question1={question1}
        question2={question2}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={onHoverInDual}
        onHoverOutDual={onHoverOutDual}
        onCloseLeftContent={onCloseLeftContent}
        onCloseRightContent={onCloseRightContent}
        onClickItemDual={onClickItemDual}
        currQ={currQ}
        currQ2={currQ2}
        changeCurrQ={changeCurrQ}
        changeCurrQ2={changeCurrQ2}
        setQuestion1={setQuestion1}
        setQuestion2={setQuestion2}
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
      changeCurrQ2(undefined);
      if (questionId2 !== undefined) {
        changeCurrQ(question2);
        history.push(`/search?q=${search}&first=${questionId2}`);
      } else {
        changeCurrQ(undefined);
        history.push(`/search?q=${search}`);
      }
    };

    const onCloseRightContent = () => {
      changeCurrQ2(undefined);
      if (questionId !== undefined) {
        history.push(`/search?q=${search}&first=${questionId}`);
      } else {
        changeCurrQ(undefined);
        history.push(`/search?q=${search}`);
      }
    };

    const onClickItemDual = (item: Question) => {
      const { pathname, search } = location;
      history.push(`${pathname}${search}&second=${item.questionId}`);
    };

    return (
      <BaseSpecialQuestion
        isLoading={isLoading}
        questionList={searchList}
        allQuestionList={questionList}
        setQuestionList={setQuestionList}
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
        onClickItemDual={onClickItemDual}
        currQ={currQ}
        currQ2={currQ2}
        changeCurrQ={changeCurrQ}
        changeCurrQ2={changeCurrQ2}
        setQuestion1={setQuestion1}
        setQuestion2={setQuestion2}
      />
    );
  }

  const onCloseLeftContent = () => {
    changeCurrQ2(undefined);
    if (questionId2 !== undefined) {
      changeCurrQ(question2);
      history.push(`/all_questions/${questionId2}`);
    } else {
      changeCurrQ(undefined);
      history.push(`/all_questions`);
    }
  };

  const onCloseRightContent = () => {
    changeCurrQ2(undefined);
    if (questionId !== undefined) {
      history.push(`/all_questions/${questionId}`);
    } else {
      changeCurrQ(undefined);
      history.push(`/all_questions`);
    }
  };

  const onClickItemDual = (item: Question) => {
    const { pathname } = location;

    history.push(`${pathname}?second=${item.questionId}`);
  };

  return (
    <BaseSpecialQuestion
      isLoading={isLoading}
      questionList={questionList}
      allQuestionList={questionList}
      setQuestionList={setQuestionList}
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
      onClickItemDual={onClickItemDual}
      currQ={currQ}
      currQ2={currQ2}
      changeCurrQ={changeCurrQ}
      changeCurrQ2={changeCurrQ2}
      setQuestion1={setQuestion1}
      setQuestion2={setQuestion2}
    />
  );
};
