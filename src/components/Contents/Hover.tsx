import { Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import { FC } from 'react';
import { PINK_4 } from 'utils/themes';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface HoverProps {
  showQuestionList?: () => void;
  iconFlip: boolean;
}

export const Hover: FC<HoverProps> = ({ showQuestionList, iconFlip }) => {
  return (
    <HoverContainer onClick={showQuestionList}>{iconFlip ? <TightLeftIcon /> : <TightRightIcon />}</HoverContainer>
  );
};

const HoverContainer = styled(Button)`
  display: flex;
  padding: 0px;
  margin: 0px;
  align-items: center;
  justify-content: center;
  background-color: ${PINK_4};
  min-width: 2vw;
`;

const TightLeftIcon = styled(ChevronLeftIcon)`
  padding: 0px;
  margin: 0px;
`;

const TightRightIcon = styled(ChevronRightIcon)`
  padding: 0px;
  margin: 0px;
`;
