import { FC } from 'react';
import styled from 'styled-components';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { SubTopic } from 'utils/types';
import { PINK_1, PINK_3 } from 'utils/themes';

interface SubTopicListItemProp {
  subTopic: SubTopic;
}

export const SubTopicListItem: FC<SubTopicListItemProp> = ({ subTopic }) => {
  return (
    <SubTopicListItemContainer button>
      <ListItemText>
        <Typography noWrap>{subTopic.subTopicName}</Typography>
      </ListItemText>
    </SubTopicListItemContainer>
  );
};

const SubTopicListItemContainer = styled(ListItem)`
  padding-left: 2em;

  :hover {
    background-color: ${PINK_3};
  }

  :focus {
    background-color: ${PINK_1};
  }
`;
