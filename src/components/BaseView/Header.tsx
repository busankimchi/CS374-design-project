import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { TopAppBar } from 'components/General';
import { SearchPopup } from 'components/BaseView/Search';

export const Header: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <HeaderContainer>
      <TopAppBar onClick={() => setShow(!show)} />
      <SearchPopup open={show} onClose={() => setShow(false)} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Box)`
  flex-direction: column;
  height: 4vh;
`;
