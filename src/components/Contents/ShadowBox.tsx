/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import styled from 'styled-components';
// import { Redirect, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { LIGHT_GRAY_1 } from 'utils/themes';

interface ShadowBoxProps {
  isVisible: boolean;
}

export const ShadowBox: FC<ShadowBoxProps> = ({ isVisible }) => {
  // eslint-disable-next-line no-console
  // console.log(isVisible);
  return <ShadowContainer />;
};

const ShadowContainer = styled(Box)`
  position: absolute;
  height: 100%;
  width: 41%;
  left: 68%;
  opacity: 0.7;
  background-color: ${LIGHT_GRAY_1};
`;
