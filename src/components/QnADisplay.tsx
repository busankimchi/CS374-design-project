import styled from 'styled-components';
import { Box, Breadcrumbs, Typography, Avatar } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const QnADisplay = (props: QuestionIdProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { questionId } = props;

  // Load question content
  const question: QuestionContent = {
    topic: 'Project 1',
    subtopic: 'Alarm-clock',
    name: 'Cheese Burger',
    image: 0,
    time: new Date(),
    title: "Regarding 'disk.c'",
    content:
      'I had a question regarding disk.c. When I added line thread_yield in sema_up, disk.c failed to boot. I looked around the code but I could not understand why it was failing. Is it possible to ask for explanation? I know that interrupt_handler for disk uses sema_up but it did not satisfy me. If possible, I would want to have more detailed information about it. I guess it might be due to idle_thread. Since at the beginning no task is there, idle is running. Can we call thread_yield in idle thread?\n\nThank you.',
  };

  const answers: Array<AnswerContent> = [
    {
      name: 'Miles Davis',
      image: 1,
      time: new Date(),
      content:
        'Inside the thread_yield function, there is an ASSERT that checks whether the current context is not an interrupt context. (https://github.com/casys-kaist/pintos-kaist/blob/22e0ef57fa28d274fc72531a6bf76df78d3a4f8f/threads/thread.c#L302) This is because Interrupts do not have a backing process context in PintOS’s design. In other words, Interrupt contexts aren’t schedulable entities.',
    },
    {
      name: 'Bill Evans',
      image: 2,
      time: new Date(),
      content:
        'You can look at this also, \n\nhttps://stackoverflow.com/questions/1053572/why-kernel-code-thread-executing-in-interrupt-context-cannot-sleep\nAnd the comment says that the sema_up function can be called in an interrupt context. (https://github.com/casys-kaist/pintos-kaist/blob/8e59f2e37badee2259a8fe058ed048fd60f6f728/threads/synch.c#L104) So you need to properly call thread_yield function based on context.',
    },
  ];

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
        <AskerBox>
          <Avatar>{question.name[0]}</Avatar>
        </AskerBox>
        Question: {question.title}
        <br />
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
  margin-left: 30px;
  border-left: solid;
  padding-left: 30px;
  font-size: 20px;
`;

const AskerBox = styled(Box)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const BreadcrumbElem = styled(Typography)`
  font-size: 14px;
`;

type QuestionIdProps = { questionId: number };

type QuestionContent = {
  topic: string;
  subtopic: string;
  name: string;
  image: number;
  time: Date;
  title: string;
  content: string;
};

type AnswerContent = {
  name: string;
  image: number;
  time: Date;
  content: string;
};
