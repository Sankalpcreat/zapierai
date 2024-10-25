import React from 'react';
import { Link } from 'react-router-dom';
import { useWorkflowContext } from '../contexts/WorkflowContext';

const Dashboard: React.FC = () => {
  const { workflows, addWorkflow } = useWorkflowContext();


  const handleCreateWorkflow = () => {
    const newWorkflow = {
      id: Date.now(), 
      name: `New Workflow - ${new Date().toLocaleTimeString()}`,
      description: 'A new workflow description',
      tasks: [],
      status: 'pending',
    };
    addWorkflow(newWorkflow);
  };

  return (
    <div className="dashboard-container">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>


      <button onClick={handleCreateWorkflow} className="btn btn-success mb-4">
        Create New Workflow
      </button>

     
      {workflows.length > 0 ? (
        <ul className="workflow-list">
          {workflows.map((workflow) => (
            <li key={workflow.id} className="workflow-item">
              <Link to={`/workflow/${workflow.id}`} className="text-blue-600 underline">
                {workflow.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workflows available. Please create a new workflow.</p>
      )}
    </div>
  );
};

export default Dashboard;
