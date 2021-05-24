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
      <QnADisplay questionId={questionId} />
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

const InputAreaBox = styled(Box)`
  height: 300px;
  width: auto;
`;

const AnswerForm = styled.form`
  margin: 20px;
  width: auto;
  height: 260px;
  border-radius: 20px;
  border: solid;
  border-color: ${LIGHT_GRAY_1};
  display: grid;
  grid-template-columns: auto 100px;
`;

const InputTextField = styled(InputBase)`
  margin: 10px;
  margin-left: 20px;
  width: auto;
  height: 240px;
  font-size: 20px;
  grid-column: 1;
`;

const SubmitButton = styled(IconButton)`
  grid-column: 2;
  border-radius: 10px;
`;