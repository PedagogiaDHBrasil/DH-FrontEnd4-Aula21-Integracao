export function fetchTasksStarted() {
  return {
    type: 'FETCH_TASKS_START',
  };
}

export function fetchTasksSuccess(tasks) {
  return {
    type: 'FETCH_TASKS_SUCCESS',
    payload: tasks,
  };
}

export function fetchTasksError(errorMessage) {
  return {
    type: 'FETCH_TASKS_ERROR',
    payload: errorMessage,
  };
}
