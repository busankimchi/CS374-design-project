import { FC, Dispatch, SetStateAction } from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Question } from 'utils/types';
import { NormalQuestionList } from 'components/QuestionList/NormalQuestionList';
import { FAQQuestionList, AllQuestionList, SearchQuestionList } from 'components/QuestionList/SpecialQuestionList';

interface MainQuestionListProps {
  setTotalQuestionList: Dispatch<SetStateAction<Question[]>>;
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  isListShown: boolean;
  onToggle?: () => void;
  onHoverIn?: () => void;
  onHoverOut?: () => void;
  onHoverInDual: () => void;
  onHoverOutDual: () => void;
}

export const MainQuestionList: FC<MainQuestionListProps> = ({
  setTotalQuestionList,
  setQuestionList,
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
          return (
            <FAQQuestionList
              setTotalQuestionList={setTotalQuestionList}
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
          return (
            <AllQuestionList
              setTotalQuestionList={setTotalQuestionList}
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
                  setTotalQuestionList={setTotalQuestionList}
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
        path="/topic/:topicId/subTopic/:subTopicId"
        render={({ match }) => {
          const { topicId, subTopicId } = match.params;

          if (!Number.isNaN(Number(topicId)) && !Number.isNaN(Number(subTopicId))) {
            return (
              <NormalQuestionList
                setTotalQuestionList={setTotalQuestionList}
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
              setTotalQuestionList={setTotalQuestionList}
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
