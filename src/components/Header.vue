<template>
<div>
  <div id="header">
    <div id="tabs">
      <div id="provider">
        Fornecedor ▾
      </div>
      <router-link to="/general" id="tab">
        Visão Geral
      </router-link>
      <router-link to="/" id="tab">
        Cotações
      </router-link>
      <router-link to="/profile" id="tab">
        Perfil
      </router-link>
      <router-link to="/suppliers" id="tab">
        Fornecedores
      </router-link>
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
a:-webkit-any-link {
  text-decoration: none
}
#tab {
  color: white;
  opacity: 0.8;
  font-size: 14px;
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
#provider:hover {
  cursor: pointer;
  pointer-events: 'auto';
  opacity: 0.8
}
#current {
  background-color: white;
  height: 4vh;
  width: 100%;
  box-shadow: 0 4px 2px -2px #e4e4e4;
  padding: 15px;
  text-align: start;
  display: flex;
  flex-direction: row;
}
#circle {
  background-color: #39a8b3;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#current-writing {
  color: #39a8b3;
  font-weight: 500;
  margin-left: 7px;
  margin-top: 2px;
}
</style>
