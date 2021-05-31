import { FC, useState } from 'react';
import styled from 'styled-components';
import { Redirect, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { NewTopicDialog, EditTopicDialog, DeleteTopicDialog, ContextMenu } from 'components/General';
import { Header, MainDrawer } from 'components/BaseView';
import { MousePosition, PageType, Topic } from 'utils/types';
import { deleteTopic, updateTopic } from 'apis/Topic';
import { useTopicList } from 'hooks/useTopicList';
import { Questions } from './Questions';

export const Home: FC = () => {
  const [openNewTopic, setOpenNewTopic] = useState(false);
  const [openEditTopic, setOpenEditTopic] = useState(false);
  const [openDeleteTopic, setOpenDeleteTopic] = useState(false);
  const [mouse, setMouse] = useState<MousePosition>({ x: null, y: null });
  const [topic, setTopic] = useState<Topic>();
  const [editTopicValue, setEditTopicValue] = useState('');
  const [addTopicValue, setAddTopicValue] = useState('');
  const { topicList, setTopicList, maxTopicId, setMaxTopicId } = useTopicList();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenuTrigger = (event: any) => {
    event.preventDefault();
    setMouse({
      x: event.clientX - 2,
      y: event.clientY - 4,
    });
  };

  const handleClose = () => setMouse({ x: null, y: null });

  const onClickEdit = () => {
    setOpenEditTopic(true);
    handleClose();
  };

  const handleDelete = () => {
    const newTopicList = topicList.filter((item) => item.id !== topic?.id);
    setTopicList(newTopicList);
    deleteTopic(topic as Topic);
  };

  const onClickDelete = () => {
    setOpenDeleteTopic(true);
    handleClose();
  };

  const onCloseNewDialog = () => setOpenNewTopic(false);
  const onCloseEditDialog = () => setOpenEditTopic(false);
  const onCloseDeleteDialog = () => setOpenDeleteTopic(false);

  const changeTopicName = () => {
    onCloseEditDialog();
    if (editTopicValue === '') {
      return;
    }

    const newTopicList = topicList.map((item) =>
      item.id === topic?.id ? { ...item, topicName: editTopicValue } : item,
    );

    setTopicList(newTopicList);
    updateTopic({ ...(topic as Topic), topicName: editTopicValue });
  };

  const onAddTopic = () => {
    onCloseNewDialog();
    if (!(addTopicValue === '')) {
      updateTopic({ topicName: addTopicValue, id: maxTopicId + 1 });
      const newTopic: Topic = { topicName: addTopicValue, id: maxTopicId + 1 };
      const newTopicList = topicList.concat([newTopic]);
      setTopicList(newTopicList);
      setMaxTopicId(maxTopicId + 1);
    }
    setAddTopicValue('');
  };

  const onDeleteTopic = () => {
    onCloseDeleteDialog();
    if (topic?.subTopic !== undefined) {
      if (topic.subTopic.length === 0) {
        handleDelete();
      }
    } else {
      handleDelete();
    }
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
            setEditTopicValue(item.topicName);
          }}
        />
        <Route exact path="/">
          <Redirect to="/faq" />
        </Route>
        <Route exact path="/faq" render={() => <Questions pageType={PageType.FAQ} />} />
        <Route
          exact
          path="/faq/:questionId"
          render={({ match, location }) => {
            const { questionId } = match.params;

            if (!Number.isNaN(Number(questionId))) {
              if (location.search !== '') {
                const searchQuery = location.search.split('=');
                const key = searchQuery[0].substr(1);
                const questionId2Query = searchQuery[1];

                if (key === 'second') {
                  const questionId2 = Number(questionId2Query);
                  if (!Number.isNaN(questionId2)) {
                    return (
                      <Questions pageType={PageType.FAQ} questionId={Number(questionId)} questionId2={questionId2} />
                    );
                  }
                }
                // eslint-disable-next-line no-console
                console.log('query error');
                return <Questions pageType={PageType.NONE} />;
              }
              return <Questions pageType={PageType.FAQ} questionId={Number(questionId)} />;
            }
            // eslint-disable-next-line no-console
            console.log('query error');
            return <Questions pageType={PageType.NONE} />;
          }}
        />

        <Route exact path="/all_questions" render={() => <Questions pageType={PageType.ALL_QUESTIONS} />} />

        <Route
          exact
          path="/all_questions/:questionId"
          render={({ match, location }) => {
            const { questionId } = match.params;

            if (!Number.isNaN(Number(questionId))) {
              if (location.search !== '') {
                const searchQuery = location.search.split('=');
                const key = searchQuery[0].substr(1);
                const questionId2Query = searchQuery[1];

                if (key === 'second') {
                  const questionId2 = Number(questionId2Query);
                  if (!Number.isNaN(questionId2)) {
                    return (
                      <Questions
                        pageType={PageType.ALL_QUESTIONS}
                        questionId={Number(questionId)}
                        questionId2={questionId2}
                      />
                    );
                  }
                }
                // eslint-disable-next-line no-console
                console.log('query error');
                return <Questions pageType={PageType.NONE} />;
              }
              return <Questions pageType={PageType.ALL_QUESTIONS} questionId={Number(questionId)} />;
            }
            // eslint-disable-next-line no-console
            console.log('query error');
            return <Questions pageType={PageType.NONE} />;
          }}
        />

        <Route
          exact
          path="/search"
          render={({ location }) => {
            if (location.search !== '') {
              const searchQuery = location.search.split('&');

              const searchPair = searchQuery[0].split('=');
              const key = searchPair[0].substr(1);
              const search = searchPair[1];
              if (key === 'q') {
                // eslint-disable-next-line no-console
                console.log('search query is', search);

                if (searchQuery[1] !== undefined) {
                  const firstQ = searchQuery[1].split('=');
                  const firstKey = firstQ[0];
                  const firstValue = firstQ[1];

                  if (firstKey === 'first') {
                    // eslint-disable-next-line no-console
                    console.log('first question is', firstValue);

                    const questionId = Number(firstValue);
                    if (!Number.isNaN(questionId)) {
                      if (searchQuery[2] !== undefined) {
                        const secondQ = searchQuery[2].split('=');
                        const secondKey = secondQ[0];
                        const secondValue = secondQ[1];

                        if (secondKey === 'second') {
                          // eslint-disable-next-line no-console
                          console.log('second question is', secondValue);

                          const questionId2 = Number(secondValue);
                          if (!Number.isNaN(questionId2)) {
                            return (
                              <Questions
                                pageType={PageType.SEARCH}
                                search={search}
                                questionId={questionId}
                                questionId2={questionId2}
                              />
                            );
                          }
                        }
                        return <Questions pageType={PageType.NONE} />;
                      }
                      return <Questions pageType={PageType.SEARCH} search={search} questionId={questionId} />;
                    }
                  }
                  return <Questions pageType={PageType.NONE} />;
                }
                return <Questions pageType={PageType.SEARCH} search={search} />;
              }
            }
            // eslint-disable-next-line no-console
            console.log('query error');
            return <Questions pageType={PageType.NONE} />;
          }}
        />

        <Route
          exact
          path="/topic/:topicId/subtopic/:subTopicId"
          render={({ match }) => {
            const { topicId, subTopicId } = match.params;
            if (!Number.isNaN(Number(topicId)) && !Number.isNaN(Number(subTopicId))) {
              return <Questions pageType={PageType.NORMAL} topicId={Number(topicId)} subTopicId={Number(subTopicId)} />;
            }
            // eslint-disable-next-line no-console
            console.log('query error');
            return <Questions pageType={PageType.NONE} />;
          }}
        />

        <Route
          exact
          path="/topic/:topicId/subtopic/:subTopicId/question/:questionId"
          render={({ match, location }) => {
            const { topicId, subTopicId, questionId } = match.params;

            if (
              !Number.isNaN(Number(topicId)) &&
              !Number.isNaN(Number(subTopicId)) &&
              !Number.isNaN(Number(questionId))
            ) {
              if (location.search !== '') {
                const searchQuery = location.search.split('=');
                const key = searchQuery[0].substr(1);
                const questionId2Query = searchQuery[1];

                if (key === 'second') {
                  const questionId2 = Number(questionId2Query);
                  if (!Number.isNaN(questionId2)) {
                    // eslint-disable-next-line no-console
                    console.log('this is a double sided view and the second one is', questionId2);
                    return (
                      <Questions
                        pageType={PageType.NORMAL}
                        topicId={Number(topicId)}
                        subTopicId={Number(subTopicId)}
                        questionId={Number(questionId)}
                        questionId2={questionId2}
                      />
                    );
                  }
                }
                // eslint-disable-next-line no-console
                console.log('query error');
                return <Questions pageType={PageType.NONE} />;
              }

              return (
                <Questions
                  pageType={PageType.NORMAL}
                  topicId={Number(topicId)}
                  subTopicId={Number(subTopicId)}
                  questionId={Number(questionId)}
                />
              );
            }
            // eslint-disable-next-line no-console
            console.log('query error');
            return <Questions pageType={PageType.NONE} />;
          }}
        />
      </Main>
      <NewTopicDialog
        open={openNewTopic}
        onClose={onCloseNewDialog}
        value={addTopicValue as string}
        onChange={(event) => setAddTopicValue(event.target.value)}
        onAddTopic={onAddTopic}
      />
      <EditTopicDialog
        open={openEditTopic}
        onClose={onCloseEditDialog}
        value={editTopicValue as string}
        onChange={(event) => setEditTopicValue(event.target.value)}
        changeTopicName={changeTopicName}
      />
      <DeleteTopicDialog open={openDeleteTopic} onClose={onCloseDeleteDialog} onDeleteTopic={onDeleteTopic} />
      <ContextMenu mouse={mouse} handleClose={handleClose} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
    </HomeContainer>
  );
};

const HomeContainer = styled(Box)``;

const Main = styled(Box)`
  display: flex;
  flex-direction: row;
`;
