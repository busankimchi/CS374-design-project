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

const ContentBox = styled(Box)`
  padding: 0px;
  margin: 0px;
`;

const InputBox = styled(Box)`
  height: 100px;
  width: auto;
  left: 0px;
  right: 0px;
  bottom: 0px;
  // background-color: red;
`;