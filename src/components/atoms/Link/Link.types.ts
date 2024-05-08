import type { ReactElement } from 'react';

import type { STYLING_VARIANT } from '../Button/Button.types';

export interface LinkProps {
  label: string;
  url: string;
  isFollow?: boolean;
  hasIndex?: boolean;
  openInNewTab?: boolean;
  ariaLabel: string;
  variant: STYLING_VARIANT;
}

export type Link = (props: LinkProps) => ReactElement;
