import { FC, useState } from 'react';
import styled from 'styled-components';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Breadcrumbs, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { UserInfo } from './UserInfo'
import { AnswerDivider } from './AnswerDivider'
import { dummyQuestion, dummyAnswers } from '../../utils/dummyDatas'
import { FAQButton } from './FAQButton'
import { AnswerDisplay } from './AnswerDisplay'
import { NoAnswer } from './NoAnswer'
import { H1, B1, B2 } from '../../utils/themes'

interface QuestionIdProp {
  questionId: number;
}

export const QnADisplay: FC<QuestionIdProp> = ({ questionId }) => {
  // Load question content
  const question = dummyQuestion;
  const answers = dummyAnswers;

  const answersElem: Array<JSX.Element> = [];

  if (answers.length === 0) {
    answersElem.push(<NoAnswer />);
  } else {
    answers.forEach((answer) =>
      answersElem.push(<AnswerDisplay answer={answer} />),
    );
  }

  const [isFaq, setIsFaq] = useState(question.isFaq);

  const changeIsFaq = () => {
    setIsFaq(!isFaq);
    // TODO: Do some more things for firebase
  };

  const closeTab = () => {
    // TODO: Navigate to 'nothing selected' page
    // alert("Close tab!");
  };

  return (
    <QnADisplayBox>
      <Box>
        <QuestionTopBox>
          <TopicBreadcrumbs separator={<NavigateNextIcon style={{ fontSize: 14 }} />} aria-label="breadcrumb">
            <BreadcrumbElem color="textSecondary">{question.topic}</BreadcrumbElem>
            <BreadcrumbElem color="textSecondary">{question.subtopic}</BreadcrumbElem>
          </TopicBreadcrumbs>
          <CloseButton aria-label="close tab" onClick={closeTab}>
            <CloseIcon />
          </CloseButton>
        </QuestionTopBox>
        <QuestionTopBox>
          <UserInfo userName={question.name} time={question.time} />
          <FAQButton isFaq={isFaq} changeIsFaq={changeIsFaq} />
        </QuestionTopBox>
        <QuestionBox>
          <QuestionTitleBox>
            Q{questionId}. {question.title}
          </QuestionTitleBox>
          <QuestionContentBox>{question.content}</QuestionContentBox>
        </QuestionBox>
      </Box>

      <AnswerDivider />

      <Box>{answersElem}</Box>
    </QnADisplayBox>
  );
};

const QnADisplayBox = styled(Box)`
  margin: 20px;
  font-size: 20px;
`;

const QuestionBox = styled(Box)`
  margin: 10px;
  margin-top: 0px;
`;

const QuestionTopBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const QuestionTitleBox = styled(Box)`
  margin-left: 10px;
  ${H1};
`;

const QuestionContentBox = styled(Box)`
  margin: 10px;
  ${B1};
`;

const TopicBreadcrumbs = styled(Breadcrumbs)`
  margin-top: 4px;
`;

const BreadcrumbElem = styled(Typography)`
  ${B2};
`;

const CloseButton = styled(IconButton)`
  width: 30px;
  height: 30px;
  ${B2};
`;
