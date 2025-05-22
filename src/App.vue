<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import DropzoneBackground from './DropzoneBackground.vue'
import Sidebar from './Sidebar.vue'
import useDragAndDrop from './useDnD'
import CylinderNode from './components/CylinderNode.vue'
import { initialNodes, initialEdges } from './initial-elements'

// Register custom node types
const nodeTypes = {
  cylinder: CylinderNode
}

// Initialize Vue Flow state
const vueFlowRef = ref(null)
const { onConnect, addEdges, nodes, onNodeDrag, addNodes, fitView, setNodes, setEdges } = useVueFlow({
  nodes: [],
  edges: [],
  snapGrid: [15, 15],
  snapToGrid: true,
  connectionLineType: 'smoothstep',
  nodeDragThreshold: 0,
  defaultEdgeOptions: {
    type: 'smoothstep',
    animated: false, // Disable animation for solid lines
    style: {
      stroke: '#555',
      strokeWidth: 2,
    },
    markerEnd: {
      type: 'arrowclosed',
      color: '#000',
    },
  },
  fitViewOnInit: true
})

// Load initial nodes and edges
onMounted(() => {
  setNodes(initialNodes)
  setEdges(initialEdges)
  nextTick(() => {
    fitView()
  })
})

const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()

onConnect(addEdges)
</script>

<template>
  <div class="dnd-flow" @drop="onDrop">
    <VueFlow 
      :nodes="nodes" 
      :node-types="nodeTypes"
      :default-viewport="{ zoom: 1.8 }"
      :min-zoom="0.5"
      :max-zoom="4"
      :connection-line-type="'smoothstep'"
      fit-view
      @dragover="onDragOver" 
      @dragleave="onDragLeave"
    >
      <DropzoneBackground
        :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
      >
        <p v-if="isDragOver">Drop here</p>
      </DropzoneBackground>
    </VueFlow>

    <Sidebar />
  </div>
</template>
