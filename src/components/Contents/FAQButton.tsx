import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon, InlineIcon } from '@iconify/react';
import pinAngle from '@iconify-icons/bi/pin-angle';
import pinAngleFill from '@iconify-icons/bi/pin-angle-fill';

interface FAQButtonProp { 
    isFaq: boolean,
};

export const FAQButton: FC<FAQButtonProp> = ({isFaq}) => {
    if (isFaq) {
        return (
            <CustonFAQButton
                variant="contained"
                startIcon={<Icon icon={pinAngleFill} />}
            >
                Remove from FAQ
        </CustonFAQButton>
        );
    }
    return (
        <CustonFAQButton
            variant="contained"
            startIcon={<Icon icon={pinAngle} />}
        >
            Add to FAQ
    </CustonFAQButton>
    );       
};

const CustonFAQButton = styled(Button)`
  margin: 10px;
  font-size: 14px;
  height: 35px;
`;