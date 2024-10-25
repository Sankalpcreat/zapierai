// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WorkflowDetail from './pages/WorkflowDetails';
import Header from './components/Header'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> 
      <div className="container mx-auto px-4 py-6"> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/workflow/:id" element={<WorkflowDetail />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;
