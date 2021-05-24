import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { Header } from 'components/BaseView/Header';
import { MainDrawer } from 'components/BaseView/MainDrawer';
import { NewTopicDialog } from 'components/General/NewTopicDialog';
import { MousePosition, PageType, Topic } from 'utils/types';
import { ContextMenu } from 'components/General/ContextMenu';
import { EditTopicDialog } from 'components/General/EditTopicDialog';
import { Hover } from 'components/Contents/Hover';
import { dummyTopicList } from 'utils/dummyDatas';
import { healthCheck } from 'apis/healthCheck';
import { Questions } from './Questions';

export const Home: FC = () => {
  const [topicList, setTopicList] = useState<Topic[]>(dummyTopicList);
  const [openNewTopic, setOpenNewTopic] = useState(false);
  const [openEditTopic, setOpenEditTopic] = useState(false);
  const [mouse, setMouse] = useState<MousePosition>({ x: null, y: null });
  const [topic, setTopic] = useState<Topic>();
  const [value, setValue] = useState('');

  /* CHECK THIS FOR FETCHING FIRESTORE */
  // SAMPLE FETCHING SAMPLE
  // const [health, setHealth] = useState();
  const fetchHealthCheck = useCallback(async () => {
    const temp = await healthCheck();

    // eslint-disable-next-line no-console
    console.log('in Home', temp);
    // setHealth(temp);
  }, []);

  useEffect(() => {
    fetchHealthCheck();
    // TODO: fetch topicList from firebase
  }, [fetchHealthCheck]);
  /* CHECK THIS FOR FETCHING FIRESTORE */

  useEffect(() => {
    // TODO: fetch topicList from firebase
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        <Hover />
        <Route exact path="/">
          <Redirect to="/faq" />
        </Route>
        <Route exact path="/faq" render={() => <Questions pageType={PageType.FAQ} />} />
        <Route exact path="/all_questions" render={() => <Questions pageType={PageType.ALL_QUESTONS} />} />
        <Route
          exact
          path="/topic/:topicId/subtopic/:subTopicId"
          render={() => <Questions pageType={PageType.NORMAL} />}
        />
        <Route
          exact
          path="/topic/:topicId/subtopic/:subTopicId/question/:questionId"
          render={({ location }) => {
            if (location.search !== '') {
              const searchQuery = location.search.split('=');
              const key = searchQuery[0].substr(1);
              const questionId2 = searchQuery[1];

              if (key === 'second') {
                // eslint-disable-next-line no-console
                console.log('this is a double sided view and the second one is', questionId2);
                return <Questions pageType={PageType.DUAL} />;
              }
              // eslint-disable-next-line no-console
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
