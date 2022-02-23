import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasksThunk } from './actions';

function App({ tasksState, fetchTasksThunk }) {
  return (
    <div className="App">
      <button type="button" onClick={() => fetchTasksThunk()}>Buscar Tasks</button>
      <ol>
        {tasksState.tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ol>
    {tasksState.errorMessage && <span>{tasksState.errorMessage}</span>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasksState: state.fetchTasksReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTasksThunk,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
