import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { TopAppBar } from 'components/General/TopAppBar';
import { SearchPopup } from 'components/General/SearchPopup';

export const Header: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <HeaderContainer>
      <TopAppBar onClick={() => setShow(!show)} />
      {show && <SearchPopup />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)`
  flex-direction: column;
  height: 4vh;
`;
