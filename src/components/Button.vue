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
  background-color: #39a8b3; 
  color: white;
  font-size: 12;
  font-weight: 600;
  border-radius: 5px;
  height: 30px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}
button:hover {
  cursor: pointer;
  pointer-events: 'auto';
  opacity: 0.8
}
</style>
