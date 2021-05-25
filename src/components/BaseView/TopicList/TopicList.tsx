import { FC } from 'react';
import { Link as DefaultLink } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon as DefaultListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Topic } from 'utils/types';
import { H4, BROWN, PINK_1, PINK_4 } from 'utils/themes';
import { TopicListItem } from './TopicListItem';

interface TopicListProp {
  topicList: Topic[];
  onClickAdd?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onContextMenu?: (event: any) => void;
  setTopic?: (item: Topic) => void;
}

export const TopicList: FC<TopicListProp> = ({ topicList, onClickAdd, onContextMenu, setTopic }) => {
  const renderTopicItems = (item: Topic, index?: number) => (
    <TopicListItem key={index} topic={item} onContextMenu={onContextMenu} setTopic={setTopic} />
  );

  return (
    <TopicListContainer>
      <Link to="/faq">
        <FAQ button>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText>
            <TopicItemText noWrap>FAQ</TopicItemText>
          </ListItemText>
        </FAQ>
      </Link>
      <Link to="/all_questions">
        <AllQuestions button>
          <ListItemIcon>
            <ClearAllIcon />
          </ListItemIcon>
          <ListItemText>
            <TopicItemText noWrap>All Questions</TopicItemText>
          </ListItemText>
        </AllQuestions>
      </Link>
      {topicList.map((item, index) => renderTopicItems(item, index))}
      <AddTopic button onClick={onClickAdd}>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText>
          <TopicItemText noWrap>Add Topic</TopicItemText>
        </ListItemText>
      </AddTopic>
    </TopicListContainer>
  );
};

const TopicListContainer = styled(List)`
  overflow-y: scroll;
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;

const ListItemIcon = styled(DefaultListItemIcon)`
  min-width: 2.5em;
`;

const FAQ = styled(ListItem)`
  display: flex;

  :hover {
    background-color: ${PINK_4} !important;
  }

  :focus {
    background-color: ${PINK_1} !important;
  }
`;

const TopicItemText = styled(Typography)`
  color: ${BROWN};
  ${H4}
`;

const AllQuestions = styled(ListItem)`
  :hover {
    background-color: ${PINK_4} !important;
  }

  :focus {
    background-color: ${PINK_1} !important;
  }
`;

const AddTopic = styled(ListItem)`
  margin-bottom: 4em;
  :hover {
    background-color: ${PINK_4} !important;
  }
`;
