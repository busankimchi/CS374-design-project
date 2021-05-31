import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Icon } from '@iconify/react';
import documentText from '@iconify-icons/grommet-icons/document-text';
import { B1 } from '../../utils/themes';

export const NotSelected: FC = () => {
  return (
    <NotSelectedBox>
      <NotSelectedIcon icon={documentText} />
      <MessageBox>Please select a question.</MessageBox>
    </NotSelectedBox>
  );
};

const NotSelectedBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NotSelectedIcon = styled(Icon)`
  display: block;
  height: max(5vw, 10vh);
  width: max(5vw, 10vh);
  margin: 0 auto;
`;

const MessageBox = styled(Box)`
  margin-top: 20px;
  ${B1};
  text-align: center;
`;
