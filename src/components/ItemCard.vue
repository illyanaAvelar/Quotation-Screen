<template>
<div id="item-card">
  <x-circle-icon size="1.5x" color="white" fill="red"></x-circle-icon>
  <help-circle-icon size="1.5x" color="white" fill="rgb(201, 180, 22)"></help-circle-icon>
</div>
</template>

<script>
import { HelpCircleIcon, XCircleIcon} from 'vue-feather-icons'

export default {
  name: 'ItemCard',
  props: {
  },
  components: {
    HelpCircleIcon,
    XCircleIcon 
  }
}
</script>

<style scoped>
#item-card {
  width: 80wh;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 7px;
  height: 110px;
  margin-bottom: 10px;
}
</style>
