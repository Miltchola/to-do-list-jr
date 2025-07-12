import React from "react";
import Task from "../Task/Task";

interface TaskType {
  id: string;
  title: string;
  completed: boolean;
}

interface CompletedTaskProps {
  tasks: TaskType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const CompletedTask: React.FC<CompletedTaskProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "#4caf50" }}>Concluídas</h2>
      {/* Estilização para evitar criar um noov CSS*/}

      {tasks.length === 0 && (
        <p style={{ color: "#888", textAlign: "center" }}>Nenhuma tarefa concluída</p>
      )}

      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CompletedTask;