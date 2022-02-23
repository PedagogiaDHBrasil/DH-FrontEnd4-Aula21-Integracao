import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTasksStarted } from './actions';

function App({ tasksState, fetchTasksStarted }) {
  return (
    <div className="App">
      <button type="button" onClick={() => fetchTasksStarted()}>Buscar Tasks</button>
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
  fetchTasksStarted,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
