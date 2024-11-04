import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/task';

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: number, status: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTaskStatus = (taskId: number, status: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
