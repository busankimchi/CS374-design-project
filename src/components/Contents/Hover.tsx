import { Box, Button, ButtonBase } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { FC } from 'react';
import { LIGHT_GRAY_1, PINK_4 } from 'utils/themes';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface HoverProps {
  showQuestionList?: () => void;
  iconFlip: boolean;
}

export const Hover: FC<HoverProps> = ({ showQuestionList, iconFlip }) => {
  return (
    <HoverContainer onClick={showQuestionList}>{iconFlip ? <ChevronLeftIcon /> : <ChevronRightIcon />}</HoverContainer>
  );
};

const HoverContainer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PINK_4};
  min-width: 2em;
`;
