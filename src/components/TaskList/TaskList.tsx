import React, { useState } from "react";
import Task from "../Task/Task";
import CompletedTask from "../CompletedTask.tsx/CompletedTask";
import "./TaskList.css"; 


interface TaskType {
  id: string;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const handleToggle = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="tasklist-container">

      <div className="tasklist-header">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>

          {/* Adição de tarefa */}
          <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Nova tarefa"
            style={{ width: "60%", marginRight: 8, padding: 6, minWidth: 120 }}
          />
          <button onClick={handleAddTask}>Adicionar</button>

        </div>
      </div>

      <div className="tasklist-content">
        
        <div className="tasklist-section">
          <h2 style={{ textAlign: "center", color: "#4caf50" }}>Pendentes</h2>
          {/* Igual à seção de concluídos */}

          {activeTasks.length === 0 && (
            <p style={{ color: "#888", textAlign: "center" }}>Nenhuma tarefa pendente</p>
          )}

          {activeTasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>

        <div className="tasklist-section">
          <CompletedTask
            tasks={completedTasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>

      </div>
    </div>
  );
};

export default TaskList;