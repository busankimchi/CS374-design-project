import { FC } from 'react';
import styled from 'styled-components';
import { Box, IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

interface SearchBarProp {
  value: string;
  onChange?: (event: any) => void;
  onClickClose?: () => void;
}

export const SearchBar: FC<SearchBarProp> = ({ value, onChange, onClickClose }) => {
  return (
    <SearchBarContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <InputBase value={value} onChange={onChange} placeholder="SEARCH" inputProps={{ 'aria-label': 'search' }} />
      <CloseIconContainer onClick={onClickClose}>
        <CloseIcon />
      </CloseIconContainer>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled(Box)``;

const SearchIconContainer = styled(Box)``;

const CloseIconContainer = styled(IconButton)``;
