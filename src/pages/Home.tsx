import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Header } from 'components/BaseView/Header';
import { MainDrawer } from 'components/BaseView/MainDrawer';
import { NewTopicDialog } from 'components/General/NewTopicDialog';

export const Home: FC = () => {
  const [openNewTopic, setOpenNewTopic] = useState(false);

  return (
    <HomeContainer>
      <Header />
      <Main>
        <MainDrawer onClickAdd={() => setOpenNewTopic(true)} />
      </Main>
      <NewTopicDialog open={openNewTopic} onClose={() => setOpenNewTopic(false)} />
    </HomeContainer>
  );
};

const HomeContainer = styled(Box)``;

const Main = styled(Box)``;
