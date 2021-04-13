<template>
  <div id="info">
      
      <div id="top-info">
        <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
        <div id="quotation">
            Cotação
        </div>  
        <div id="quotation-id">
            MOCKAR
        </div> 
        <Info description="Nome: " value="Cotação de Porcas para Mariana"/> 
        <Info description="Parcelamento: : " value="12x"/> 
        <Info description="RCS: " value="2"/> 
      </div>

      <div id="bottom-info">
          
      </div>

      <div id="lines">
          
      </div>
      
      <arrow-left-icon size="1.5x" class="custom-class"></arrow-left-icon>
      <edit-icon size="1.5x" class="custom-class"></edit-icon>
      <x-circle-icon size="1.5x" class="custom-class"></x-circle-icon>
      <more-horizontal-icon size="1.5x" class="custom-class"></more-horizontal-icon>
      <search-icon size="1.5x" class="custom-class"></search-icon>
      <columns-icon size="1.5x" class="custom-class"></columns-icon>
      <sliders-icon size="1.5x" class="custom-class"></sliders-icon>
  </div>
</template>

<script>
import { ArrowLeftIcon, EditIcon, XCircleIcon, MoreHorizontalIcon, SearchIcon, ColumnsIcon, SlidersIcon } from 'vue-feather-icons'
import Info from './Info.vue'
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
    Info     
  }
}
</script>

<style scoped>
#info {
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
}
#top-info {
    display: flex;
    flex-direction: row;
}
</style>
