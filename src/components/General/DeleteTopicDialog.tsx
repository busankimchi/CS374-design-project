import { FC } from 'react';
import styled from 'styled-components';
import { Box, Button, Typography } from '@material-ui/core';
import { BaseDialog } from './BaseDialog';

interface DeleteTopicDialogProp {
  open: boolean;
  onClose?: () => void;
  onDeleteTopic?: () => void;
}

export const DeleteTopicDialog: FC<DeleteTopicDialogProp> = ({ open, onClose, onDeleteTopic }) => {
  return (
    <BaseDialog open={open} onClose={onClose}>
      <Content>Are you sure you want to delete the topic?</Content>
      <ButtonContainer>
        <Button onClick={onDeleteTopic}>Delete</Button>
        <Button onClick={onClose}>Cancel</Button>
      </ButtonContainer>
    </BaseDialog>
  );
};

const ButtonContainer = styled(Box)`
  margin-top: 1em;
`;

const Content = styled(Typography)``;
