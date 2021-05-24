import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Header } from 'components/BaseView/Header';
import { MainDrawer } from 'components/BaseView/MainDrawer';
import { NewTopicDialog } from 'components/General/NewTopicDialog';
import { MousePosition, PageType, Topic } from 'utils/types';
import { ContextMenu } from 'components/General/ContextMenu';
import { EditTopicDialog } from 'components/General/EditTopicDialog';
import { dummyTopicList } from 'utils/dummyDatas';
import { Questions } from './Questions';

export const Home: FC = () => {
  const [topicList, setTopicList] = useState<Topic[]>(dummyTopicList);
  const [openNewTopic, setOpenNewTopic] = useState(false);
  const [openEditTopic, setOpenEditTopic] = useState(false);
  const [mouse, setMouse] = useState<MousePosition>({ x: null, y: null });
  const [topic, setTopic] = useState<Topic>();
  const [value, setValue] = useState('');

  useEffect(() => {
    // TODO: fetch topicList from firebase
  }, []);

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

  const onCloseEditDialog = () => setOpenEditTopic(false);

  const changeTopicName = () => {
    onCloseEditDialog();
    setTopicList(topicList.map((item) => (item.id === topic?.id ? { ...item, topicName: value } : item)));
    // TODO: update the topic name to firebase
  };

  return (
    <HomeContainer>
      <Header />
      <Main>
        <MainDrawer
          topicList={topicList}
          onClickAdd={() => setOpenNewTopic(true)}
          onContextMenu={handleMenuTrigger}
          setTopic={(item) => {
            setTopic(item);
            setValue(item.topicName);
          }}
        />
        <Route path="/faq" render={() => <Questions pageType={PageType.FAQ} />} />
        <Route path="/all_questions" render={() => <Questions pageType={PageType.ALL_QUESTONS} />} />
        <Route
          exact
          path="/topic/:topicId/subtopic/:subTopicId"
          render={() => <Questions pageType={PageType.NORMAL} />}
        />
        <Route
          exact
          path="/topic/:topicId/subtopic/:subTopicId/questions/:questionId"
          render={({ location }) => {
            if (location.search !== '') {
              const searchQuery = location.search.split('=');
              const key = searchQuery[0].substr(1);
              const questionId2 = searchQuery[1];

              if (key === 'second') {
                console.log('this is a double sided view and the second one is', questionId2);
                return <Questions pageType={PageType.DUAL} />;
              }
              console.log('query error');
              return <Questions pageType={PageType.NONE} />;
            }
            return <Questions pageType={PageType.NORMAL} />;
          }}
        />
      </Main>
      <NewTopicDialog open={openNewTopic} onClose={() => setOpenNewTopic(false)} />
      <EditTopicDialog
        open={openEditTopic}
        onClose={onCloseEditDialog}
        value={value as string}
        onChange={(event) => setValue(event.target.value)}
        changeTopicName={changeTopicName}
      />
      <ContextMenu mouse={mouse} handleClose={handleClose} onClickItem={onClickItem} />
    </HomeContainer>
  );
};

const HomeContainer = styled(Box)``;

const Main = styled(Box)`
  display: flex;
  flex-direction: row;
`;
