import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Question } from 'utils/types';
import { BaseQuestionContainer } from 'components/Contents';
import { useLocation } from 'react-router-dom';

interface SearchProp {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isHover: boolean;
  isHoverDual: boolean;
}

export const Search: FC<SearchProp> = ({ questionList, setQuestionList, isHover, isHoverDual }) => {
  const history = useHistory();
  const location = useLocation();

  const [questionId, setQuestionId] = useState<number | undefined>();
  const [questionId2, setQuestionId2] = useState<number | undefined>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const searchQuery = location.search.split('&');
    const searchPair = searchQuery[0].split('=');
    const key = searchPair[0].substr(1);
    const search = searchPair[1];

    if (key === 'q') {
      // eslint-disable-next-line no-console
      console.log('search query is', search);

      if (searchQuery[1] !== undefined) {
        const firstQ = searchQuery[1].split('=');
        const firstKey = firstQ[0];
        const firstValue = firstQ[1];

        if (firstKey === 'first') {
          const qId = Number(firstValue);

          if (!Number.isNaN(qId)) {
            if (searchQuery[2] !== undefined) {
              const secondQ = searchQuery[2].split('=');
              const secondKey = secondQ[0];
              const secondValue = secondQ[1];

              if (secondKey === 'second') {
                const qId2 = Number(secondValue);
                if (!Number.isNaN(qId2)) {
                  setSearch(search);
                  setQuestionId(qId);
                  setQuestionId2(qId2);
                  return;
                }
              }
            }
            setSearch(search);
            setQuestionId(qId);
            setQuestionId2(undefined);
            return;
          }
        }
      }
      setSearch(search);
      setQuestionId(undefined);
      setQuestionId2(undefined);
    }
  }, [location]);

  const onCloseLeftContent = () => {
    if (questionId2 !== undefined) {
      history.push(`/search?q=${search}&first=${questionId2}`);
    } else {
      history.push(`/search?q=${search}`);
    }
  };

  const onCloseRightContent = () => {
    if (questionId !== undefined) {
      history.push(`/search?q=${search}&first=${questionId}`);
    } else {
      history.push(`/search?q=${search}`);
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
