<template>
  <div id="fields">
    <div id="description">
        {{description}}
    </div>  
    <div id="value">
        {{value}}
    </div>  
  </div>
</template>

<script>

export default {
  name: 'Info',
  props: {
    description: String,
    value: String  
  }
}
</script>

<style scoped>
#fields {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
