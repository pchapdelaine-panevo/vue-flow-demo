<script>
import { Handle, Position } from '@vue-flow/core';

export default {
  name: 'CylinderNode',
  components: { Handle },
  props: {
    data: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    }
  },
  setup() {
    return { Position }
  }
};
</script>

<template>
  <div class="cylinder-node">
    <div class="cylinder-top"></div>
    <div class="cylinder-body">
      <div class="label">{{ data.label || 'Cylinder' }}</div>
    </div>
    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>

<style scoped>
.cylinder-node {
  width: 100px;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  cursor: default;
  outline: none;
  box-sizing: border-box;
  perspective: 1000px;
}

.cylinder-top {
  width: 80%;
  height: 16px;
  background: #f5f5f5;
  border-radius: 50%;
  border: 2px solid #333;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  transform-style: preserve-3d;
}

/* Ellipse effect for the top */
.cylinder-top::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
}

.cylinder-body {
  width: 80%;
  height: 60px;
  background: #e0e0e0;
  border: 2px solid #333;
  border-top: none;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 8px;
  position: relative;
  overflow: hidden;
  margin-top: -8px;
  z-index: 2;
}

/* Side shading for 3D effect */
.cylinder-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 60%;
  bottom: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
  pointer-events: none;
}

/* Curve highlight */
.cylinder-body::after {
  content: '';
  position: absolute;
  top: 0;
  left: 15%;
  right: 15%;
  height: 30%;
  background: rgba(255,255,255,0.2);
  border-radius: 0 0 50% 50%;
  pointer-events: none;
}

.label {
  color: #333;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  word-break: break-word;
  pointer-events: none;
  position: relative;
  z-index: 1;
  margin-top: 4px;
  text-shadow: 0 1px 1px rgba(255,255,255,0.8);
}

/* Dark mode styles */
:deep(.dark) .cylinder-top {
  background: #444;
  border-color: #222;
}

:deep(.dark) .cylinder-top::before {
  background: #555;
  box-shadow: 0 0 8px rgba(0,0,0,0.5);
}

:deep(.dark) .cylinder-body {
  background: #555;
  border-color: #333;
}

:deep(.dark) .cylinder-body::after {
  background: rgba(255,255,255,0.1);
}

:deep(.dark) .label {
  color: #eee;
  text-shadow: 0 1px 1px rgba(0,0,0,0.5);
}

/* Remove text selection highlight */
.cylinder-node *::selection,
.cylinder-node *::-moz-selection {
  background: transparent;
}

/* For older Firefox versions */
*::-moz-focus-inner {
  border: 0 !important;
}
</style>
