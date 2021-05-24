import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { QnADisplay } from './QnADisplay'

export const Contents = (props: QuestionIdProps) => {
  const {questionId} = props

  return (
    <ContentBox>
      <QnADisplay {...{'questionId': questionId}}/>
      <InputBox>
        Input box goes here
      </InputBox>
    </ContentBox>
  );
};

const ContentBox = styled(Box)``;
const InputBox = styled(Box)``;

type QuestionIdProps = { questionId: number; };