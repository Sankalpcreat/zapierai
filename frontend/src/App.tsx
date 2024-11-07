import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkflowBuilderPage from './pages/WorkflowBuilderPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import { WorkflowProvider } from './contexts/WorkflowContext';
import { TaskProvider } from './contexts/TaskContext';
import { ImageGenerationProvider } from './contexts/ImageGenerationContext';

const App: React.FC = () => {
  return (
    <WorkflowProvider>
      <TaskProvider>
        <ImageGenerationProvider>
          <div className="app-container font-sans bg-gray-100 min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workflow-builder" element={<WorkflowBuilderPage />} />
              <Route path="/task/:taskId" element={<TaskDetailsPage />} />
            </Routes>
          </div>
        </ImageGenerationProvider>
      </TaskProvider>
    </WorkflowProvider>
  );
};

export default App;
