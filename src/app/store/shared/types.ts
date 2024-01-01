import { Info as HeaderInfo } from 'app/shared/layouts/Header/Header.types';
import { SectionInfo as MainPageSectionInfo, SectionIdEnum as MainPageSectionIdEnum } from 'app/features/Main/Main.types';

// State type
export interface SharedState {
  header: HeaderState;
  mainPage: MainPageState;
}

interface HeaderState {
  info: HeaderInfo | null;
  fixed: boolean;
  fixedVisible: boolean;
  fixedTransition: boolean;
  activeNav: MainPageSectionIdEnum | null;
  menuVisible: boolean;
}

interface MainPageState {
  sectionInfoList: MainPageSectionInfo[];
}
// ::: End

// Actions type constant
export const SHARED__SET_HEADER_STATE = 'SHARED__SET_HEADER_STATE';
export const SHARED__SET_MAIN_PAGE_STATE = 'SHARED__SET_MAIN_PAGE_STATE';
// ::: End

// Action creators type
export interface SetHeaderStateAction {
  type: typeof SHARED__SET_HEADER_STATE;
  payload: {
    state: Partial<SharedState['header']>;
  };
}

export interface SetMainPageStateAction {
  type: typeof SHARED__SET_MAIN_PAGE_STATE;
  payload: {
    state: Partial<SharedState['mainPage']>;
  };
}

export type SharedActions =
    SetHeaderStateAction
  | SetMainPageStateAction;
// ::: End
