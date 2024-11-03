import React, { useState } from 'react';
import { useWorkflowContext } from '../../contexts/WorkflowContext';
import TaskNode from './TaskNode';
import TaskConnection from './TaskConnection';
import WorkflowSidebar from './WorkflowSidebar';
import AIImageGenerationNode from '../AI/ImageGenerationForm.tsx';

interface TaskNodeType {
  id: number;
  name: string;
  type: 'ai-image-generation' | 'api' | 'email';
  config?: Record<string, unknown>;  
}

interface TaskConnectionType {
  from: number; 
  to: number;  
}

const WorkflowBuilder: React.FC = () => {
  const { activeWorkflow } = useWorkflowContext();
  const [taskNodes, setTaskNodes] = useState<TaskNodeType[]>([]);
  const [connections, setConnections] = useState<TaskConnectionType[]>([]);

  // Function to add a new task node to the workflow
  const addTaskNode = (newTaskNode: TaskNodeType) => {
    setTaskNodes((prevNodes) => [...prevNodes, newTaskNode]);
  };

  // Function to add a connection between two tasks
  const addConnection = (fromTaskId: number, toTaskId: number) => {
    setConnections((prevConnections) => [
      ...prevConnections,
      { from: fromTaskId, to: toTaskId },
    ]);
  };

  // Handler for adding a connection, to be passed down to child nodes if needed
  const handleConnection = (fromTaskId: number, toTaskId: number) => {
    addConnection(fromTaskId, toTaskId);
  };

  return (
    <div className="workflow-builder-container">
      <h1 className="text-2xl mb-4">Workflow Builder: {activeWorkflow?.name}</h1>

      <div className="workflow-builder-grid">
        {/* Sidebar component for adding new tasks */}
        <WorkflowSidebar onAddTask={addTaskNode} />

        <div className="workflow-canvas">
          {/* Render each task node */}
          {taskNodes.map((task) =>
            task.type === 'ai-image-generation' ? (
              <AIImageGenerationNode key={task.id} task={task} />
            ) : (
              <TaskNode
                key={task.id}
                task={task}
                onConnect={(toTaskId) => handleConnection(task.id, toTaskId)}
              />
            )
          )}

          {/* Render each connection between tasks */}
          {connections.map((connection, index) => {
            const fromNode = taskNodes.find((node) => node.id === connection.from);
            const toNode = taskNodes.find((node) => node.id === connection.to);

            return (
              fromNode &&
              toNode && (
                <TaskConnection
                  key={index}
                  from={fromNode}
                  to={toNode}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
