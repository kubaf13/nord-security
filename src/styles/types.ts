import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export type ViewportName = 'desktop' | 'tablet' | 'mobile' | 'maxWidth';

export type Palette = {
  background: string;
  accent: string;
  span: string;
  text: string;
  error: string;
};

export interface Theme {
  palette: Palette;
  media: {
    [key in ViewportName]: string;
  };
  fonts: {
    cairo: string;
  };
}
