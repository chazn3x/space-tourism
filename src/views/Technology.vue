<template>
<div class="background"></div>
  Technology
</template>

<script>
export default {
  name: 'TechnologyView'
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/technology/background-technology-mobile.jpg');
  @media screen and (min-width: 768px) {
    background-image: url('../assets/technology/background-technology-tablet.jpg');
  }
  @media screen and (min-width: 992px) {
    background-image: url('../assets/technology/background-technology-desktop.jpg');
  }
}
</style>