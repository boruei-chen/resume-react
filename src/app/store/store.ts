import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'app/store/rootReducer';
import rootSaga from 'app/store/rootSaga';

// Create Middleware
const reduxSagaMiddleware = createSagaMiddleware();
const appReduxMiddlewares = applyMiddleware(reduxSagaMiddleware);

// Create rootMiddleware based on environment
let rootMiddleware;
if (process.env.NODE_ENV !== 'production') {
  // non-prod env
  const { composeWithDevTools } = require('redux-devtools-extension');
  rootMiddleware = composeWithDevTools(appReduxMiddlewares);
} else {
  // prod env
  rootMiddleware = appReduxMiddlewares;
}

// Create store
const store = createStore(rootReducer, rootMiddleware);

// Run saga
reduxSagaMiddleware.run(rootSaga);

export default store;
