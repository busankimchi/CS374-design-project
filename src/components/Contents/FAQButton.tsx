import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Icon } from '@iconify/react';
import pinAngle from '@iconify-icons/bi/pin-angle';
import pinAngleFill from '@iconify-icons/bi/pin-angle-fill';

interface FAQButtonProp {
  isFaq: boolean;
  changeIsFaq: (arg0: boolean) => void;
}

export const FAQButton: FC<FAQButtonProp> = ({ isFaq, changeIsFaq }) => {
  const handleClick = () => {
    changeIsFaq(isFaq);
  };

  if (isFaq) {
    return (
      <CustonFAQButton variant="outlined" startIcon={<Icon icon={pinAngleFill} />} onClick={handleClick} disableRipple>
        Remove from FAQ
      </CustonFAQButton>
    );
  }
  return (
    <CustonFAQButton variant="outlined" startIcon={<Icon icon={pinAngle} />} onClick={handleClick}>
      Add to FAQ
    </CustonFAQButton>
  );
};

const CustonFAQButton = styled(Button)`
  margin: 10px !important;
  font-size: 14px;
  height: 35px;
  border: none !important;
`;
