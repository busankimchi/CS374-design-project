import { FC } from 'react';
import { Link as DefaultLink } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem, Typography, Divider as DefaultDivider } from '@material-ui/core';
import { Topic } from 'utils/types';
import { BROWN, H3, PINK_1, PINK_2, PINK_4 } from 'utils/themes';
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
      <Link to="/faq">
        <ClassTextContainer button>
          <ClassText noWrap>{currentClass}</ClassText>
        </ClassTextContainer>
      </Link>
      <Divider />
      <TopicList topicList={topicList} onClickAdd={onClickAdd} onContextMenu={onContextMenu} setTopic={setTopic} />
    </MainDrawerContainer>
  );
};

const MainDrawerContainer = styled(List)`
  display: flex;
  flex-direction: column;
  background-color: ${PINK_2};
  width: 15vw;
  height: 96vh;
`;

const ClassTextContainer = styled(ListItem)`
  display: flex;

  :hover {
    background-color: ${PINK_4} !important;
  }
`;

const Divider = styled(DefaultDivider)`
  height: 2px !important;
  background-color: ${PINK_4} !important;
`;

const ClassText = styled(Typography)`
  color: ${BROWN};
  ${H3}
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;
