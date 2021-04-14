<template>
<div>
  <div id="header">
    <div id="tabs">
      <div id="provider">
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
  <div id="current">
    <div id="circle">28</div>
    <div id="current-writing">Atuais</div>
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
  background-color: #127c84;
  box-shadow: 0 4px 2px -2px #e4e4e4;
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
#current {
  background-color: white;
  height: 4vh;
  width: 100%;
  box-shadow: 0 4px 2px -2px #e4e4e4;
  padding: 15px;
}
#circle {
  background-color: #127c84;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  text-align: center;
}
#current-writing {
  color: #127c84;
}
</style>
