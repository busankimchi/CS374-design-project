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

interface QuestionIdProp { questionId: number; };

export const QnADisplay: FC<QuestionIdProp> = ({questionId}) => {
  // Load question content
  const question = dummyQuestion;
  const answers = dummyAnswers;

  const answersElem: Array<JSX.Element> = [];

  answers.forEach((answer) =>
    answersElem.push(<AnswerDisplay answer={answer}/>),
  );

  const [isFaq, setIsFaq] = useState(question.isFaq);

  const changeIsFaq = () => {
    setIsFaq(!isFaq);
    // TODO: Do some more things for firebase
  }

  const closeTab = () => {
    // TODO: Navigate to 'nothing selected' page
    alert("Close tab!");
  }

  return (
    <QnADisplayBox>
      <Box>
        <QuestionTopBox>
          <Breadcrumbs separator={<NavigateNextIcon style={{ fontSize: 14 }} />} aria-label="breadcrumb">
            <BreadcrumbElem color="textSecondary">{question.topic}</BreadcrumbElem>
            <BreadcrumbElem color="textSecondary">{question.subtopic}</BreadcrumbElem>
          </Breadcrumbs>
          <CloseButton aria-label="close tab" onClick={closeTab}>
            <CloseIcon />
          </CloseButton>
        </QuestionTopBox>
        <QuestionTopBox>
          <UserInfo userName={question.name} time={question.time}/>
          <FAQButton isFaq={isFaq} changeIsFaq={changeIsFaq}/>
        </QuestionTopBox>
        <QuestionBox>
          <QuestionTitleBox>Q{questionId}. {question.title}</QuestionTitleBox>
          <QuestionContentBox>{question.content}</QuestionContentBox>
        </QuestionBox>
      </Box>
      
      <AnswerDivider/>
      
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
  font-size: 36px;
  font-weight: Bold;
`;

const QuestionContentBox = styled(Box)`
  margin: 10px;
  font-size: 20px;
`;

const BreadcrumbElem = styled(Typography)`
  margin-top: 4px;
  font-size: 14px;
`;

const CloseButton = styled(IconButton)`
  width: 30px;
  height: 30px;
`;
