import { combineReducers } from 'redux';

import { fetchTasksReducer } from './tasks';

export default combineReducers({
  fetchTasksReducer,
});
