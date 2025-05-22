<script setup>
import useDragAndDrop from './useDnD'

const { onDragStart } = useDragAndDrop()

// Define node types with their labels and colors
const nodeTypes = [
  { type: 'input', label: 'Input Node', color: '#3b82f6' },
  { type: 'default', label: 'Default Node', color: '#10b981' },
  { type: 'output', label: 'Output Node', color: '#ef4444' },
  { type: 'cylinder', label: 'Cylinder', color: '#8b5cf6' }
]
</script>

<template>
  <aside>
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes">
      <div 
        v-for="node in nodeTypes" 
        :key="node.type"
        class="node-item"
        :class="`node-${node.type}`"
        :draggable="true" 
        @dragstart="onDragStart($event, node.type)"
        :style="{ '--node-color': node.color }"
      >
        {{ node.label }}
      </div>
    </div>
  </aside>
</template>

<style scoped>
aside {
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.description {
  margin-bottom: 15px;
  color: #64748b;
  font-size: 0.9em;
  text-align: center;
}

.nodes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.node-item {
  padding: 10px 12px;
  border-radius: 6px;
  background: white;
  border: 1px solid #e2e8f0;
  cursor: grab;
  font-size: 0.85em;
  text-align: center;
  transition: all 0.2s ease;
  color: white;
}

.node-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.node-item:active {
  cursor: grabbing;
  transform: translateY(0);
}

.node-input { background-color: var(--node-color); }
.node-default { background-color: var(--node-color); }
.node-output { background-color: var(--node-color); }
.node-cylinder { background-color: var(--node-color); }
</style>
