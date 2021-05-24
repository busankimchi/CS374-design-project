import { css, keyframes } from 'styled-components';

export const PINK_1 = '#FF9292';

export const PINK_2 = '#FFB4B4';

export const PINK_3 = '#FFE8E8';

export const GRAY_1 = '#868686';

export const GRAY_2 = '#F2F0F0';

export const GRAY_3 = '#CDCDCD';

export const rotation = (degree: number) =>
  css`
    transform: rotate(${degree}deg) !important;
  `;

export const FADE_IN = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const FADE_OUT = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;
