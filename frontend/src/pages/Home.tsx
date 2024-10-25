import React from "react";
import {Link} from 'react-router-dom'
import { useWorkflowContext } from "../contexts/WorkflowContext";

const Home: React.FC = () => {
  const { workflows } = useWorkflowContext(); 

  return(
    <div className="home-container">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Workflow Builder APP</h1>
      <p className="mb-6">
        Use our platform to create and manage powerful workflows with ease. Get started by navigating to your dashboard or creating a new workflow.
      </p>
      
      <Link to="/dashboard" className="btn btn-primary mb-4">Go to Dashboard</Link>

      {workflows.length > 0 && (
        <div>
          <h2 className="text-2xl mb-3">Available Workflows</h2>
          <ul className="workflow-list">
            {workflows.map((workflow) => (
              <li key={workflow.id} className="workflow-item">
                <Link to={`/workflow/${workflow.id}`} className="text-blue-600 underline">
                  {workflow.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;