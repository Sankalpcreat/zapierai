import { useState, useCallback } from 'react';
import { Node, Edge } from 'reactflow';

const useTaskNode = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const addNode = useCallback((newNode: Node) => {
    setNodes((prevNodes) => [...prevNodes, newNode]);
  }, []);

  const updateNode = useCallback((nodeId: string, updatedData: Partial<Node['data']>) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...updatedData } } : node
      )
    );
  }, []);

  const removeNode = useCallback((nodeId: string) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    setEdges((prevEdges) => prevEdges.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  }, []);

  return {
    nodes,
    edges,
    addNode,
    updateNode,
    removeNode,
    setEdges,
  };
};

export default useTaskNode;
