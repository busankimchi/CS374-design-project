/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import styled from 'styled-components';
import { Link as DefaultLink, useLocation } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import regexifyString from 'regexify-string';
import { B1 } from 'utils/themes';

interface ParsedStringProps {
  content: string;
}

export const ParsedString: FC<ParsedStringProps> = ({ content }) => {
  const location = useLocation();

  const questionLink = (qId: string): string => {
    const questionId = Number(qId);
    if (!Number.isNaN(questionId)) {
      const { pathname, search } = location;

      const searchQuery = search.split('&');

      if (searchQuery[1] !== undefined) {
        return `${pathname}${searchQuery[0]}&second=${questionId}`;
      }
      return `${pathname}${search}&second=${questionId}`;
    }
    return '';
  };

  const regexString = regexifyString({
    pattern: /(?:^|\W)#(\w+)(?!\w)/g,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decorator: (match: string, index: number) => {
      const hyperLink = questionLink(match.trim().substr(1));

      return (
        <Link to={hyperLink}>
          <ContentText>{match}</ContentText>
        </Link>
      );
    },
    input: content,
  });

  const result: JSX.Element[] = regexString.map((item) =>
    typeof item === 'string' ? <ContentText>{item}</ContentText> : item,
  );
  return <ParsedStringContainer>{result}</ParsedStringContainer>;
};

const Link = styled(DefaultLink)`
  color: #3366bb;
  text-decoration: none;
  ${B1};
  :hover {
    text-decoration: underline;
  }
`;

const ContentText = styled(Typography)`
  margin: 0 0.1em;
  ${B1};
`;

const ParsedStringContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
