import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export type ViewportName = 'desktop' | 'tablet' | 'mobile' | 'maxWidth';

export type Palette = {
  text: string;
};

export interface Theme {
  palette: Palette;
  media: {
    [key in ViewportName]: string;
  };
  fonts: {
    loveYaLikeASister: string;
    jetBrainsFont: string;
  };
}
