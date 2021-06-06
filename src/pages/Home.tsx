import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { NewTopicDialog, EditTopicDialog, DeleteTopicDialog, ContextMenu } from 'components/General';
import { Header, MainDrawer } from 'components/BaseView';
import { MousePosition, Question, Topic } from 'utils/types';
import { deleteTopic, updateTopic } from 'apis/Topic';
import { useTopicList } from 'hooks/useTopicList';
import { MainQuestionList } from './MainQuestionList';
import { QuestionDetail } from './QuestionDetail';

export const Home: FC = () => {
  const [openNewTopic, setOpenNewTopic] = useState(false);
  const [openEditTopic, setOpenEditTopic] = useState(false);
  const [openDeleteTopic, setOpenDeleteTopic] = useState(false);

  const [mouse, setMouse] = useState<MousePosition>({ x: null, y: null });
  const [topic, setTopic] = useState<Topic>();

  const [editTopicValue, setEditTopicValue] = useState('');
  const [addTopicValue, setAddTopicValue] = useState('');

  const { topicList, setTopicList, maxTopicId, setMaxTopicId } = useTopicList();

  const [isListShown, setListShown] = useState(true);
  const [isHover, setHover] = useState(false);
  const [isHoverDual, setHoverDual] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [questionList, setQuestionList] = useState<Question[]>([]);
  const [totalQuestionList, setTotalQuestionList] = useState<Question[]>([]);

  const [question1, setQuestion1] = useState<Question>();
  const [question2, setQuestion2] = useState<Question>();

  const onToggle = () => setListShown(!isListShown);
  const onHoverIn = () => setHover(true);
  const onHoverOut = () => setHover(false);
  const onHoverInDual = () => setHoverDual(true);
  const onHoverOutDual = () => setHoverDual(false);

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
        <QuestionContainer>
          <MainQuestionList
            setTotalQuestionList={setTotalQuestionList}
            setQuestionList={setQuestionList}
            isListShown={isListShown}
            onToggle={onToggle}
            onHoverIn={onHoverIn}
            onHoverOut={onHoverOut}
            onHoverInDual={onHoverInDual}
            onHoverOutDual={onHoverOutDual}
          />

          <QuestionDetail
            questionList={totalQuestionList}
            setQuestionList={setQuestionList}
            question1={question1}
            question2={question2}
            setQuestion1={setQuestion1}
            setQuestion2={setQuestion2}
            isHover={isHover}
            isHoverDual={isHoverDual}
          />
        </QuestionContainer>
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
  width: 100%;
`;

const QuestionContainer = styled(Box)`
  display: flex;
  width: 100%;
`;
