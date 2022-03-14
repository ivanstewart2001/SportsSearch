import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers/index';

const middleware = applyMiddleware(thunk);
export const store = createStore(appReducer, middleware);