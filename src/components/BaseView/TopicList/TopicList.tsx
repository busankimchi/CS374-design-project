import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Topic } from 'utils/types';
import { PINK_1, PINK_3 } from 'utils/themes';
import { TopicListItem } from './TopicListItem';

interface TopicListProp {
  topicList: Topic[];
  onClickAdd?: () => void;
}

export const TopicList: FC<TopicListProp> = ({ topicList, onClickAdd }) => {
  const renderTopicItems = (item: Topic, index?: number) => <TopicListItem key={index} topic={item} />;

  return (
    <TopicListContainer>
      <FAQ button>
        <ListItemIcon>
          <ChatBubbleIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography noWrap>FAQ</Typography>
        </ListItemText>
      </FAQ>
      <AllQuestions button>
        <ListItemIcon>
          <ClearAllIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography noWrap>All Questions</Typography>
        </ListItemText>
      </AllQuestions>
      {topicList.map((item, index) => renderTopicItems(item, index))}
      <AddTopic button onClick={onClickAdd}>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography noWrap>Add Topic</Typography>
        </ListItemText>
      </AddTopic>
    </TopicListContainer>
  );
};

const FAQ = styled(ListItem)`
  :hover {
    background-color: ${PINK_3};
  }

  :focus {
    background-color: ${PINK_1};
  }
`;

const AllQuestions = styled(ListItem)`
  :hover {
    background-color: ${PINK_3};
  }

  :focus {
    background-color: ${PINK_1};
  }
`;

const TopicListContainer = styled(List)``;

const AddTopic = styled(ListItem)`
  :hover {
    background-color: ${PINK_3};
  }
`;
