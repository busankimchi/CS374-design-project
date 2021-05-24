import { FC } from 'react';
import styled from 'styled-components';
import { Menu as DefaultMenu, MenuItem as DefaultMenuItem, Typography } from '@material-ui/core';
import { MousePosition } from 'utils/types';

interface ContextMenuProps {
  mouse: MousePosition;
  handleClose?: () => void;
  onClickItem?: () => void;
}

export const ContextMenu: FC<ContextMenuProps> = ({ mouse, handleClose, onClickItem }) => {
  return (
    <Menu
      keepMounted
      open={mouse.y !== null}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={mouse.y !== null && mouse.x !== null ? { top: mouse.y, left: mouse.x } : undefined}
    >
      <MenuItem onClick={onClickItem}>
        <ItemText>Edit Topic Name</ItemText>
      </MenuItem>
    </Menu>
  );
};

const Menu = styled(DefaultMenu)``;

const MenuItem = styled(DefaultMenuItem)``;

const ItemText = styled(Typography)``;
