import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, TextField, Button } from '@material-ui/core';
import { BaseDialog } from './BaseDialog';

interface EditTopicDialogProp {
  open: boolean;
  onClose?: () => void;
  changeTopicName?: () => void;
  value: string;
  onChange?: (event: any) => void;
}

export const EditTopicDialog: FC<EditTopicDialogProp> = ({ open, onClose, value, onChange, changeTopicName }) => {
  return (
    <BaseDialog open={open} onClose={onClose}>
      <TextField id="outlined-basic" label="Edit Topic Name" variant="outlined" value={value} onChange={onChange} />
      <ButtonContainer>
        <Button disabled={value === ''} onClick={changeTopicName}>
          Save
        </Button>
      </ButtonContainer>
    </BaseDialog>
  );
};

const ButtonContainer = styled(Box)`
  margin-top: 1em;
`;
