import type { ReactElement } from 'react';

export interface CardProps {
  name: string;
  distance: number;
}

export type Card = (props: CardProps) => ReactElement;
