import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { TaskType } from '../../types/workflow';
import { TaskConfig, AIImageGenerationConfig, ApiTaskConfig } from '../../types/task';

interface TaskConfigModalProps {
  isOpen: boolean;
  task: { id: number; name: string; type: TaskType; config?: TaskConfig };
  onClose: () => void;
  onSave: (taskConfig: TaskConfig) => void;
}

const TaskConfigModal: React.FC<TaskConfigModalProps> = ({ isOpen, task, onClose, onSave }) => {
  const [config, setConfig] = useState<TaskConfig>(task.config || {});

  useEffect(() => {
    setConfig(task.config || {});
  }, [task]);

  const handleSave = () => {
    if (validateConfig()) {
      onSave({ ...config });
      onClose();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const validateConfig = (): boolean => {
    if (task.type === TaskType.AI_IMAGE_GENERATION) {
      const aiConfig = config as AIImageGenerationConfig;
      return !!aiConfig.prompt && aiConfig.width > 0 && aiConfig.height > 0;
    }
    if (task.type === TaskType.API_CALL) {
      const apiConfig = config as ApiTaskConfig;
      return !!apiConfig.endpoint;
    }
    return true;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="task-config-modal"
      aria={{
        labelledby: 'task-config-title',
      }}
    >
      <h2 id="task-config-title">Configure {task.name}</h2>

      {task.type === TaskType.AI_IMAGE_GENERATION && (
        <>
          <label htmlFor="prompt">Prompt</label>
          <input
            id="prompt"
            type="text"
            value={(config as AIImageGenerationConfig).prompt || ''}
            onChange={(e) => setConfig({ ...config, prompt: e.target.value })}
            className="input-field"
          />

          <label htmlFor="width">Width</label>
          <input
            id="width"
            type="number"
            min="1"
            value={(config as AIImageGenerationConfig).width || 512}
            onChange={(e) => setConfig({ ...config, width: parseInt(e.target.value, 10) })}
            className="input-field"
          />

          <label htmlFor="height">Height</label>
          <input
            id="height"
            type="number"
            min="1"
            value={(config as AIImageGenerationConfig).height || 512}
            onChange={(e) => setConfig({ ...config, height: parseInt(e.target.value, 10) })}
            className="input-field"
          />
        </>
      )}

      {task.type === TaskType.API_CALL && (
        <>
          <label htmlFor="endpoint">API Endpoint</label>
          <input
            id="endpoint"
            type="text"
            value={(config as ApiTaskConfig).endpoint || ''}
            onChange={(e) => setConfig({ ...config, endpoint: e.target.value })}
            className="input-field"
          />

          <label htmlFor="apiKey">API Key</label>
          <input
            id="apiKey"
            type="text"
            value={(config as ApiTaskConfig).apiKey || ''}
            onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
            className="input-field"
          />
        </>
      )}

      <div className="modal-actions">
        <button onClick={handleSave} className="btn btn-primary">Save</button>
        <button onClick={onClose} className="btn btn-secondary">Cancel</button>
      </div>
    </Modal>
  );
};

export default TaskConfigModal;
