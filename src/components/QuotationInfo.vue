<template>
  <div id="info">
      
      <div id="top-info">
        <div id="left-top-info">
          <arrow-left-icon size="2.5x" opacity="0.3" class="custom-class"></arrow-left-icon>
          <div id="quotation">
            Cotação
          </div>  
          <div id="quotation-id">
            0010.98
          </div> 
          <Info description="Nome: " value="Cotação de Porcas para Mariana"/> 
          <Info description="Parcelamento: " value="12x"/> 
          <Info description="RCS: " value="2"/> 
        </div>
        <div id="right-top-info">
          <Button name="ENVIAR COTAÇÃO"/>          
          <edit-icon size="1.2x" class="custom-class"></edit-icon>
          <x-circle-icon size="1.2x" class="custom-class"></x-circle-icon>
          <more-horizontal-icon size="1.2x" class="custom-class"></more-horizontal-icon>
        </div>
      </div>

      <div id="bottom-info">
        <Info description="Destino: " value="Goitacazes"/> 
        <Info description="IncoTermS: " value="Goitacazes"/> 
        <Info description="Criado em: " value="21/01/2020"/> 
        <Info description="Concluído em: " value="22/01/2020"/> 
      </div>

      <div id="lines">
        LINHAS
        <div id="horizontal-line"></div>
        <search-icon size="1.2x" class="custom-class"></search-icon>
        <sliders-icon size="1.2x" class="custom-class"></sliders-icon>
        <columns-icon size="1.2x" class="custom-class"></columns-icon>
      </div>
      
  </div>
</template>

<script>
import { ArrowLeftIcon, EditIcon, XCircleIcon, MoreHorizontalIcon, SearchIcon, ColumnsIcon, SlidersIcon } from 'vue-feather-icons'
import Info from './Info.vue'
import Button from './Button.vue'

export default {
  name: 'QuotationInfo',
  props: {
  },
  components: {
    ArrowLeftIcon,
    EditIcon,
    XCircleIcon,
    MoreHorizontalIcon,
    SearchIcon,
    ColumnsIcon,
    SlidersIcon,
    Info,
    Button     
  }
}
</script>

<style scoped>
#info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2%
}
#top-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
#bottom-info {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 50vw;
  margin-left: 5vw;
}
#lines {
  display: flex;
  justify-content: space-between;
  flex-direction: row;  
  font-size: 1vw;
  font-weight: 600;
  margin-top: 5vh;
}
#quotation {
  font-size: 1.8vw;
  font-weight: 600;
  color: #585858
}
#quotation-id {
  font-size: 1.4vw;
  color: #585858
}
#horizontal-line {
  width: 83vw;
  border-bottom: 1px solid;
  margin-bottom: 0.6%;
  opacity: 0.2  ;
}
#left-top-info {
  width: 55vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
#right-top-info {
  width: 19vw;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
</style>
