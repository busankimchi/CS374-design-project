import { css, keyframes } from 'styled-components';

/* COLOR THEMES */
export const BROWN = '#402424';

export const PINK_1 = '#FF9292';

export const PINK_2 = '#FFB4B4';

export const PINK_3 = '#FFDFDF';

export const PINK_4 = '#FFE8E8';

export const GRAY_1 = '#868686';

export const GRAY_2 = '#CDCDCD';

export const GRAY_3 = '#F2F0F0';

/* FONTS */
export const H1 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
`;

export const H2 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const H3 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

export const H4 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const H5 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

export const B1 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const B2 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

export const B3 = css`
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
`;

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
