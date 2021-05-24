import { FC, useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Header } from 'components/BaseView/Header';
import { MainDrawer } from 'components/BaseView/MainDrawer';
import { NewTopicDialog } from 'components/General/NewTopicDialog';
import { MousePosition, PageType } from 'utils/types';
import { ContextMenu } from 'components/General/ContextMenu';
import { EditTopicDialog } from 'components/General/EditTopicDialog';
import { Questions } from './Questions';

export const Home: FC = () => {
  const [openNewTopic, setOpenNewTopic] = useState(false);
  const [openEditTopic, setOpenEditTopic] = useState(false);

  const [mouse, setMouse] = useState<MousePosition>({ x: null, y: null });

  const handleMenuTrigger = (event: any) => {
    event.preventDefault();
    setMouse({
      x: event.clientX - 2,
      y: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setMouse({ x: null, y: null });
  };

  const onClickItem = () => {
    setOpenEditTopic(true);
    handleClose();
  };

  return (
    <HomeContainer>
      <Header />
      <Main>
        <MainDrawer onClickAdd={() => setOpenNewTopic(true)} onContextMenu={handleMenuTrigger} />
        <Route path="/faq" render={() => <Questions pageType={PageType.FAQ} />} />
        <Route path="/all_questions" render={() => <Questions pageType={PageType.ALL_QUESTONS} />} />
        <Route path="/topic/:topicId/subtopic/:subTopicId" render={() => <Questions pageType={PageType.NORMAL} />} />
        <Route
          path="/topic/:topicId/subtopic/:subTopicId/questions/:questionId"
          render={() => <Questions pageType={PageType.NORMAL} />}
        />
      </Main>
      <NewTopicDialog open={openNewTopic} onClose={() => setOpenNewTopic(false)} />
      <EditTopicDialog open={openEditTopic} onClose={() => setOpenEditTopic(false)} />
      <ContextMenu mouse={mouse} handleClose={handleClose} onClickItem={onClickItem} />
    </HomeContainer>
  );
};

const HomeContainer = styled(Box)``;

const Main = styled(Box)`
  display: flex;
  flex-direction: row;
`;
