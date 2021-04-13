<template>
<div id="header">
  <div id="tabs">
    <div id=provider>
      Fornecedor ▾
    </div>
    <div id="tab">
      Visão Geral
    </div>
    <div id="tab">
      Cotações
    </div>
    <div id="tab">
      Perfil
    </div>
    <div id="tab">
      Fornecedores
    </div>
  </div>
  <div id="icons"> 
    <search-icon size="1.5x" id="feather-icon"></search-icon>
    <bell-icon size="1.5x" id="feather-icon"></bell-icon>
    <settings-icon size="1.5x" id="feather-icon"></settings-icon>
  </div>
</div>
</template>

<script>
import { SearchIcon, BellIcon, SettingsIcon } from 'vue-feather-icons'

export default {
  name: 'Header',
  props: {
  },
  components: {
    SearchIcon,
    BellIcon,
    SettingsIcon 
  }
}
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: #127C84;
}
#icons {
  width: 12%;
  display: flex;
  justify-content: space-around;
  align-self: center;
}
#feather-icon {
  color: white;
  opacity: 0.8
}
#feather-icon:hover {
  cursor: pointer;
  pointer-events: 'auto';
  opacity: 1
}
#tabs {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: 2vw;
}
#tab {
  color: white;
  opacity: 0.8;
  font-size: 1vw;
  margin: 8vh
}
#tab:hover {
  cursor: pointer;
  pointer-events: 'auto';
  opacity: 1
}
#provider {
  color: white;
  align-self: center;
  font-size: 1.5vw;
}
</style>
