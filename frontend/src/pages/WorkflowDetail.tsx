import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchTasks from '../hooks/useFetchTasks';

const WorkflowDetail: React.FC = () => {
  const { workflowId } = useParams<{ workflowId: string }>();
  const { tasks, loading, error } = useFetchTasks(Number(workflowId));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="workflow-detail-page">
      <h1 className="text-2xl mb-4">Workflow {workflowId}</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.name} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkflowDetail;
