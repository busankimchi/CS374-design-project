import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { dummySearchHistory } from 'utils/dummyDatas';
import { SearchBar } from './SearchBar';

export const SearchDialog: FC = () => {
  const [search, setSearch] = useState('');
  const [recent, setResent] = useState(dummySearchHistory);

  return (
    <SearchDialogContainer>
      <SearchBar value={search} onChange={(event) => setSearch(event.target.value)} />
    </SearchDialogContainer>
  );
};

const SearchDialogContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;
