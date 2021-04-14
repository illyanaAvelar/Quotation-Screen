<template>
<div id="item-card">
  <div id="border"></div>
  <div id="card-content">
    <div id="upper">

      <div id="upper-left">
        <div id="item">
          <Info description="ITEM" value="Porc vag ferrovs n225p43ge" :isColumn="true"/>
        </div>
        <div id="other-infos">
          <Info description="QTD" value="120" :isColumn="true"/>
          <Info description="UNIDADE" value="Peças" :isColumn="true"/>
          <Info description="DATA DE NECESSIDADE" value="11/12/2020" :isColumn="true"/>
        </div>
      </div>
      <div id="upper-right">
        <CheckBox label="Substituição tributária"/>
        <CheckBox label="Incentivo fiscal"/>
        <CheckBox label="Produto de origem importada"/>
      </div>
    </div>
    <div id="bottom">
      <div id="bottom-left">
      </div>
      <div id="bottom-right">
        <Button name="ENVIAR"/>
        <x-circle-icon size="1.5x" color="white" fill="red"></x-circle-icon>
        <help-circle-icon size="1.5x" color="white" fill="rgb(201, 180, 22)"></help-circle-icon>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { HelpCircleIcon, XCircleIcon} from 'vue-feather-icons'
import Button from './Button.vue'
import CheckBox from './CheckBox.vue'
import Info from './Info.vue'

export default {
  name: 'ItemCard',
  props: {
  },
  components: {
    HelpCircleIcon,
    XCircleIcon,
    Info,
    CheckBox,
    Button,
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
  margin: 18px 27px 0px 27px;
  display: flex;
  flex-direction: row;
}
#card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
#border {
  height: 100%;
  width: 20px;
  background-color: #f29f1a;
  border-radius: 7px 0 0 7px;
}
#other-infos {
  display: flex;
  flex-direction: row;
}
#upper-left {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
}
#upper-right {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
}
#upper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
}
#bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
}
#bottom-left {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
}
#bottom-right {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
}
@media (orientation:portrait), (max-width: 900px)
{
  #other-infos {
    flex-direction: column;
  }
}
</style>
