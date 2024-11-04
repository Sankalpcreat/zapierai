import { useEffect } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

const useWebSocket = () => {
  const { updateTaskStatus } = useTaskContext();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws/tasks');

    ws.onmessage = (event) => {
      const { taskId, status } = JSON.parse(event.data);
      updateTaskStatus(taskId, status);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => ws.close();
  }, [updateTaskStatus]);
};

export default useWebSocket;
