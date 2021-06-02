import { FC } from 'react';
import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { Box, ListItem, IconButton, ListItemText, Typography } from '@material-ui/core';
import HistoryIcon from '@material-ui/icons/History';
import CloseIcon from '@material-ui/icons/Close';
import { H4, BROWN, PINK_4 } from 'utils/themes';
import { HistoryQuery } from 'utils/types';

interface HistoryListItemProp {
  history: HistoryQuery;
  onClickHistory?: () => void;
  onClickDelete?: () => void;
}

export const HistoryListItem: FC<HistoryListItemProp> = ({ history, onClickHistory, onClickDelete }) => {
  return (
    <HistoryListItemContainer button>
      <Link to={`/search?q=${history.history}`}>
        <HistoryButton onClick={onClickHistory}>
          <HistoryIcon />
          <HistoryItem>
            <HistoryItemText noWrap>{history.history}</HistoryItemText>
          </HistoryItem>
        </HistoryButton>
      </Link>
      <CloseIconContainer onClick={onClickDelete}>
        <CloseIcon />
      </CloseIconContainer>
    </HistoryListItemContainer>
  );
};

const HistoryListItemContainer = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: ${PINK_4} !important;
  }
  height: 3em;
  padding: 0 1em;
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
  width: 100%;
`;

const HistoryButton = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  width: 100%;
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
  padding: 0.3em 0.3em;
`;
