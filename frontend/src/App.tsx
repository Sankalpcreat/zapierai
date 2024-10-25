import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { WorkflowContextProvider } from './contexts/WorkflowContext';      
import { TaskContextProvider } from './contexts/TaskContext';              
import { ImageGenerationContextProvider } from './contexts/ImageGenerationContext'; 

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WorkflowDetail from './pages/WorkflowDetail';
import ImageGenerationPage from './pages/ImageGenerationPage';

const App: React.FC = () => {
  return (
    <Router>
      <WorkflowContextProvider>
        <TaskContextProvider>
          <ImageGenerationContextProvider>
            <div className='app-container'>
              <Routes>
              <Route path="/" element={<Home />} />               
                <Route path="/dashboard" element={<Dashboard />} />   
                <Route path="/workflow/:id" element={<WorkflowDetail />} /> 
                <Route path="/ai-image-generation" element={<ImageGenerationPage />} /> 
              </Routes>
            </div>
          </ImageGenerationContextProvider>
        </TaskContextProvider>
      </WorkflowContextProvider>
    </Router>
  );
};

export default App;
