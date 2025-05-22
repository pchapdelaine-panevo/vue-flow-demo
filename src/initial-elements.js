import { MarkerType } from '@vue-flow/core';

export const initialNodes = [
  {
    id: 'start',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 50 },
  },
  {
    id: 'process',
    data: { label: 'Process' },
    position: { x: 250, y: 150 },
  },
  {
    id: 'storage',
    type: 'cylinder',
    data: { label: 'Storage' },
    position: { x: 350, y: 250 },
  },
  {
    id: 'end',
    type: 'output',
    data: { label: 'End' },
    position: { x: 250, y: 450 },
  }
];

export const initialEdges = [
  {
    id: 'e1',
    source: 'start',
    target: 'process',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#000',
    },
  },
  {
    id: 'e2',
    source: 'process',
    target: 'storage',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#000',
    },
    animated: true,
  },
  {
    id: 'e3',
    source: 'storage',
    target: 'end',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#000',
    },
  }
];