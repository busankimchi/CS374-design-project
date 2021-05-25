import { FC } from 'react';
import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { ListItem, IconButton, ListItemText, Typography } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/Close';
import { H4, BROWN, PINK_4 } from 'utils/themes';
import { HistoryQuery } from 'utils/types';

interface HistoryListItemProp {
  history: HistoryQuery;
  onClickItem?: () => void;
  onClickDelete?: () => void;
}

export const HistoryListItem: FC<HistoryListItemProp> = ({ history, onClickItem, onClickDelete }) => {
  return (
    <Link to={`/search?q=${history.history}`}>
      <HistoryListItemContainer button onClick={onClickItem}>
        <HistoryIcon />
        <HistoryItem>
          <HistoryItemText noWrap>{history.history}</HistoryItemText>
        </HistoryItem>
        <CloseIconContainer onClick={onClickDelete}>
          <CloseIcon />
        </CloseIconContainer>
      </HistoryListItemContainer>
    </Link>
  );
};

const HistoryListItemContainer = styled(ListItem)`
  :hover {
    background-color: ${PINK_4} !important;
  }
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;

const HistoryItem = styled(ListItemText)`
  margin-left: 1em;
`;

const HistoryItemText = styled(Typography)`
  color: ${BROWN};
  ${H4}
`;

const CloseIconContainer = styled(IconButton)`
  /* margin: 0em 0.5em; */
  padding: 0.2em 0.4em;
`;
