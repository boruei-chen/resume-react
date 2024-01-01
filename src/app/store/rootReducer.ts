import { combineReducers } from 'redux';
import SharedReducer from './shared/reducer';

const rootReducer = combineReducers({
  shared: SharedReducer
});

export default rootReducer;
