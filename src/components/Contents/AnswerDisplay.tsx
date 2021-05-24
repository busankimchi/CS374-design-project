import { FC } from 'react';
import styled from 'styled-components';
import {Box, Avatar} from '@material-ui/core';
import { AnswerContent } from '../../utils/types';
import { UserInfo } from './UserInfo'

interface AnswerDisplayProp {
  answer: AnswerContent,
};

export const AnswerDisplay: FC<AnswerDisplayProp> = ({ answer }) => {
  return (
  <AnswerBox>
    <UserInfo userName={answer.name} time={answer.time}/>
    <AnswerContentWrapper>
      <AnswerContentBox>
        {answer.content}
      </AnswerContentBox>
    </AnswerContentWrapper>
  </AnswerBox>
  );
};

const AnswerBox = styled(Box)`
  margin-bottom: 20px;
`;

const AnswerContentWrapper = styled(Box)`
  margin-left: 15px;
  border-left: solid;
  border-color: #C6C6C6;
  border-width: 4px;
`;

const AnswerContentBox = styled(Box)`
  margin-left: 15px;
  font-size: 20px;
`;