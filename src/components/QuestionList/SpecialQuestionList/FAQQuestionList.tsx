import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { useQuestionList } from 'hooks';
import { SpecialQuestionList } from './SpecialQuestionList';

interface FAQQuestionListProps {
  setTotalQuestionList: Dispatch<SetStateAction<Question[]>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const FAQQuestionList: FC<FAQQuestionListProps> = ({
  setTotalQuestionList,
  setQuestionList,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const { questionList } = useQuestionList(setIsLoading);
  const FAQList = questionList.filter((question) => question.isFaq);

  const onClickItemDual = (item: Question) => {
    const { pathname, search } = location;

    const searchQuery = search.split('&');

    if (searchQuery[1] !== undefined) {
      history.push(`${pathname}${searchQuery[0]}&second=${item.questionId}`);
      return;
    }
    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  useEffect(() => {
    setQuestionList(FAQList);
    setTotalQuestionList(questionList);
  }, [questionList]);

  return (
    <QuestionDetails>
      <SpecialQuestionList
        isLoading={isLoading}
        questionList={FAQList}
        title="FAQ"
        itemLink={(item) => `/faq?first=${item.questionId}`}
        isListShown={isListShown}
        onToggle={onToggle}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onHoverInDual={onHoverInDual}
        onHoverOutDual={onHoverOutDual}
        onClickItemDual={onClickItemDual}
      />
    </QuestionDetails>
  );
};

const QuestionDetails = styled(Box)`
  display: flex;
  height: 100%;
`;
