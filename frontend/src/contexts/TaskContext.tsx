import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types/task';
import { getTasksByWorkflowId } from '../services/taskService';

interface TaskContextType {
  tasks: Task[];
  fetchTasks: (workflowId: number) => Promise<void>;
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

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks }}>
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
