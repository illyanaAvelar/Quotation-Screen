<template>
  <button type="button">
    {{name}}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String
  }
}
</script>

<style scoped>
button {
  background-color: #54a9b1; 
  color: white;
  font-size: 12;
  font-weight: 600;
  border-radius: 5px;
  height: 30px;
  border: none;
}
button:hover {
  cursor: pointer;
  pointer-events: 'auto';
  opacity: 0.8
}
</style>
