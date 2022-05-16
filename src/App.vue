<template>
  <Header/>
  <Main/>
</template>

<script>
import Header from './components/macro/Header.vue'
import Main from './components/macro/Main.vue'

export default {
  name: 'App',
  components: {Header, Main}
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
</style>
