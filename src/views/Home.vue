<template>
  <div>
    <Header/>
    <QuotationInfo/>
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

export default {
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