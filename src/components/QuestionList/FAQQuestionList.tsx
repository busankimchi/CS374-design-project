import { FC, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { SpecialQuestionList } from 'components/QuestionList';
import { useQuestionList } from 'apis/Question/useQuestionList';

interface FAQQuestionListProps {
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const FAQQuestionList: FC<FAQQuestionListProps> = ({
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
    history.push(`${pathname}${search}&second=${item.questionId}`);
  };

  useEffect(() => {
    setQuestionList(FAQList);
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
