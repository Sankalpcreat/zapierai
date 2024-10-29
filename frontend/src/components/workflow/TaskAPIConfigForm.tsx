// A form to configure API-based tasks.
import React, { useState } from 'react';

interface TaskAPIConfigFormProps {
  initialConfig: {
    endpoint?: string;
    apiKey?: string;
  };
  onSave: (config: { endpoint: string; apiKey: string }) => void;
}

const TaskAPIConfigForm: React.FC<TaskAPIConfigFormProps> = ({ initialConfig, onSave }) => {
  const [endpoint, setEndpoint] = useState(initialConfig.endpoint || '');
  const [apiKey, setApiKey] = useState(initialConfig.apiKey || '');

  const handleSave = () => {
    if (endpoint && apiKey) {
      onSave({ endpoint, apiKey });
    } else {
      alert('Please provide both an API endpoint and an API key.');
    }
  };

  return (
    <div className="api-config-form">
      <h3 className="text-lg font-semibold mb-4">API Task Configuration</h3>

      <label htmlFor="endpoint">API Endpoint</label>
      <input
        id="endpoint"
        type="text"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        className="input-field mb-4"
        placeholder="Enter the API endpoint"
        required
      />

      <label htmlFor="apiKey">API Key</label>
      <input
        id="apiKey"
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        className="input-field mb-4"
        placeholder="Enter your API key"
        required
      />

      <button onClick={handleSave} className="btn btn-primary mt-4">Save Configuration</button>
    </div>
  );
};

export default TaskAPIConfigForm;
