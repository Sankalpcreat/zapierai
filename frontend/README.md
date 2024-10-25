# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


/src
│
├── /components                              # Reusable UI components
│   ├── /workflow                             # Workflow-related components
│   │   ├── WorkflowBuilder.tsx               # Main drag-and-drop workflow builder
│   │   ├── TaskNode.tsx                      # Represents individual tasks in the workflow
│   │   ├── ConnectionLine.tsx                # Visual representation of connections between tasks
│   │   └── WorkflowSidebar.tsx               # Sidebar for adding tasks to the workflow
│   ├── /modals                               # Modal components for task configurations and details
│   │   ├── TaskConfigModal.tsx               # Modal to configure each task's input/output
│   │   └── WorkflowSummaryModal.tsx          # Modal to summarize and execute workflows
│   ├── /UI                                   # General UI components (buttons, inputs, etc.)
│   │   ├── Button.tsx                        # Reusable button component
│   │   ├── Dropdown.tsx                      # Reusable dropdown component
│   │   └── ProgressBar.tsx                   # Real-time task execution progress bar
│   └── Header.tsx                            # Header/navigation component
│
├── /pages                                   # Pages of the application
│   ├── Home.tsx                             # Home page for listing workflows
│   ├── Dashboard.tsx                        # Dashboard to manage workflows and tasks
│   ├── WorkflowDetail.tsx                   # Detailed page for viewing workflow details and execution status
│   ├── TaskDetail.tsx                       # Page for viewing specific task execution and status
│
├── /services                                # Handles API calls to the backend
│   ├── api.ts                               # Centralized API service (Axios/Fetch)
│   ├── workflowService.ts                   # API calls related to workflows (create, fetch, update)
│   ├── taskService.ts                       # API calls related to tasks (create, fetch status, update)
│
├── /hooks                                   # Custom React hooks
│   ├── useFetchWorkflows.ts                 # Hook to fetch workflows from the backend
│   ├── useFetchTasks.ts                     # Hook to fetch tasks and task statuses
│   ├── useWebSocket.ts                      # Hook for WebSocket real-time updates on task execution
│
├── /contexts                                # Context for global state management
│   ├── WorkflowContext.tsx                  # Context for managing the global state of workflows
│   ├── TaskContext.tsx                      # Context for managing global state of tasks and their status
│
├── /types                                   # TypeScript types and interfaces
│   ├── workflow.ts                          # Types for workflows (WorkflowCreate, WorkflowResponse, etc.)
│   ├── task.ts                              # Types for tasks (TaskCreate, TaskResponse, TaskStatus, etc.)
│   └── user.ts                              # Types for user authentication, login, etc.
│
├── /styles                                  # Tailwind CSS or custom styling
│   ├── globals.css                          # Global styles and Tailwind CSS configurations
│   ├── theme.ts                             # Theme definitions for consistent design (optional)
│
├── App.tsx                                  # Main App component
├── index.tsx                                # Entry point for React
├── tailwind.config.js                       # Tailwind CSS configuration
├── tsconfig.json                            # TypeScript configuration
└── package.json                             # Project dependencies and scripts
