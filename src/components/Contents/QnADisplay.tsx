import { FC, useState } from 'react';
import styled from 'styled-components';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Breadcrumbs, Typography } from '@material-ui/core';
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

  return (
    <QnADisplayBox>
      <Box>
        <Breadcrumbs separator={<NavigateNextIcon style={{ fontSize: 14 }} />} aria-label="breadcrumb">
          <BreadcrumbElem color="textSecondary">{question.topic}</BreadcrumbElem>
          <BreadcrumbElem color="textSecondary">{question.subtopic}</BreadcrumbElem>
        </Breadcrumbs>
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
  font-size: 14px;
`;
