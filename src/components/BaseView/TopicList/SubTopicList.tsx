import { FC } from 'react';
import styled from 'styled-components';
import { List, ListItem, Typography } from '@material-ui/core';
import { SubTopic } from 'utils/types';
import { SubTopicListItem } from './SubTopicListItem';

interface SubTopicListProp {
  topicId: number;
  subTopicList?: SubTopic[];
}

export const SubTopicList: FC<SubTopicListProp> = ({ topicId, subTopicList }) => {
  const renderSubTopicItems = (item: SubTopic, index?: number) => (
    <SubTopicListItem key={index} topicId={topicId} subTopic={item} />
  );

  return (
    <SubTopicListContainer disablePadding>
      {(subTopicList === undefined || subTopicList.length === 0) && (
        <Empty button disabled>
          <Typography>Empty! Add a new subtopic</Typography>
        </Empty>
      )}
      {subTopicList !== undefined && subTopicList.map((item, index) => renderSubTopicItems(item, index))}
    </SubTopicListContainer>
  );
};

const SubTopicListContainer = styled(List)``;

const Empty = styled(ListItem)``;
