import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWorkflowContext } from '../contexts/WorkflowContext';
import { createWorkflow, getAllWorkflows } from '../services/workflowService';

const Home: React.FC = () => {
  const { workflows, setWorkflows } = useWorkflowContext();
  const [newWorkflowName, setNewWorkflowName] = useState('');

  useEffect(() => {
    const loadWorkflows = async () => {
      const data = await getAllWorkflows();
      setWorkflows(data);
    };
    loadWorkflows();
  }, [setWorkflows]);

  const handleCreateWorkflow = async () => {
    if (newWorkflowName) {
      const newWorkflow = await createWorkflow({ name: newWorkflowName });
      setWorkflows([...workflows, newWorkflow]);
      setNewWorkflowName('');
    }
  };

  return (
    <div className="home-page">
      <h1 className="text-2xl mb-4">Workflows</h1>
      <input
        type="text"
        value={newWorkflowName}
        onChange={(e) => setNewWorkflowName(e.target.value)}
        placeholder="New workflow name"
      />
      <button onClick={handleCreateWorkflow} className="btn btn-primary">Create Workflow</button>
      <ul>
        {workflows.map((workflow) => (
          <li key={workflow.id}>
            <Link to={`/workflows/${workflow.id}`}>{workflow.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
