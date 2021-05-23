import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { TopAppBar } from 'components/General/TopAppBar';
import { SearchDialog } from 'components/General/SearchDialog';

export const Header: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <HeaderContainer>
      <TopAppBar onClick={() => setShow(!show)} />
      {show && <SearchDialog />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)`
  flex-direction: column;
  height: 4vh;
`;
