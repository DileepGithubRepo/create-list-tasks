import './App.css';
import CreateTask from "./components/CreateTask";
import TaskListing from "./components/TasksListing";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TaskProviders } from "./taskContext/TaskContext";

function App() {
  return (
    <TaskProviders>
      <div className="App">
        <CreateTask/>
        <TaskListing/>
      </div>
    </TaskProviders>
    
  );
}

export default App;
