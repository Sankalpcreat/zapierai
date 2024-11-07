import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WorkflowProvider } from './contexts/WorkflowContext';
import { TaskProvider } from './contexts/TaskContext';
import { ImageGenerationProvider } from './contexts/ImageGenerationContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WorkflowDetail from './pages/WorkflowDetail';
import TaskDetail from './pages/TaskDetail';
import ImageGenerationPage from './pages/ImageGenerationPage';

const App: React.FC = () => {
  return (
    <WorkflowProvider>
      <TaskProvider>
        <ImageGenerationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/:workflowId" element={<Dashboard />} />
            <Route path="/workflows/:workflowId" element={<WorkflowDetail />} />
            <Route path="/tasks/:taskId" element={<TaskDetail />} />
            <Route path="/image-generation" element={<ImageGenerationPage />} />
          </Routes>
        </ImageGenerationProvider>
      </TaskProvider>
    </WorkflowProvider>
  );
};

export default App;
