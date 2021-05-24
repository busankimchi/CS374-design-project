import { FC } from 'react';
import styled from 'styled-components';
import { Box, Typography, Divider as DefaultDivider } from '@material-ui/core';
import { Topic } from 'utils/types';
import { BROWN, H3, PINK_2, PINK_4 } from 'utils/themes';
import { TopicList } from './TopicList/TopicList';

interface MainDrawerProp {
  topicList: Topic[];
  onClickAdd?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onContextMenu?: (event: any) => void;
  setTopic?: (item: Topic) => void;
}

export const MainDrawer: FC<MainDrawerProp> = ({ topicList, onClickAdd, onContextMenu, setTopic }) => {
  const currentClass = 'CS330: Operating Systems and Lab';

  return (
    <MainDrawerContainer>
      <ClassTextContainer>
        <ClassText noWrap>{currentClass}</ClassText>
      </ClassTextContainer>
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

const ClassTextContainer = styled(Box)`
  padding: 1em;
`;

const Divider = styled(DefaultDivider)`
  height: 2px !important;
  background-color: ${PINK_4} !important;
`;

const ClassText = styled(Typography)`
  color: ${BROWN};
  ${H3}
`;
