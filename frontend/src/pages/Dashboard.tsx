import React, { useState } from 'react';
import useFetchWorkflows from '../hooks/useFetchWorkflows';
import { createWorkflow } from '../services/workflowService';

const Dashboard: React.FC = () => {
  const { workflows, loading, error } = useFetchWorkflows();
  const [newWorkflowName, setNewWorkflowName] = useState('');

  const handleCreateWorkflow = async () => {
    if (!newWorkflowName) return;
    try {
      await createWorkflow({ name: newWorkflowName });
      setNewWorkflowName(''); // Reset input
    } catch (err) {
      console.error('Failed to create workflow');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard-page">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      <div className="new-workflow-form">
        <input
          type="text"
          value={newWorkflowName}
          onChange={(e) => setNewWorkflowName(e.target.value)}
          placeholder="Enter new workflow name"
          className="input-field"
        />
        <button onClick={handleCreateWorkflow} className="btn btn-primary">
          Create Workflow
        </button>
      </div>

      <ul className="workflow-list">
        {workflows.map((workflow) => (
          <li key={workflow.id}>{workflow.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
