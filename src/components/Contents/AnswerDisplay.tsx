import { FC } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { AnswerContent } from 'utils/types';
import { LIGHT_GRAY_1 } from 'utils/themes';
import { ParsedString } from 'components/General';
import { UserInfo } from './UserInfo';

interface AnswerDisplayProp {
  answer: AnswerContent;
}

export const AnswerDisplay: FC<AnswerDisplayProp> = ({ answer }) => {
  return (
    <AnswerBox>
      <UserInfo userName={answer.name} time={answer.time} image={answer.image} />
      <AnswerContentWrapper>
        <AnswerContentBox>
          {answer.content.split('\n').map((line) => (
            <ParsedString key={line} content={line} />
          ))}
        </AnswerContentBox>
      </AnswerContentWrapper>
    </AnswerBox>
  );
};

const AnswerBox = styled(Box)`
  margin-bottom: 20px;
`;

const AnswerContentWrapper = styled(Box)`
  margin-left: 15px;
  border-left: solid;
  border-color: ${LIGHT_GRAY_1};
  border-width: 4px;
  padding-top: 2px;
  padding-bottom: 5px;
`;

const AnswerContentBox = styled(Box)`
  margin-left: 15px;
`;
