interface Node {
    id: string;
    type: string;
    data?: object; // or define a more specific type for your data structure
  }
  
  export const validateNodeName = (name: string): boolean => {
    return name.length > 0 && /^[a-zA-Z0-9\s]+$/.test(name);
  };
  
  export const validateWorkflowStructure = (nodes: Node[]): boolean => {
    return nodes.length > 0 && nodes.every(node => node.id && node.type);
  };
  