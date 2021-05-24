import { FC } from 'react';
import styled from 'styled-components';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { SubTopic } from 'utils/types';
import { PINK_1, PINK_3 } from 'utils/themes';
import { Link as DefaultLink } from 'react-router-dom';

interface SubTopicListItemProp {
  topicId: number;
  subTopic: SubTopic;
}

export const SubTopicListItem: FC<SubTopicListItemProp> = ({ topicId, subTopic }) => {
  return (
    <Link to={`/topic/${topicId}/subTopic/${subTopic.id}`}>
      <SubTopicListItemContainer button>
        <ListItemText>
          <Typography noWrap>{subTopic.subTopicName}</Typography>
        </ListItemText>
      </SubTopicListItemContainer>
    </Link>
  );
};

const SubTopicListItemContainer = styled(ListItem)`
  padding: 0.15em 0 0.15em 2em;

  :hover {
    background-color: ${PINK_3} !important;
  }

  :focus {
    background-color: ${PINK_1} !important;
  }
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;
