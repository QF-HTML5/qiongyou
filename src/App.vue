<template>
  <div id="app">
    <router-view></router-view>
    <appFooter></appFooter>
    
  </div>
</template>

<script>

import appFooter from './components/commons/Footer/Footer';
import quanBox from './components/pages/quan/quan'
export default {
  name: 'App',
  components: {
    appFooter,quanBox
  }
}
</script>

<style lang="scss">
 
</style>
