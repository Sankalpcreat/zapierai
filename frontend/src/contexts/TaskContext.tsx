import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Task } from '../types/task';

// Define the shape of the context
interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: number, status: string) => void;
  removeTask: (taskId: number) => void;
}

// Default values for the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Provider component to manage and provide task state globally
export const TaskContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTaskStatus = (taskId: number, status: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  const removeTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskContextProvider');
  }
  return context;
};
