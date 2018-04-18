<template>
  <div id="app">
    <app-header></app-header>
    <home></home>
    <navList></navList>
    <appFooter></appFooter>
  </div>
</template>

<script>
import AppHeader from './components/commons/Header/Header';
import Home from './components/pages/Home/Home';
import navList from './components/pages/Home/navList';
import appFooter from './components/commons/Footer/Footer';
export default {
  name: 'App',
  components: {
    Home,AppHeader,navList,appFooter
  }
}
</script>

<style lang="scss">
 
</style>
