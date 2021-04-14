<template>
  <div id="input-wrapper">
    <input type="text" :placeholder="description" :style="inputStyle"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    description: String,
    size: {
      type: String,
      default: "small"
    }
  },
  computed: {
    inputStyle() {
      return {
        "width": this.size == "small" ? "85px" : (this.size === "medium" ? "135px" : "160px"),
      }
    }
  }
}
</script>

<style scoped>
input {
  height: 26px;
  border: none;
  box-shadow: 4px 4px 4px -2px #e4e4e4;
  border-radius: 2px;
  border-bottom: 1px solid #39a8b3;
  font-weight: 600;
}
::placeholder {
  color: rgb(34, 34, 34);
}
</style>
