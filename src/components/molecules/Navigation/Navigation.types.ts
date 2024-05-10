import type { ReactElement } from 'react';

import type { LinkProps } from '../../atoms/Link';

export interface NavigationProps {
  links: LinkProps[];
  isOpen: boolean;
  onClose: () => void;
}

export type Navigation = (props: NavigationProps) => ReactElement;
