import { Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { FC, useState } from 'react';
import { PINK_4 } from 'utils/themes';
import chevronRight from '@iconify-icons/akar-icons/chevron-right';

interface HoverProps {
  showQuestionList?: () => void;
  iconFlip: boolean;
}

export const Hover: FC<HoverProps> = ({showQuestionList, iconFlip}) => {
  // const ShowQuestionList = () => {
  //     QuestionList.isListShown = !QuestionList.isListShown;
  // }
  
    return (
        <HoverContainer
            startIcon = {<Icon icon={chevronRight} hFlip={iconFlip}/>}
            onClick= {showQuestionList}
          />
    );
}


const HoverContainer = styled(Button)`
  display: flex;
  background-color: ${PINK_4};
  width: 20%;
  min-height: 96vh;
  `;