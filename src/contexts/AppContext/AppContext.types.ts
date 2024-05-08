import type React from 'react';

import { VIEWPORTS } from '../../consts/viewports';

export enum AppContextActionType {
  viewportChange,
  openedNavigation,
}

export const initialState = {
  viewportState: VIEWPORTS.MOBILE,
  menuIsActive: false,
};

export type AppContextAction =
  | {
      type: AppContextActionType.viewportChange;
      newViewport: VIEWPORTS;
    }
  | {
      type: AppContextActionType.openedNavigation;
      isOpen: boolean;
    };

export interface AppContextState {
  viewportState: VIEWPORTS;
  menuIsActive: boolean;
}

export interface AppContextActions {
  viewportChange: (newViewport: VIEWPORTS) => void;
  openedNavigation: (menuIsActive: boolean) => void;
}

export interface AppContextProviderProps {
  children: React.ReactNode;
}

export interface AppContextProps {
  state: AppContextState;
  actions: AppContextActions;
}

export type UseAppContext = () => AppContextProps;
