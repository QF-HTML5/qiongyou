<template>
  <div id="app">
     <router-view></router-view>
    <appFooter></appFooter>
    
  </div>
</template>

<script>

import appFooter from './components/commons/Footer/Footer';

export default {
  name: 'App',
  components: {
    appFooter
  }
}
</script>

<style lang="scss">
 
</style>
