// src/contexts/TaskContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/task';
import { getTasksByWorkflowId, updateTask } from '../services/taskService';

interface TaskContextType {
  tasks: Task[];
  fetchTasks: (workflowId: number) => Promise<void>;
  updateTaskStatus: (taskId: number, status: string) => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async (workflowId: number) => {
    try {
      const data = await getTasksByWorkflowId(workflowId);
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const updateTaskStatus = async (taskId: number, status: string) => {
    try {
      const updatedTask = await updateTask(taskId, status);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
