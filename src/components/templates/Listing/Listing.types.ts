import type { ReactElement } from 'react';

export type FiltrationType =
  | 'name-asc'
  | 'name-desc'
  | 'distance-asc'
  | 'distance-desc'
  | 'random';

export type Listing = () => ReactElement;
