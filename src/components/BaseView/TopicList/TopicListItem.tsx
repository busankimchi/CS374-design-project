import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, ListItem, ListItemText, Collapse, Typography } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Topic } from 'utils/types';
import { H4, BROWN, PINK_4, rotation } from 'utils/themes';
import { SubTopicList } from './SubTopicList';

interface TopicListItemProp {
  topic: Topic;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onContextMenu?: (event: any) => void;
  setTopic?: (item: Topic) => void;
}

export const TopicListItem: FC<TopicListItemProp> = ({ topic, onContextMenu, setTopic }) => {
  const [open, setOpen] = useState(false);

  return (
    <TopicListContainer>
      <TopicListItemContainer
        button
        onClick={() => setOpen(!open)}
        onContextMenu={(event) => {
          if (onContextMenu !== undefined) {
            onContextMenu(event);
          }
          if (setTopic !== undefined) {
            setTopic(topic);
          }
        }}
      >
        <ExpandIcon focused={open} />
        <ListItemText>
          <TopicItemText noWrap>{topic.topicName}</TopicItemText>
        </ListItemText>
      </TopicListItemContainer>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <SubTopicList topicId={topic.id} subTopicList={topic.subTopic} />
      </Collapse>
    </TopicListContainer>
  );
};

const TopicListContainer = styled(Box)``;

const TopicListItemContainer = styled(ListItem)`
  :hover {
    background-color: ${PINK_4} !important;
  }
`;

const TopicItemText = styled(Typography)`
  color: ${BROWN};
  ${H4}
`;

const ExpandIcon = styled(ExpandMore)<{ focused: boolean }>`
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out !important;

  ${({ focused }) => focused && rotation(0)};
`;
