import { FC } from 'react';
import styled from 'styled-components';
import { Box, TextField, Button } from '@material-ui/core';
import { BaseDialog } from './BaseDialog';

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
    <BaseDialog open={open} onClose={onClose}>
      <TextField id="outlined-basic" label="Add Topic Name" variant="outlined" value={value} onChange={onChange} />
      <ButtonContainer>
        <Button disabled={value === ''} onClick={onAddTopic}>
          Save
        </Button>
      </ButtonContainer>
    </BaseDialog>
  );
};

const ButtonContainer = styled(Box)`
  margin-top: 1em;
`;
