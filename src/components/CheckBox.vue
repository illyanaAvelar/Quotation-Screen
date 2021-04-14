<template>
  <div>   
      <input type="checkbox"/>
      <label>{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    label: String
  }
}
</script>

<style scoped>
label {
  font-size: 13.5px;
  padding: 8px;
  font-weight: 510;
}
input[type="checkbox"]:checked {
  color: #127c84;
}
</style>
