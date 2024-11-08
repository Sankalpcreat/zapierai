import { Node } from 'reactflow';

export const findNodeById = (nodes: Node[], id: string): Node | undefined => {
  return nodes.find((node) => node.id === id);
};

export const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const calculateNodePosition = (x: number, y: number, offset: number = 50): { x: number; y: number } => {
  return { x: x + offset, y: y + offset };
};
