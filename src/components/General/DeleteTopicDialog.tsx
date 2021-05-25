import { FC } from 'react';
import styled from 'styled-components';
import { Button, DialogActions, Dialog, DialogTitle, DialogContent, DialogContentText, Typography } from '@material-ui/core';
import { H2, H4 } from '../../utils/themes'

interface DeleteTopicDialogProp {
  open: boolean;
  onClose?: () => void;
  onDeleteTopic?: () => void;
}

export const DeleteTopicDialog: FC<DeleteTopicDialogProp> = ({ open, onClose, onDeleteTopic }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle><StyledTitle>Delete Topic</StyledTitle></DialogTitle>
      <DialogContent>
        <StyledDialogContentText id="alert-dialog-description">
          Are you sure you want to delete this topic?<br />Keep in mind that you can only delete empty topics.
      </StyledDialogContentText>
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={onClose} color="primary">
          Cancel
      </StyledButton>
        <StyledButton onClick={onDeleteTopic} color="primary" autoFocus>
          Delete
      </StyledButton>
      </DialogActions>
    </Dialog>
  );
};

const StyledTitle = styled(Typography)`
  ${H2}
`;

const StyledButton = styled(Button)`
  ${H4}
`;

const StyledDialogContentText = styled(DialogContentText)`
  ${H4}
`;