import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, ListItem, ListItemText, Collapse, Typography } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Topic } from 'utils/types';
import { PINK_3, rotation } from 'utils/themes';
import { SubTopicList } from './SubTopicList';

interface TopicListItemProp {
  topic: Topic;
}

export const TopicListItem: FC<TopicListItemProp> = ({ topic }) => {
  const [open, setOpen] = useState(false);

  return (
    <TopicListContainer>
      <TopicListItemContainer
        button
        onClick={() => setOpen(!open)}
        onContextMenu={() => {
          console.log('heeadsgasdfasd');
        }}
      >
        <ExpandIcon focused={open} />
        <ListItemText>
          <Typography noWrap>{topic.topicName}</Typography>
        </ListItemText>
      </TopicListItemContainer>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <SubTopicList subTopicList={topic.subTopic} />
      </Collapse>
    </TopicListContainer>
  );
};

const TopicListContainer = styled(Box)``;

const TopicListItemContainer = styled(ListItem)`
  :hover {
    background-color: ${PINK_3};
  }
`;

const ExpandIcon = styled(ExpandMore)<{ focused: boolean }>`
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out;

  ${({ focused }) => focused && rotation(0)};
`;
