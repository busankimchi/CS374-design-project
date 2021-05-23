import { FC, useState } from 'react';
import styled from 'styled-components';
import { BaseDialog } from './BaseDialog';

interface EditTopicDialogProp {
  open: boolean;
  onClose?: () => void;
}

export const EditTopicDialog: FC<EditTopicDialogProp> = ({ open, onClose }) => {
  return (
    <BaseDialog open={open} onClose={onClose}>
      edit topic!
    </BaseDialog>
  );
};
