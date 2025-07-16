import './App.css'
import TaskList from './components/TaskList/TaskList'
import task from './assets/task.png'

function App() {
  return (
    <div className="app-container">

      <div className="app-header">
        <img src={task} alt="Logo" className="app-logo" />
        <h1>To-Do List</h1>
      </div>
      
      <TaskList />
      
    </div>
  )
}

export default App
