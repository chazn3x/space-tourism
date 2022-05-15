<template>
  <div class="background"></div>
  Home
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/home/background-home-mobile.jpg');
  @media screen and (min-width: 768px) {
    background-image: url('../assets/home/background-home-tablet.jpg');
  }
  @media screen and (min-width: 992px) {
    background-image: url('../assets/home/background-home-desktop.jpg');
  }
}
</style>