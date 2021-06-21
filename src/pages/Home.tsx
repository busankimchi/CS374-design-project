import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { NewTopicDialog, EditTopicDialog, DeleteTopicDialog, ContextMenu } from 'components/General';
import { Header, MainDrawer } from 'components/BaseView';
import { MousePosition, Question, Topic } from 'utils/types';
import { deleteTopic, updateTopic } from 'apis/Topic';
import { useTopicList } from 'hooks';
import { GRAY } from '../utils/themes'
import { MainQuestionList } from './MainQuestionList';
import { QuestionDetail } from './QuestionDetail';
import tut1Image from '../tutorial/normal-view-example.png';
import tut2Image from '../tutorial/hover-double-sided-view-example.png';
import tut3Image from '../tutorial/double-sided-view-example.png';

export const Home: FC = () => {
  const [tutorial, setTutorial] = useState(0);

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

  const moveToNextTutorial = () => {
    setTutorial(tutorial + 1);
  }

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

  if (tutorial === 0) {
    return (
      <TutorialContainer>
        <TutorialImgContainer src={tut1Image} alt='Tutorial 1 image.' onClick={moveToNextTutorial}/>
      </TutorialContainer>
    );
  }    
  if (tutorial === 1) {
    return (
      <TutorialContainer>
        <TutorialImgContainer src={tut2Image} alt='Tutorial 2 image.' onClick={moveToNextTutorial}/>
      </TutorialContainer>
    );
  }
  if (tutorial === 2) {
    return (
      <TutorialContainer>
        <TutorialImgContainer src={tut3Image} alt='Tutorial 2 image.' onClick={moveToNextTutorial}/>
      </TutorialContainer>
    );
  }

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

const TutorialContainer = styled(Box)`
  width: 100vw;
  height: 100vh;,
  background-color: ${GRAY},
`;

const TutorialImgContainer = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;