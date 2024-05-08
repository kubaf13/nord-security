import React from 'react';

import { AppContext } from './AppContext.factory';
import { useAppContext } from './AppContext.hook';
import type { AppContextProviderProps } from './AppContext.types';

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const contextValue = useAppContext();
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
