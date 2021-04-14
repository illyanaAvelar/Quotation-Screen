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
#description {
  font-size: 1vw;
  color: #706f6f
}
#value {
  font-size: 1vw;
  color: #000000;
  font-weight: 550;
}
</style>
