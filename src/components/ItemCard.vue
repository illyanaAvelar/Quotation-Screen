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
        <form>
          <Input description="Prazo de entrega" size="medium"/>
          <Input description="NCM" size="medium"/>
          <Input description="IPI (%)"/>
          <Input description="ICMS"/>
          <Input description="PIS/COFINS"/>
        </form>
      </div>
      <div id="bottom-right">
        <form>
          <Input description="Base Red."/>
          <Input description="Preço bruto unit." size="medium"/>
          <Input description="Peso (c/ embalagem)" size="medium"/>
        </form>
        <div id="icons">
          <Button name="ENVIAR"/>
          <x-circle-icon size="2x" color="white" fill="red" id="feather-icon"></x-circle-icon>
          <help-circle-icon size="2x" color="white" fill="rgb(201, 180, 22)" id="feather-icon"></help-circle-icon>
        </div>
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
import Input from './Input.vue'

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
    Input,
  }
}
</script>

<style scoped>
#item-card {
  width: 80wh;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 7px;
  height: 120px;
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
  width: 60%;
  justify-content: space-around;
}
#upper-left {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  margin-right: 25px;
}
#upper-right {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-around;
}
#upper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
  margin-bottom: 10px;
}
#bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
  margin-top: 10px;
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
#item {
  max-width: 40%;
}
#icons {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 45%;
  align-items: center;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-right: 15px;
  align-items: center;
}
#feather-icon:hover {
  cursor: pointer;
  pointer-events: 'auto';
  opacity: 0.7
}
@media (orientation:portrait), (max-width: 900px)
{
  #upper {
    flex-direction: column;
  }
  #bottom {
    flex-direction: column;
  }
  #bottom-right {
    width: 100%;
  }
  #bottom-left {
    width: 100%;
  }
  #upper-right {
    width: 100%;
  }
  #upper-left {
    width: 100%;
  }  
  #item-card {
    height: 240px;
  }
}
</style>
