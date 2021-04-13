<template>
  <div id="app">
    <Header/>
    <QuotationInfo/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuotationInfo from './components/QuotationInfo.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuotationInfo
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
}
</style>
