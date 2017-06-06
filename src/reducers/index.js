import { combineReducers } from 'redux';
import { routerReducer } from 'redux-first-routing/lib/reducer';
import user from './user';
import runtime from './runtime';

export default combineReducers({
  router: routerReducer,
  user,
  runtime,
});
