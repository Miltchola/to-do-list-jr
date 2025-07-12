import React from "react";
import "./Task.css";

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="task-checkbox"
      />
      <span className={`task-title${completed ? " completed" : ""}`}>
        {title}
      </span>
      <button onClick={() => onDelete(id)} className="task-delete-btn">
        Apagar
      </button>
    </div>
  );
};

export default Task;