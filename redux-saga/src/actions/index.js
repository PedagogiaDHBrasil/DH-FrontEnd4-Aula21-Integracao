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

export const fetchTasksThunk = () => async (dispatch) => {
  dispatch(fetchTasksStarted());

  try {
    let tasks = [];

    if (Math.round(Math.random() * 10) % 2 === 0) {
      const response = await fetch('https://tasks.com');
      tasks = response.json();

      dispatch(fetchTasksSuccess(tasks));
    } else {
      tasks = [
        { id: 1, name: 'Task #01' },
        { id: 2, name: 'Task #02' },
        { id: 3, name: 'Task #03' },
      ];
    }

    dispatch(fetchTasksSuccess(tasks));
  } catch(error) {
    dispatch(fetchTasksError(error.message));
  }
}