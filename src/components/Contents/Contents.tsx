import { FC } from 'react';
import styled from 'styled-components';
import { Box, InputBase, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { QnADisplay } from './QnADisplay'
import { LIGHT_GRAY_1 } from '../../utils/themes'

interface ContentsProp { questionId: number; };

export const Contents: FC<ContentsProp> = ({ questionId }) => {
  return (
    <ContentBox>
      <QnADisplayBox>
        <QnADisplay questionId={questionId} />
      </QnADisplayBox>
      <InputAreaBox>
        <AnswerForm>
          <InputTextField
            multiline
            rows={10}
            placeholder="Share your thougts here!"
          />
          <SubmitButton type="submit"><SendIcon /></SubmitButton>
        </AnswerForm>
      </InputAreaBox>
    </ContentBox>
  );
};

const ContentBox = styled(Box)`
  padding: 0px;
  margin: 0px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const QnADisplayBox = styled(Box)`
  height: 71vh;
  width: auto;
  overflow-y: scroll;
`;

const InputAreaBox = styled(Box)`
  height: 25vh;
  width: auto;
`;

const AnswerForm = styled.form`
  margin: 2vh;
  width: auto;
  height: 21vh;
  border-radius: 20px;
  border: solid;
  border-color: ${LIGHT_GRAY_1};
  display: grid;
  grid-template-columns: auto 100px;
`;

const InputTextField = styled(InputBase)`
  margin: 1vh 1vw;
  width: auto;
  height: 19vh;
  font-size: 20px;
  grid-column: 1;
`;

const SubmitButton = styled(IconButton)`
  grid-column: 2;
  border-radius: 10px;
`;