import { FC } from 'react';
import styled from 'styled-components';
import { Backdrop, Box } from '@material-ui/core';
import { PageType } from 'utils/types';
import { Contents, NotSelected } from 'components/Contents';
import { SpecialQuestionList } from 'components/QuestionList';
import { useQuestionList } from 'apis/Question/useQuestionList';
import { dummyQuestions } from '../utils/dummyDatas';

interface SpecialQuestionProp {
  pageType: PageType;
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
  onCloseLeftContent?: () => void;
  onCloseRightContent?: () => void;
}

export const SpecialQuestion: FC<SpecialQuestionProp> = ({
  pageType,
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
  onCloseLeftContent,
  onCloseRightContent,
}) => {
  const { questionList } = useQuestionList();

  if (pageType === PageType.FAQ) {
    const FAQList = questionList.filter((question) => question.isFaq);
    return (
      <QuestionsContainer>
        <QuestionDetails>
          <SpecialQuestionList
            questionList={FAQList}
            title="FAQ"
            isListShown={isListShown}
            onToggle={onToggle}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onHoverInDual={onHoverInDual}
            onHoverOutDual={onHoverOutDual}
          />

          <QQBox>
            {questionId === undefined && <NotSelected />}
            {questionId !== undefined && (
              <QBox>
                <Contents question={dummyQuestions[questionId - 1]} closeThisContent={onCloseLeftContent} />
              </QBox>
            )}
            {questionId2 !== undefined && (
              <QBox>
                <Contents question={dummyQuestions[questionId2 - 1]} closeThisContent={onCloseRightContent} />
              </QBox>
            )}
          </QQBox>
        </QuestionDetails>

        {isHover && <DoubleSidedPaper open={isHover} fullsize={!isHoverDual} />}
      </QuestionsContainer>
    );
  }
  return (
    <QuestionsContainer>
      <QuestionDetails>
        <SpecialQuestionList
          questionList={questionList}
          title="ALL QUESTIONS"
          isListShown={isListShown}
          onToggle={onToggle}
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onHoverInDual={onHoverInDual}
          onHoverOutDual={onHoverOutDual}
        />

        {/* {questionId === undefined && <NotSelected />} */}

        <QQBox>
          {questionId === undefined && <NotSelected />}
          {questionId !== undefined && (
            <QBox>
              <Contents question={dummyQuestions[questionId - 1]} closeThisContent={onCloseLeftContent} />
            </QBox>
          )}
          {questionId2 !== undefined && (
            <QBox>
              <Contents question={dummyQuestions[questionId2 - 1]} closeThisContent={onCloseRightContent} />
            </QBox>
          )}
        </QQBox>
        {/* </QuestionDetails> */}
      </QuestionDetails>

      {isHover && <DoubleSidedPaper open={isHover} fullsize={!isHoverDual} />}
    </QuestionsContainer>
  );
};

const QuestionsContainer = styled(Box)`
  display: flex;
  width: 100%;
`;

const QBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const QQBox = styled(Box)`
  width: 100%;
  display: flex;
`;

const QuestionDetails = styled(Box)`
  display: flex;
  width: 100%;
`;

const DoubleSidedPaper = styled(Backdrop)<{ fullsize: boolean }>`
  position: reletive;
  ${({ fullsize }) => (fullsize ? 'left: 37vw' : 'left: 68vw')};
  z-index: 999;
`;
