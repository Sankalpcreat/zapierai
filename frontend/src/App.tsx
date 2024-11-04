import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
          <Router>
            <div className="app-container">
              <header className="app-header">
                <h1 className="app-title">Workflow AI Management</h1>
                <nav>
                  <a href="/">Home</a> | <a href="/image-generation">AI Image Generation</a>
                </nav>
              </header>

              <main className="app-main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/workflows/:workflowId" element={<Dashboard />} />
                  <Route path="/workflows/:workflowId/detail" element={<WorkflowDetail />} />
                  <Route path="/tasks/:taskId" element={<TaskDetail />} />
                  <Route path="/image-generation" element={<ImageGenerationPage />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </main>
            </div>
          </Router>
        </ImageGenerationProvider>
      </TaskProvider>
    </WorkflowProvider>
  );
};

export default App;
