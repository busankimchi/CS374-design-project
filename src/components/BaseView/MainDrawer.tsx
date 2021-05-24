import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Typography, Divider as DefaultDivider } from '@material-ui/core';
import { Topic } from 'utils/types';
import { PINK_2, PINK_3 } from 'utils/themes';
import { TopicList } from './TopicList/TopicList';

interface MainDrawerProp {
  topicList: Topic[];
  onClickAdd?: () => void;
  onContextMenu?: (event: any) => void;
  setTopic?: (item: Topic) => void;
}

export const MainDrawer: FC<MainDrawerProp> = ({ topicList, onClickAdd, onContextMenu, setTopic }) => {
  return (
    <MainDrawerContainer>
      <ClassText>
        <Typography noWrap>CS330: Operating Systems and Lab</Typography>
      </ClassText>
      <Divider />
      <TopicList topicList={topicList} onClickAdd={onClickAdd} onContextMenu={onContextMenu} setTopic={setTopic} />
    </MainDrawerContainer>
  );
};

const MainDrawerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${PINK_2};
  width: 15%;
  min-height: 96vh;
`;

const ClassText = styled(Box)`
  padding: 1em;
`;

const Divider = styled(DefaultDivider)`
  height: 2px;
  background-color: ${PINK_3};
`;
