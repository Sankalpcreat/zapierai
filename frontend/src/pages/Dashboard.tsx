// src/pages/Dashboard.tsx

import React from 'react';
import Button from '../components/UI/Button';

const Dashboard: React.FC = () => {
  // Example data to display (can be replaced by real data from the backend)
  const workflows = [
    { id: 1, name: 'Workflow 1', description: 'First workflow example' },
    { id: 2, name: 'Workflow 2', description: 'Second workflow example' },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Manage your workflows and tasks.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">{workflow.name}</h2>
            <p className="text-gray-500">{workflow.description}</p>
            <Button className="mt-4">
              View Workflow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
