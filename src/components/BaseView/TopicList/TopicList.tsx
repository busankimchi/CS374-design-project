import { FC } from 'react';
import { Link as DefaultLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem, ListItemIcon as DefaultListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Topic } from 'utils/types';
import { H4, BROWN, PINK_1, PINK_4 } from 'utils/themes';
import { TopicListItem } from './TopicListItem';

interface TopicListProp {
  topicList: Topic[];
  onClickAdd?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onContextMenu?: (event: any) => void;
  setTopic?: (item: Topic) => void;
}

export const TopicList: FC<TopicListProp> = ({ topicList, onClickAdd, onContextMenu, setTopic }) => {
  const renderTopicItems = (item: Topic, index?: number) => (
    <TopicListItem key={index} topic={item} onContextMenu={onContextMenu} setTopic={setTopic} />
  );

  const location = useLocation();
  const locPath = location.pathname.split('/');
  const locSearch = location.search.split('&');

  const linkPicker = () => {
    console.log(locPath, locSearch);
    // normal
    if (locPath[1] === 'topic') {
      if (locPath[6] !== undefined) {
        const questionId = locPath[6];

        if (locSearch[0] !== '') {
          const arg = locSearch[0].substr(1);
          const argPair = arg.split('=');
          const argKey = argPair[0];
          // const argVal = arg[1];

          if (argKey === 'second') {
            return `?prev=${questionId}&${arg}`;
          }
          return '';
        }
        return `?prev=${questionId}`;
      }
    }
    if (locPath[1] === 'faq' || locPath[1] === 'all_questions') {
      if (locPath[2] !== undefined) {
        const questionId = locPath[2];

        if (locSearch[0] !== '') {
          const arg = locSearch[0].substr(1);
          const argPair = arg.split('=');
          const argKey = argPair[0];
          // const argVal = arg[1];

          if (argKey === 'second') {
            return `?prev=${questionId}&${arg}`;
          }
          return '';
        }
        return `?prev=${questionId}`;
      }
      return '';
    }
    if (locPath[1] === 'search') {
      if (locSearch[1] !== '') {
        const arg = locSearch[1];
        const argPair = arg.split('=');
        const argKey = argPair[0];
        const questionId = argPair[1];

        // console.log('search!!!', arg);

        if (argKey === 'first') {
          if (locSearch[2] !== undefined) {
            const arg2 = locSearch[2];
            const arg2Pair = arg2.split('=');
            const arg2Key = arg2Pair[0];
            // const questionId2 = arg2[1];

            if (arg2Key === 'second') {
              return `?prev=${questionId}&${arg2}`;
            }
            return '';
          }
          return `?prev=${questionId}`;
        }
        return '';
      }
    }
    return '';
  };

  console.log(linkPicker());

  return (
    <TopicListContainer>
      <Link to="/faq">
        <FAQItem button>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText>
            <TopicItemText noWrap>FAQ</TopicItemText>
          </ListItemText>
        </FAQItem>
      </Link>
      <Link to="/all_questions">
        <AllQuestionsItem button>
          <ListItemIcon>
            <ClearAllIcon />
          </ListItemIcon>
          <ListItemText>
            <TopicItemText noWrap>All Questions</TopicItemText>
          </ListItemText>
        </AllQuestionsItem>
      </Link>
      {topicList.map((item, index) => renderTopicItems(item, index))}
      <AddTopic button onClick={onClickAdd}>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText>
          <TopicItemText noWrap>Add Topic</TopicItemText>
        </ListItemText>
      </AddTopic>
    </TopicListContainer>
  );
};

const TopicListContainer = styled(List)`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Link = styled(DefaultLink)`
  color: #000000;
  text-decoration: none;
`;

const ListItemIcon = styled(DefaultListItemIcon)`
  min-width: 2.5em;
`;

const FAQItem = styled(ListItem)`
  display: flex;

  :hover {
    background-color: ${PINK_4} !important;
  }

  :focus {
    background-color: ${PINK_1} !important;
  }
`;

const TopicItemText = styled(Typography)`
  color: ${BROWN};
  ${H4}
`;

const AllQuestionsItem = styled(ListItem)`
  :hover {
    background-color: ${PINK_4} !important;
  }

  :focus {
    background-color: ${PINK_1} !important;
  }
`;

const AddTopic = styled(ListItem)`
  margin-bottom: 4em;
  :hover {
    background-color: ${PINK_4} !important;
  }
`;
