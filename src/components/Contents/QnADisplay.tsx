import { FC } from 'react';
import styled from 'styled-components';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Box, Breadcrumbs, Typography, Divider } from '@material-ui/core';
import { UserInfo } from './UserInfo'
import { AnswerDivider } from './AnswerDivider'
import { QuestionContent, AnswerContent } from '../../utils/types'
import { dummyQuestion, dummyAnswers } from '../../utils/dummyDatas'

interface QuestionIdProp { questionId: number; };

export const QnADisplay: FC<QuestionIdProp> = ({questionId}) => {
  // Load question content
  const question = dummyQuestion;
  const answers = dummyAnswers;

  const answersElem: Array<JSX.Element> = [];

  answers.forEach((answer) =>
    answersElem.push(
      <QnADisplayBox>
        ({answer.name}) {answer.content}
      </QnADisplayBox>,
    ),
  );

  return (
    <QnADisplayBox>
      <Box>
        {' '}
        {/* Question */}
        <Breadcrumbs separator={<NavigateNextIcon style={{ fontSize: 14 }} />} aria-label="breadcrumb">
          <BreadcrumbElem color="textSecondary">{question.topic}</BreadcrumbElem>
          <BreadcrumbElem color="textSecondary">{question.subtopic}</BreadcrumbElem>
        </Breadcrumbs>
        <UserInfo userName={question.name} date={question.time}/>
        <QuestionBox>
          <QuestionTitleBox>
            Q{questionId}. {question.title}
          </QuestionTitleBox>
          <QuestionContentBox>
            {question.content}
          </QuestionContentBox>
        </QuestionBox>
      </Box>
      <Box> {/* Divider */}
        <AnswerDivider/>
      </Box>
      <Box> {/* Divider */}</Box>
      <Box>
        {' '}
        {/* Answers */}
        Answers: <br />
        {answersElem}
      </Box>
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

const QADivider = styled(Divider)`
  
`;
