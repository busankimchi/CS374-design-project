import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import { PageType, Question } from 'utils/types';
import { Box } from '@material-ui/core';
import { NormalQuestion } from './NormalQuestion';
import { FAQ } from './FAQ';
import { Search } from './Search';
import { AllQuestions } from './AllQuestions';

interface QuestionDetailProp {
  pageType: PageType;
  questionList: Question[];
  topicId?: number;
  subTopicId?: number;
  questionId?: number;
  questionId2?: number;
  search?: string;
  isHover: boolean;
  isHoverDual: boolean;
}

export const QuestionDetail: FC<QuestionDetailProp> = ({
  pageType,
  questionList,
  topicId,
  subTopicId,
  questionId,
  questionId2,
  search,
  isHover,
  isHoverDual,
}) => {
  // console.log('detail!!', questionList);

  // if (pageType === PageType.FAQ) {
  //   return (
  //     <FAQ
  //       questionList={questionList}
  //       questionId={Number(questionId)}
  //       questionId2={Number(questionId2)}
  //       isHover={isHover}
  //       isHoverDual={isHoverDual}
  //     />
  //   );
  // }

  // if (pageType === PageType.ALL_QUESTIONS) {
  //   return (
  //     <AllQuestions
  //       questionList={questionList}
  //       questionId={Number(questionId)}
  //       questionId2={Number(questionId2)}
  //       isHover={isHover}
  //       isHoverDual={isHoverDual}
  //     />
  //   );
  // }

  // if (pageType === PageType.SEARCH) {
  //   return (
  //     <Search
  //       questionList={questionList}
  //       search={search}
  //       questionId={Number(questionId)}
  //       questionId2={Number(questionId2)}
  //       isHover={isHover}
  //       isHoverDual={isHoverDual}
  //     />
  //   );
  // }

  // return (
  //   <NormalQuestion
  //     questionList={questionList}
  //     topicId={Number(topicId)}
  //     subTopicId={Number(subTopicId)}
  //     questionId={Number(questionId)}
  //     questionId2={Number(questionId2)}
  //     isHover={isHover}
  //     isHoverDual={isHoverDual}
  //   />
  // );

  return (
    <QuestionDetailContainer>
      <Route
        path="/faq/:questionId"
        render={({ match, location }) => {
          const { questionId } = match.params;

          if (!Number.isNaN(Number(questionId))) {
            if (location.search !== '') {
              const searchQuery = location.search.split('=');
              const key = searchQuery[0].substr(1);
              const questionId2Query = searchQuery[1];

              if (key === 'second') {
                const questionId2 = Number(questionId2Query);
                if (!Number.isNaN(questionId2)) {
                  return (
                    <FAQ
                      questionList={questionList}
                      questionId={Number(questionId)}
                      questionId2={Number(questionId2)}
                      isHover={isHover}
                      isHoverDual={isHoverDual}
                    />
                  );
                }
              }
              // console.log('query error');
              return <FAQ questionList={questionList} isHover={isHover} isHoverDual={isHoverDual} />;
            }
            return (
              <FAQ
                questionList={questionList}
                questionId={Number(questionId)}
                isHover={isHover}
                isHoverDual={isHoverDual}
              />
            );
          }
          // console.log('query error');
          return <FAQ questionList={questionList} isHover={isHover} isHoverDual={isHoverDual} />;
        }}
      />

      <Route
        exact
        path="/all_questions/:questionId"
        render={({ match, location }) => {
          const { questionId } = match.params;

          if (!Number.isNaN(Number(questionId))) {
            if (location.search !== '') {
              const searchQuery = location.search.split('=');
              const key = searchQuery[0].substr(1);
              const questionId2Query = searchQuery[1];

              if (key === 'second') {
                const questionId2 = Number(questionId2Query);
                if (!Number.isNaN(questionId2)) {
                  return (
                    <AllQuestions
                      questionList={questionList}
                      questionId={Number(questionId)}
                      questionId2={Number(questionId2)}
                      isHover={isHover}
                      isHoverDual={isHoverDual}
                    />
                  );
                }
              }
              // console.log('query error');
              return <AllQuestions questionList={questionList} isHover={isHover} isHoverDual={isHoverDual} />;
            }
            return (
              <AllQuestions
                questionList={questionList}
                questionId={Number(questionId)}
                isHover={isHover}
                isHoverDual={isHoverDual}
              />
            );
          }
          // console.log('query error');
          return <AllQuestions questionList={questionList} isHover={isHover} isHoverDual={isHoverDual} />;
        }}
      />

      <Route
        exact
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

              if (searchQuery[1] !== undefined) {
                const firstQ = searchQuery[1].split('=');
                const firstKey = firstQ[0];
                const firstValue = firstQ[1];

                if (firstKey === 'first') {
                  // eslint-disable-next-line no-console
                  console.log('first question is', firstValue);

                  const questionId = Number(firstValue);
                  if (!Number.isNaN(questionId)) {
                    if (searchQuery[2] !== undefined) {
                      const secondQ = searchQuery[2].split('=');
                      const secondKey = secondQ[0];
                      const secondValue = secondQ[1];

                      if (secondKey === 'second') {
                        // eslint-disable-next-line no-console
                        console.log('second question is', secondValue);

                        const questionId2 = Number(secondValue);
                        if (!Number.isNaN(questionId2)) {
                          return (
                            <Search
                              questionList={questionList}
                              search={search}
                              questionId={Number(questionId)}
                              questionId2={Number(questionId2)}
                              isHover={isHover}
                              isHoverDual={isHoverDual}
                            />
                          );
                        }
                      }
                      return (
                        <Search
                          questionList={questionList}
                          search={search}
                          isHover={isHover}
                          isHoverDual={isHoverDual}
                        />
                      );
                    }
                    return (
                      <Search
                        questionList={questionList}
                        search={search}
                        questionId={Number(questionId)}
                        isHover={isHover}
                        isHoverDual={isHoverDual}
                      />
                    );
                  }
                }
                return (
                  <Search questionList={questionList} search={search} isHover={isHover} isHoverDual={isHoverDual} />
                );
              }
              return <Search questionList={questionList} search={search} isHover={isHover} isHoverDual={isHoverDual} />;
            }
          }
          // console.log('query error');
          // return <Search questionList={questionList} search={search} isHover={isHover} isHoverDual={isHoverDual} />;
          return undefined;
        }}
      />
    </QuestionDetailContainer>
  );
};

const QuestionDetailContainer = styled(Box)`
  display: flex;
  width: auto;
`;
