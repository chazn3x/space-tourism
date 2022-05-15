<template>
<div class="background"></div>
  Crew
</template>

<script>
export default {
  name: 'CrewView'
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/crew/background-crew-mobile.jpg');
  @media screen and (min-width: 768px) {
    background-image: url('../assets/crew/background-crew-tablet.jpg');
  }
  @media screen and (min-width: 992px) {
    background-image: url('../assets/crew/background-crew-desktop.jpg');
  }
}
</style>