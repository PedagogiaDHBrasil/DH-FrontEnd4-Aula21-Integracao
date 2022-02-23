const initialState = {
  isFetching: false,
  tasks: [],
  errorMessage: undefined,
};

export function fetchTasksReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_TASKS_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_TASKS_SUCCESS':
      return {
        errorMessage: undefined,
        isFetching: false,
        tasks: action.payload,
      };
    case 'FETCH_TASKS_ERROR':
      return {
        tasks: [],
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}