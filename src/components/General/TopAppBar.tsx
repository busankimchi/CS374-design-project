import { FC } from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { H4, PINK_1, PINK_3, PINK_4 } from 'utils/themes';

interface TopAppBarProp {
  onClick?: () => void;
}

export const TopAppBar: FC<TopAppBarProp> = ({ onClick }) => {
  return (
    <TopAppBarContainer position="static">
      <SearchButton onClick={onClick}>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <TypoContainer>
          <SearchText>SEARCH</SearchText>
        </TypoContainer>
      </SearchButton>
    </TopAppBarContainer>
  );
};

const TopAppBarContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${PINK_1};
  height: 100%;
`;

const SearchButton = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${PINK_4};
  border-radius: 6px;
  height: 60%;

  :hover {
    border: 4px solid ${PINK_3};
  }
`;

const SearchIconContainer = styled(Box)`
  width: 1.5em;
  height: 1.5em;
  color: ${PINK_4};
  margin-right: 0.2em;
`;

const TypoContainer = styled(Box)`
  margin-right: 36vw;
`;

const SearchText = styled(Typography)`
  color: ${PINK_4};
  ${H4};
`;
