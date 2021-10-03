import { createStore, applyMiddleware } from 'redux';
import Reducer from './reducers/index.js';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  Reducer,
  applyMiddleware(thunkMiddleware),
);

export default store;
