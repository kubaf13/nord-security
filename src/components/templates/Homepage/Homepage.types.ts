import type { ReactElement } from 'react';

import type { LinkProps } from '../../atoms/Link';

export interface HomepageProps {
  heading: string;
  text: string;
  link: LinkProps;
}

export type Homepage = (props: HomepageProps) => ReactElement;
