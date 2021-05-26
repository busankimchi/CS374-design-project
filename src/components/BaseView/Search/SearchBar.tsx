import { FC } from 'react';
import styled from 'styled-components';
import { Box, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { B4 } from 'utils/themes';

interface SearchBarProp {
  onClickClose?: () => void;
}

export const SearchBar: FC<SearchBarProp> = ({ onClickClose }) => {
  return (
    <SearchBarContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <Input placeholder="SEARCH" inputProps={{ 'aria-label': 'search' }} />
      <CloseIconContainer onClick={onClickClose}>
        <CloseIcon />
      </CloseIconContainer>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SearchIconContainer = styled(Box)`
  display: flex;
  align-self: center;
  margin: 0em 0em 0em 1.5em;
`;

const Input = styled(InputBase)`
  width: 70%;

  .MuiInputBase-input {
    ${B4}
  }
`;

const CloseIconContainer = styled(IconButton)`
  margin: 0em 0.5em;
`;
