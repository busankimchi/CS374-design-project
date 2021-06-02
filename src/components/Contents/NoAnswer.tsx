import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Icon } from '@iconify/react';
import sadTear from '@iconify-icons/fa-regular/sad-tear';
import { B1 } from '../../utils/themes';

export const NoAnswer: FC = () => {
  return (
    <NoAnswerBox>
      <NoAnswerIcon icon={sadTear} />
      <MessageBox>The question is not answered yet. Please share your thoughts!</MessageBox>
    </NoAnswerBox>
  );
};

const NoAnswerBox = styled(Box)`
  width: auto;
`;

const NoAnswerIcon = styled(Icon)`
  display: block;
  height: max(5vw, 10vh);
  width: max(5vw, 10vh);
  margin: 20px auto;
  align-content: center;
`;

const MessageBox = styled(Box)`
  ${B1};
  text-align: center;
`;
