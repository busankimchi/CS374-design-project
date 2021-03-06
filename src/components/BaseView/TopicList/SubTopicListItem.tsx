import { FC } from 'react';
import { Link as DefaultLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { SubTopic } from 'utils/types';
import { BROWN, H4, PINK_1, PINK_4 } from 'utils/themes';

interface SubTopicListItemProp {
  topicId: number;
  subTopic: SubTopic;
}

export const SubTopicListItem: FC<SubTopicListItemProp> = ({ topicId, subTopic }) => {
  const location = useLocation();
  const { search } = location;

  const suffixPicker = (search: string) => {
    const searchQuery = search.split('&');

    const firstQuery = searchQuery[0].split('=');
    const firstKey = firstQuery[0].substr(1);

    if (firstKey === 'q') {
      return `?${searchQuery.slice(1).join('&')}`;
    }
    return search;
  };

  return (
    <Link to={`/topic/${topicId}/subTopic/${subTopic.id}${suffixPicker(search)}`}>
      <SubTopicListItemContainer button>
        <ListItemText>
          <SubTopicItemText noWrap>{subTopic.subTopicName}</SubTopicItemText>
        </ListItemText>
      </SubTopicListItemContainer>
    </Link>
  );
};

const SubTopicListItemContainer = styled(ListItem)`
  padding: 0.15em 0 0.15em 2.5em !important;

  :hover {
    background-color: ${PINK_4} !important;
  }

  :focus {
    background-color: ${PINK_1} !important;
  }
`;

const SubTopicItemText = styled(Typography)`
  color: ${BROWN};
  ${H4}
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;
