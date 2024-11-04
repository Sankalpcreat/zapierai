import React, { useEffect } from 'react';
import { useWorkflowContext } from '../contexts/WorkflowContext';
import { getWorkflowById } from '../services/workflowService';
import { useParams } from 'react-router-dom';

const WorkflowDetail: React.FC = () => {
  const { workflowId } = useParams<{ workflowId: string }>();
  const { activeWorkflow, setActiveWorkflow } = useWorkflowContext();

  useEffect(() => {
    const loadWorkflow = async () => {
      if (workflowId) {
        const workflow = await getWorkflowById(parseInt(workflowId));
        setActiveWorkflow(workflow);
      }
    };
    loadWorkflow();
  }, [workflowId]);

  return (
    <div className="workflow-detail">
      <h1 className="text-2xl mb-4">Workflow: {activeWorkflow?.name}</h1>
      <p>Created at: {activeWorkflow?.createdAt}</p>
      <p>Updated at: {activeWorkflow?.updatedAt}</p>

      <h2 className="text-xl mt-4">Tasks in this Workflow</h2>
      <ul>
        {activeWorkflow?.tasks?.map((task) => (
          <li key={task.id}>{task.name} - {task.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkflowDetail;
