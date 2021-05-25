import { Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { FC } from 'react';
import { BROWN, } from 'utils/themes';
import chevronRight from '@iconify-icons/akar-icons/chevron-right';

interface HoverProps {
  showQuestionList?: () => void;
}

export const Hover: FC<HoverProps> = ({showQuestionList}) => {
  // const ShowQuestionList = () => {
  //     QuestionList.isListShown = !QuestionList.isListShown;
  // }
    return (
        <HoverContainer
            startIcon = {<Icon icon={chevronRight} />}
            onClick= {showQuestionList}
          />
           
    );
}


const HoverContainer = styled(Button)`
  display: flex;
  background-color: ${BROWN};
  width: 15%;
  min-height: 96vh;
  `;