import { createContext } from 'react';

import type { AppContextProps } from './AppContext.types';
import { initialState } from './AppContext.types';

const emptyFunction = () => null;

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  actions: {
    viewportChange: emptyFunction,
    openedNavigation: emptyFunction,
  },
});
