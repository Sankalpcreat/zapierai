import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar w-64 bg-white shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Available Tasks</h2>
      <ul className="task-list space-y-3">
        <li className="task-item p-2 border rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200">
          API Call Task
        </li>
        <li className="task-item p-2 border rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200">
          AI Image Generation
        </li>
        <li className="task-item p-2 border rounded-md bg-gray-100 cursor-pointer hover:bg-gray-200">
          Conditional Check
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
