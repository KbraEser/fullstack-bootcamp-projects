import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducer from './reducers/index';
import { thunk } from 'redux-thunk';

export const myStore = createStore(reducer, applyMiddleware(thunk));
