import { FC } from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { QnADisplay } from './QnADisplay'

interface ContentsProp { questionId: number; };

export const Contents: FC<ContentsProp> = ({questionId}) => {
  return (
    <ContentBox>
      <QnADisplay questionId={questionId}/>
      <InputBox>
        Input box goes here
      </InputBox>
    </ContentBox>
  );
};

const ContentBox = styled(Box)``;
const InputBox = styled(Box)``;