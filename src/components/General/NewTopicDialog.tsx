import { FC, useState } from 'react';
import styled from 'styled-components';
import { BaseDialog } from './BaseDialog';

interface NewTopicDialogProp {
  open: boolean;
  onClose?: () => void;
}

export const NewTopicDialog: FC<NewTopicDialogProp> = ({ open, onClose }) => {
  return (
    <BaseDialog open={open} onClose={onClose}>
      newtopic!
    </BaseDialog>
  );
};
