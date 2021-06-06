import { FC, Dispatch, SetStateAction } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Question } from 'utils/types';
import { Box } from '@material-ui/core';
import { FAQ } from './FAQ';
import { Search } from './Search';
import { AllQuestions } from './AllQuestions';
import { NormalQuestion } from './NormalQuestion';

interface QuestionDetailProp {
  questionList: Question[];
  setQuestionList: Dispatch<SetStateAction<Question[]>>;
  question1: Question | undefined;
  question2: Question | undefined;
  setQuestion1: Dispatch<SetStateAction<Question | undefined>>;
  setQuestion2: Dispatch<SetStateAction<Question | undefined>>;
  isHover: boolean;
  isHoverDual: boolean;
}

export const QuestionDetail: FC<QuestionDetailProp> = ({
  questionList,
  setQuestionList,
  question1,
  question2,
  setQuestion1,
  setQuestion2,
  isHover,
  isHoverDual,
}) => {
  return (
    <QuestionDetailContainer>
      <Route
        path="/faq"
        render={() => (
          <FAQ
            questionList={questionList}
            setQuestionList={setQuestionList}
            question1={question1}
            question2={question2}
            setQuestion1={setQuestion1}
            setQuestion2={setQuestion2}
            isHover={isHover}
            isHoverDual={isHoverDual}
          />
        )}
      />

      <Route
        exact
        path="/all_questions"
        render={() => (
          <AllQuestions
            questionList={questionList}
            setQuestionList={setQuestionList}
            question1={question1}
            question2={question2}
            setQuestion1={setQuestion1}
            setQuestion2={setQuestion2}
            isHover={isHover}
            isHoverDual={isHoverDual}
          />
        )}
      />

      <Route
        exact
        path="/search"
        render={() => (
          <Search
            questionList={questionList}
            setQuestionList={setQuestionList}
            question1={question1}
            question2={question2}
            setQuestion1={setQuestion1}
            setQuestion2={setQuestion2}
            isHover={isHover}
            isHoverDual={isHoverDual}
          />
        )}
      />
      <Route
        path="/topic/:topicId/subTopic/:subTopicId"
        render={({ match }) => {
          const { topicId, subTopicId } = match.params;
          const topicIdNum = Number(topicId);
          const subTopicIdNum = Number(subTopicId);

          if (!Number.isNaN(topicIdNum) && !Number.isNaN(subTopicIdNum)) {
            return (
              <NormalQuestion
                questionList={questionList}
                setQuestionList={setQuestionList}
                question1={question1}
                question2={question2}
                setQuestion1={setQuestion1}
                setQuestion2={setQuestion2}
                topicId={topicIdNum}
                subTopicId={subTopicIdNum}
                isHover={isHover}
                isHoverDual={isHoverDual}
              />
            );
          }
          return undefined;
        }}
      />
    </QuestionDetailContainer>
  );
};

const QuestionDetailContainer = styled(Box)`
  display: flex;
  width: 100%;
`;
