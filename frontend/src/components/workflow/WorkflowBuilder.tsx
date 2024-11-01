// The main interface for building workflows with drag-and-drop functionality.
import React, { useState } from 'react';
import { useWorkflowContext } from '../../contexts/WorkflowContext';
import TaskNode from './TaskNode';
import TaskConnection from './TaskConnection';
import WorkflowSidebar from './WorkflowSidebar';
import AIImageGenerationNode from '../AI/ImageGenerationForm.tsx'; 


interface TaskNodeType {
  id: number;
  name: string;
  type: 'ai-image-generation' | 'api' | 'email'; // Task types
  config?: Record<string, any>;
}

interface TaskConnectionType {
  from: TaskNodeType;
  to: TaskNodeType;
}

const WorkflowBuilder: React.FC = () => {
  const { activeWorkflow } = useWorkflowContext();  
  const [taskNodes, setTaskNodes] = useState<TaskNodeType[]>([]); 
  const [connections, setConnections] = useState<TaskConnectionType[]>([]);  


  const addTaskNode = (newTaskNode: TaskNodeType) => {
    setTaskNodes([...taskNodes, newTaskNode]);
  };

 
  const addConnection = (fromTask: TaskNodeType, toTask: TaskNodeType) => {
    setConnections([...connections, { from: fromTask, to: toTask }]);
  };

  return (
    <div className="workflow-builder-container">
      <h1 className="text-2xl mb-4">Workflow Builder: {activeWorkflow?.name}</h1>

      <div className="workflow-builder-grid">

        <WorkflowSidebar onAddTask={addTaskNode} />

      
        <div className="workflow-canvas">
          {taskNodes.map((task, index) => (
            task.type === 'ai-image-generation' ? 
              <AIImageGenerationNode key={index} task={task} /> : 
              <TaskNode key={index} task={task} />
          ))}


          {connections.map((connection, index) => (
            <TaskConnection key={index} from={connection.from} to={connection.to} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
