import { FC } from 'react';
import styled from 'styled-components';
import { Box, Modal } from '@material-ui/core';

interface BaseDialogProp {
  open: boolean;
  onClose?: () => void;
}

export const BaseDialog: FC<BaseDialogProp> = ({ open, onClose, children }) => {
  return (
    <DialogContainer open={open} onClose={onClose}>
      <BaseContainer>{children}</BaseContainer>
    </DialogContainer>
  );
};

const DialogContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BaseContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;

  border: 2px solid #cccccc;
`;
