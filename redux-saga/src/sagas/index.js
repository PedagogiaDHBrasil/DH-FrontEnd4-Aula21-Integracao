import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchTasksSuccess, fetchTasksError } from '../actions';

function* fetchTasksSaga() {
  try {
    let tasks = [];

    if (Math.round(Math.random() * 10) % 2 === 0) {
      const response = yield call(fetch, 'https://tasks.com');
      tasks = response.json();

      yield put(fetchTasksSuccess(tasks));
    } else {
      tasks = [
        { id: 1, name: 'Task #01' },
        { id: 2, name: 'Task #02' },
        { id: 3, name: 'Task #03' },
      ];
    }

    yield put(fetchTasksSuccess(tasks));
  } catch(error) {
    yield put(fetchTasksError(error.message));
  }
}

export function* watchFetchTasksSaga() {
  yield takeLatest('FETCH_TASKS_START', fetchTasksSaga);
}