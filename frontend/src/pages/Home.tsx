import React from 'react';
import Button from '../components/UI/Button';  

const Home: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Workflow Builder</h1>
      <p className="text-gray-600 mb-8">
        Start building and managing workflows to automate your tasks.
      </p>
      <Button>
        Get Started
      </Button>
    </div>
  );
};

export default Home;
