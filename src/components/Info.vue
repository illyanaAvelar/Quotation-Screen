<template>
  <div id="fields" :style="infoStyle">
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
    value: String,
    isColumn: Boolean  
  },
  computed: {
    infoStyle() {
      return {
        "flex-direction": this.isColumn ? "column" : "row",
        "font-size": this.isColumn ? "12px" : "14px"
      }
    }
  }
}
</script>

<style scoped>
#fields {
  display: flex;
  flex-direction: row;
}
#description {
  color: #706f6f;
  text-align: start;
  margin-right: 4px;
}
#value {
  font-size: 14px;  
  color: rgb(34, 34, 34);
  font-weight: 550;
  text-align: start;
  margin-top: 1px;
}
</style>
