import type { Theme } from './types';

export const breakpoints = {
  maxWidth: 1400,
  desktop: 1024,
  tablet: 768,
  mobile: 360,
};

const theme: Theme = {
  palette: {
    text: '#FFF',
  },

  media: {
    mobile: `screen and (max-width: ${breakpoints.tablet - 1}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    maxWidth: `${breakpoints.maxWidth}px`,
  },
  fonts: {
    loveYaLikeASister: 'Love Ya Like A Sister',
    jetBrainsFont: 'JetBrains',
  },
};

export default theme;
