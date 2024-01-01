import { Reducer } from 'redux';
import { SharedState, SharedActions, SHARED__SET_HEADER_STATE, SHARED__SET_MAIN_PAGE_STATE } from './types';

const initialState: SharedState = {
  header: {
    info: null,
    fixed: false,
    fixedVisible: false,
    fixedTransition: false,
    activeNav: null,
    menuVisible: false
  },
  mainPage: {
    sectionInfoList: []
  }
};

const SharedReducer: Reducer<SharedState, SharedActions> = (state = initialState, action): SharedState => {
  switch (action.type) {
    case SHARED__SET_HEADER_STATE: {
      return { ...state, header: { ...state.header, ...action.payload.state } };
    }
    case SHARED__SET_MAIN_PAGE_STATE: {
      return { ...state, mainPage: { ...state.mainPage, ...action.payload.state } };
    }
    default:
      return state;
  }
};

export default SharedReducer;
