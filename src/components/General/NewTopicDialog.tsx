import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Container, Modal } from '@material-ui/core';

interface NewTopicDialogProp {
  open: boolean;
  onClose?: () => void;
}

export const NewTopicDialog: FC<NewTopicDialogProp> = ({ open, onClose }) => {
  return (
    <DialogContainer open={open} onClose={onClose}>
      <NewTopicContainer>hello world!</NewTopicContainer>
    </DialogContainer>
  );
};

const DialogContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewTopicContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;

  border: 2px solid #cccccc;
`;
