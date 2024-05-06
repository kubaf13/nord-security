import type { ReactElement } from 'react';

export interface ButtonProps {
  label: string;
  ariaLabel: string;
  onClick?: () => void;
}

export type Button = (props: ButtonProps) => ReactElement;
