import { SharedState, SharedActions, SHARED__SET_HEADER_STATE, SHARED__SET_MAIN_PAGE_STATE } from './types';

export const setHeaderStateAction = (state: Partial<SharedState['header']>): SharedActions => ({
  type: SHARED__SET_HEADER_STATE,
  payload: { state }
});

export const setMainPageStateAction = (state: Partial<SharedState['mainPage']>): SharedActions => ({
  type: SHARED__SET_MAIN_PAGE_STATE,
  payload: { state }
});
