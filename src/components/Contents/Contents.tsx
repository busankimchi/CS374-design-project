import { FC, useState, useRef, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Box, Breadcrumbs, Typography, InputBase, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CloseIcon from '@material-ui/icons/Close';
import { LIGHT_GRAY_1, H1, B1, B2 } from '../../utils/themes'
import { UserInfo } from './UserInfo'
import { AnswerDivider } from './AnswerDivider'
import { dummyQuestion, dummyAnswers } from '../../utils/dummyDatas'
import { FAQButton } from './FAQButton'
import { AnswerDisplay } from './AnswerDisplay'
import { NoAnswer } from './NoAnswer'
import { AnswerContent } from '../../utils/types';

interface ContentsProp { questionId: number; };

export const Contents: FC<ContentsProp> = ({ questionId }) => {
  const [text, setText] = useState("");
  const [question, _] = useState(dummyQuestion);
  const [answers, setAnswers] = useState(dummyAnswers);
  const [isFaq, setIsFaq] = useState(question.isFaq);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef && divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [answers]);

  const answersElem: Array<JSX.Element> = [];

  if (answers.length === 0) {
    answersElem.push(<NoAnswer />);
  } else {
    answers.forEach((answer) =>
      answersElem.push(<AnswerDisplay answer={answer} />),
    );
  }

  /* Listeners */
  const changeIsFaq = () => {
    setIsFaq(!isFaq);
    // TODO: Do some more things for firebase
  }

  const closeTab = () => {
    // TODO: Navigate to 'nothing selected' page
    // alert("Close tab!");
  }

  const onTextareaChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  }

  const appendAnswer = (ans: AnswerContent) => {
    setAnswers([...answers, ans]);

    // TODO: Update answer to firebase
  }

  const answerSubmitHandler = () => {
    console.log(text);
    if (text === "")
      return;

    const ans: AnswerContent = {
      name: "Cheese Pringles",
      image: 4,
      time: new Date(),
      content: text,
    }
    appendAnswer(ans);
    setText("");
  }

  return (
    <ContentBox>
      <QnADisplayWrapper>
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
              <UserInfo userName={question.name} time={question.time} image={question.image} />
              <FAQButton isFaq={isFaq} changeIsFaq={changeIsFaq} />
            </QuestionTopBox>
            <QuestionBox>
              <QuestionTitleBox>Q{questionId}. {question.title}</QuestionTitleBox>
              <QuestionContentBox>{question.content}</QuestionContentBox>
            </QuestionBox>
          </Box>
          <AnswerDivider />
          <Box>{answersElem}</Box>
        </QnADisplayBox>
        <div ref={divRef} />
      </QnADisplayWrapper>
      <InputAreaBox>
        <AnswerBox>
          <InputTextField
            multiline
            fullWidth
            placeholder="Share your thougts here!"
            value={text}
            onChange={onTextareaChange}
          />
          <SubmitButton onClick={answerSubmitHandler}><SendIcon /></SubmitButton>
        </AnswerBox>
      </InputAreaBox>
    </ContentBox>
  );
};

const ContentBox = styled(Box)`
  padding: 0px;
  margin: 0px;
  height: 96vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const QnADisplayWrapper = styled(Box)`
  height: 71vh;
  width: auto;
  overflow-y: scroll;
`;

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

const InputAreaBox = styled(Box)`
  height: 25vh;
  width: auto;
`;

const AnswerBox = styled(Box)`
  margin: 2vh;
  width: auto;
  height: 21vh;
  border-radius: 20px;
  border: solid;
  border-color: ${LIGHT_GRAY_1};
  display: grid;
  grid-template-columns: auto 5vw;
`;

const InputTextField = styled(InputBase)`
  margin: 1vh 1vw;
  width: auto;
  height: 19vh;
  ${B1};
  grid-column: 1;
  overflow-y: scroll;
`;

const SubmitButton = styled(IconButton)`
  grid-column: 2;
  border-radius: 10px;
`;