import type { ReactElement } from 'react';

export enum STYLING_VARIANT {
  SIMPLE,
  BUTTON,
}
export interface ButtonProps {
  label: string;
  ariaLabel: string;
  onClick?: () => void;
  variant: STYLING_VARIANT;
}

export type Button = (props: ButtonProps) => ReactElement;
