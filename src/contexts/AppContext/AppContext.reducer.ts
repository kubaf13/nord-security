import type { AppContextAction, AppContextState } from './AppContext.types';
import { AppContextActionType } from './AppContext.types';

export const appContextReducer = (
  state: AppContextState,
  action: AppContextAction,
): AppContextState => {
  switch (action.type) {
    case AppContextActionType.viewportChange:
      return {
        ...state,
        viewportState: action.newViewport,
      };
    case AppContextActionType.openedNavigation:
      return {
        ...state,
        menuIsActive: action.isOpen,
      };
    default:
      return state;
  }
};
