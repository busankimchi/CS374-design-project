import { FC } from 'react';
import styled from 'styled-components';
import {
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  InputBase,
} from '@material-ui/core';
import { H2, H4, GRAY } from '../../utils/themes';

interface EditTopicDialogProp {
  open: boolean;
  onClose?: () => void;
  changeTopicName?: () => void;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (event: any) => void;
}

export const EditTopicDialog: FC<EditTopicDialogProp> = ({ open, onClose, value, onChange, changeTopicName }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle>
        <StyledTitle>Edit Topic Name</StyledTitle>
      </DialogTitle>
      <DialogContent>
        <StyledDialogContentText>
          In order to edit the topic name, please enter the new topic name below.
        </StyledDialogContentText>
        <StyledTextField
          autoFocus
          margin="dense"
          id="name"
          placeholder="New Topic Name"
          value={value}
          onChange={onChange}
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <StyledButton onClick={onClose} color="primary">
          Cancel
        </StyledButton>
        <StyledButton onClick={changeTopicName} color="primary">
          Edit
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

const StyledTextField = styled(InputBase)`
  ${H4};
  border-bottom: solid;
  border-width: 2px;
  border-color: ${GRAY};
`;
