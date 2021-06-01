import { FC, Dispatch, SetStateAction } from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { PageType, Question } from 'utils/types';
import { FAQQuestionList } from 'components/QuestionList/FAQQuestionList';
import { AllQuestionList } from 'components/QuestionList/AllQuestionList';
import { SearchQuestionList } from 'components/QuestionList/SearchQuestionsList';
import { NormalQuestionList } from 'components/QuestionList/NormalQuestionList';

interface MainQuestionListProps {
  setQuestionId: Dispatch<SetStateAction<number | undefined>>;
  setQuestionId2: Dispatch<SetStateAction<number | undefined>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  setPageType: Dispatch<SetStateAction<PageType>>;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const MainQuestionList: FC<MainQuestionListProps> = ({
  setQuestionId,
  setQuestionId2,
  setQuestionList,
  setPageType,
  isListShown,
  onToggle,
  onHoverIn,
  onHoverOut,
  onHoverInDual,
  onHoverOutDual,
}) => {
  return (
    <MainQuestionListContainer>
      <Route exact path="/">
        <Redirect to="/faq" />
      </Route>

      <Route
        path="/faq"
        render={() => {
          setPageType(PageType.FAQ);
          return (
            <FAQQuestionList
              setQuestionId={setQuestionId}
              setQuestionId2={setQuestionId2}
              setQuestionList={setQuestionList}
              isListShown={isListShown}
              onToggle={onToggle}
              onHoverIn={onHoverIn}
              onHoverOut={onHoverOut}
              onHoverInDual={onHoverInDual}
              onHoverOutDual={onHoverOutDual}
            />
          );
        }}
      />
      <Route
        path="/all_questions"
        render={() => {
          setPageType(PageType.ALL_QUESTIONS);
          return (
            <AllQuestionList
              setQuestionId={setQuestionId}
              setQuestionId2={setQuestionId2}
              setQuestionList={setQuestionList}
              isListShown={isListShown}
              onToggle={onToggle}
              onHoverIn={onHoverIn}
              onHoverOut={onHoverOut}
              onHoverInDual={onHoverInDual}
              onHoverOutDual={onHoverOutDual}
            />
          );
        }}
      />

      <Route
        path="/search"
        render={({ location }) => {
          setPageType(PageType.SEARCH);
          if (location.search !== '') {
            const searchQuery = location.search.split('&');
            const searchPair = searchQuery[0].split('=');
            const key = searchPair[0].substr(1);
            const search = searchPair[1];
            if (key === 'q') {
              // eslint-disable-next-line no-console
              console.log('search query is', search);

              return (
                <SearchQuestionList
                  setQuestionId={setQuestionId}
                  setQuestionId2={setQuestionId2}
                  setQuestionList={setQuestionList}
                  search={search}
                  isListShown={isListShown}
                  onToggle={onToggle}
                  onHoverIn={onHoverIn}
                  onHoverOut={onHoverOut}
                  onHoverInDual={onHoverInDual}
                  onHoverOutDual={onHoverOutDual}
                />
              );
            }
          }
          return undefined;
        }}
      />

      <Route
        path="/topic/:topicId/subtopic/:subTopicId"
        render={({ match }) => {
          setPageType(PageType.NORMAL);
          const { topicId, subTopicId } = match.params;

          console.log(match.params);

          if (!Number.isNaN(Number(topicId)) && !Number.isNaN(Number(subTopicId))) {
            return (
              <NormalQuestionList
                setQuestionId={setQuestionId}
                setQuestionId2={setQuestionId2}
                setQuestionList={setQuestionList}
                topicId={Number(topicId)}
                subTopicId={Number(subTopicId)}
                isListShown={isListShown}
                onToggle={onToggle}
                onHoverIn={onHoverIn}
                onHoverOut={onHoverOut}
                onHoverInDual={onHoverInDual}
                onHoverOutDual={onHoverOutDual}
              />
            );
          }
          // eslint-disable-next-line no-console
          console.log('query error');
          return (
            <NormalQuestionList
              setQuestionId={setQuestionId}
              setQuestionId2={setQuestionId2}
              setQuestionList={setQuestionList}
              topicId={Number(topicId)}
              subTopicId={Number(subTopicId)}
              isListShown={isListShown}
              onToggle={onToggle}
              onHoverIn={onHoverIn}
              onHoverOut={onHoverOut}
              onHoverInDual={onHoverInDual}
              onHoverOutDual={onHoverOutDual}
            />
          );
        }}
      />
    </MainQuestionListContainer>
  );
};

const MainQuestionListContainer = styled(Box)`
  display: flex;
  width: fit-content;
  height: 96vh;
`;
