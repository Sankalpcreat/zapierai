// A modal for configuring task-specific settings
import React,{useState} from "react";
import Modal from 'react-modal';

interface TaskConfigModalProps {
    isOpen: boolean;
    task: any; 
    onClose: () => void;
    onSave: (taskConfig: any) => void;
  }

  const TaskConfigModal: React.FC<TaskConfigModalProps> = ({ isOpen, task, onClose, onSave }) => {
    const [config, setConfig] = useState(task.config || {});  
  
    const handleSave = () => {
      onSave({ ...task, config });
      onClose();
    };
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="task-config-modal">
          <h2>Configure {task.name}</h2>
    
         
          {task.type === 'ai-image-generation' && (
            <>
              <label htmlFor="prompt">Prompt</label>
              <input
                id="prompt"
                type="text"
                value={config.prompt || ''}
                onChange={(e) => setConfig({ ...config, prompt: e.target.value })}
                className="input-field"
              />
    
              <label htmlFor="width">Width</label>
              <input
                id="width"
                type="number"
                value={config.width || 512}
                onChange={(e) => setConfig({ ...config, width: parseInt(e.target.value) })}
                className="input-field"
              />
    
              <label htmlFor="height">Height</label>
              <input
                id="height"
                type="number"
                value={config.height || 512}
                onChange={(e) => setConfig({ ...config, height: parseInt(e.target.value) })}
                className="input-field"
              />
            </>
          )}
    
       
          {task.type === 'api-call' && (
            <>
              <label htmlFor="endpoint">API Endpoint</label>
              <input
                id="endpoint"
                type="text"
                value={config.endpoint || ''}
                onChange={(e) => setConfig({ ...config, endpoint: e.target.value })}
                className="input-field"
              />
    
              <label htmlFor="apiKey">API Key</label>
              <input
                id="apiKey"
                type="text"
                value={config.apiKey || ''}
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