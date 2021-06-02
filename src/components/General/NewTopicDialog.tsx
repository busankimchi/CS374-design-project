import { FC } from 'react';
import styled from 'styled-components';
import { Button, DialogActions, Dialog, DialogTitle, DialogContent, DialogContentText, Typography, InputBase } from '@material-ui/core';
import { H2, H4, GRAY } from '../../utils/themes'

interface NewTopicDialogProp {
  open: boolean;
  onClose?: () => void;
  onAddTopic?: () => void;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (event: any) => void;
}

export const NewTopicDialog: FC<NewTopicDialogProp> = ({ open, onClose, onAddTopic, value, onChange }) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle><StyledTitle>Add New Topic</StyledTitle></DialogTitle>
      <DialogContent>
        <StyledDialogContentText>
          In order to add a new topic, please enter the new topic name below.<br />Note that only students are allowed to add subtopics.
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
        <StyledButton onClick={onAddTopic} color="primary">
          Add
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
