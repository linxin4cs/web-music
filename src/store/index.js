import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import globalReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const globalStore = createStore(globalReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default globalStore;