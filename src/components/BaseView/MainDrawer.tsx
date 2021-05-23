import { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Typography, Divider as DefaultDivider } from '@material-ui/core';
import { Topic } from 'utils/types';
import { PINK_2, PINK_3 } from 'utils/themes';
import { dummyTopicList } from 'utils/dummyDatas';
import { TopicList } from './TopicList/TopicList';

interface MainDrawerProp {
  onClickAdd?: () => void;
}

export const MainDrawer: FC<MainDrawerProp> = ({ onClickAdd }) => {
  const [topicList, setTopicList] = useState<Topic[]>(dummyTopicList);

  return (
    <MainDrawerContainer>
      <ClassText>
        <Typography noWrap>CS330: Operating Systems and Lab</Typography>
      </ClassText>
      <Divider />
      <TopicList topicList={topicList} onClickAdd={onClickAdd} />
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
  padding: 12px;
`;

const Divider = styled(DefaultDivider)`
  height: 2px;
  background-color: ${PINK_3};
`;
