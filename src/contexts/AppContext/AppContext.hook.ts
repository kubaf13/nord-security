import { useEffect, useReducer, useRef } from 'react';

import { VIEWPORTS } from '../../consts/viewports';
import { breakpoints } from '../../styles/theme';
import { appContextReducer } from './AppContext.reducer';
import type {
  AppContextActions,
  UseAppContext as UseAppContextType,
} from './AppContext.types';
import { AppContextActionType, initialState } from './AppContext.types';

export const useAppContext: UseAppContextType = () => {
  const [state, dispatch] = useReducer(appContextReducer, initialState);
  const { current: actions } = useRef<AppContextActions>({
    viewportChange: (newViewport: VIEWPORTS) => {
      dispatch({
        type: AppContextActionType.viewportChange,
        newViewport: newViewport,
      });
    },
    openedNavigation: (isOpen: boolean) => {
      dispatch({
        type: AppContextActionType.openedNavigation,
        isOpen,
      });
    },
  });

  const checkViewport = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth >= breakpoints.desktop) {
      return actions.viewportChange(VIEWPORTS.DESKTOP);
    }
    return actions.viewportChange(VIEWPORTS.MOBILE);
  };

  useEffect(() => {
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return { state, actions };
};
