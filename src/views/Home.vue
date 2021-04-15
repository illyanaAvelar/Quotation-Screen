<template>
  <div>
    <Header/>
    <QuotationInfo/>
    <!-- v-for não está renderizando -->
    <!-- <tr v-for="quotation of quotations" :key="quotation.quotationId">
      <ItemCard quote={{ quotation }}/>
    </tr> -->
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
    <ItemCard/>
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import QuotationInfo from '../components/QuotationInfo.vue'
import ItemCard from '../components/ItemCard.vue'
import Quotations from '../services/quotations'

export default {
 
 data () {
    return {
      quotations: []
    }
  },

  created () {
    Quotations.list().then(response => {
      this.quotations = response.data
    })
  },
  
  name: 'App',
  components: {
    Header,
    QuotationInfo,
    ItemCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fafafa;
  height: 100vh;
}
</style>