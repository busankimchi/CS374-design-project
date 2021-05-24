import { Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { FC } from 'react';
import { BROWN, H4, PINK_1, PINK_4 } from 'utils/themes';

interface HoverProp {
    ShowQuestionList?: () => void;
  }


export const Hover: FC<HoverProp> = ({ShowQuestionList}) => {

    return (
        <HoverContainer onClick= {ShowQuestionList} />
    );
}


const HoverContainer = styled(Box)`
  display: flex;
  background-color: ${BROWN};
  width: 15%;
  min-height: 96vh;
`;
