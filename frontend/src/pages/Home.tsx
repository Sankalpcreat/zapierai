import React from 'react';
import useFetchWorkflows from '../hooks/useFetchWorkflows';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { workflows, loading, error } = useFetchWorkflows();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-page">
      <h1 className="text-2xl mb-4">Workflows</h1>
      <ul className="workflow-list">
        {workflows.map((workflow) => (
          <li key={workflow.id} className="workflow-item">
            <Link to={`/workflows/${workflow.id}`}>
              {workflow.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
