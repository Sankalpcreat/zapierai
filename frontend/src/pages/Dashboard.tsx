import React, { useEffect, useState } from 'react';
import { useWorkflowContext } from '../contexts/WorkflowContext';
import { getWorkflowById } from '../services/workflowService';
import { fetchTasksByWorkflow } from '../services/taskService';
import { Task } from '../types/task';
import { useParams, Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { workflowId } = useParams<{ workflowId: string }>();
  const { activeWorkflow, setActiveWorkflow } = useWorkflowContext();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadWorkflowData = async () => {
      if (workflowId) {
        const workflow = await getWorkflowById(parseInt(workflowId));
        setActiveWorkflow(workflow);
        const taskData = await fetchTasksByWorkflow(parseInt(workflowId));
        setTasks(taskData);
      }
    };
    loadWorkflowData();
  }, [workflowId, setActiveWorkflow]);

  return (
    <div className="dashboard-page">
      <h1 className="text-2xl mb-4">Dashboard: {activeWorkflow?.name}</h1>
      <Link to={`/workflows/${workflowId}/tasks/create`} className="btn btn-primary mb-4">Add Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.name} - {task.type}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
