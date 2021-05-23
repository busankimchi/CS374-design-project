import { FC } from 'react';
import styled from 'styled-components';
import { Menu as DefaultMenu, Item as DefaultItem } from 'react-contexify';
import { Box, Typography } from '@material-ui/core';
import { MENU_ID } from 'utils/types';
import { FADE_IN, PINK_2 } from 'utils/themes';

interface ContextMenuProps {
  onClickItem?: () => void;
}

export const ContextMenu: FC<ContextMenuProps> = ({ onClickItem }) => {
  return (
    <Menu id={MENU_ID}>
      <Item onClick={onClickItem}>
        <ItemContainer>
          <ItemText>Edit Topic Name</ItemText>
        </ItemContainer>
      </Item>
    </Menu>
  );
};

const Menu = styled(DefaultMenu)`
  position: absolute;
  left: 0px;
  top: 0px;
  animation: 0.25s ${FADE_IN} ease;
  background-color: #555555;
  border-radius: 8px;
  padding: 4px;
`;

const Item = styled(DefaultItem)`
  border-radius: 6px;
  margin: 4px;
  :hover {
    background-color: ${PINK_2};
    animation: 0.1s ${FADE_IN} ease;
  }
`;

const ItemContainer = styled(Box)`
  padding: 4px 8px;
`;

const ItemText = styled(Typography)`
  color: #ffffff;
`;
