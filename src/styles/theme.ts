import type { Theme } from './types';

export const breakpoints = {
  maxWidth: 1400,
  desktop: 1024,
  tablet: 768,
  mobile: 360,
};

const theme: Theme = {
  palette: {
    background: '#F2F2F2',
    accent: '#425A7D',
    span: '#4F4F4F',
    text: '#000000',
    error: '#9D0101',
  },

  media: {
    mobile: `screen and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    maxWidth: `${breakpoints.maxWidth}px`,
  },
  fonts: {
    cairo: 'Cairo',
  },
};

export default theme;
