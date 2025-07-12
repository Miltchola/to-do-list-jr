import './App.css'
import TaskList from './components/TaskList/TaskList'

function App() {
  return (
    <div className="app-container">

      <div className="app-header">
        <h1>To-Do List</h1>
      </div>
      
      <TaskList />
      
    </div>
  )
}

export default App
