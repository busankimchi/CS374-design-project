import { css, keyframes } from 'styled-components';

/* COLOR THEMES */
export const BROWN = '#402424';

export const PINK_1 = '#FF9292';

export const PINK_2 = '#FFB4B4';

export const PINK_3 = '#FFDFDF';

export const PINK_4 = '#FFE8E8';

export const GRAY = '#868686';

export const LIGHT_GRAY_1 = '#CDCDCD';

export const LIGHT_GRAY_2 = '#F2F0F0';

/* FONTS */
export const H1 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 36px !important;
`;

export const H2 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 24px !important;
`;

export const H3 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 20px !important;
`;

export const H4 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 16px !important;
`;

export const H5 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 14px !important;
`;

export const B1 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 20px !important;
`;

export const B2 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 14px !important;
`;

export const B3 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 12px !important;
`;

export const B4 = css`
  font-family: 'Lato', sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 16px !important;
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

export const TRUNCATE_ONE = css`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TRUNCATE_TWO = css`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
