<template>
<div class="background"></div>
  Destination
</template>

<script>
export default {
  name: 'DestinationView'
}
</script>

<style lang="scss" scoped>
.background {
  background-image: url('../assets/destination/background-destination-mobile.jpg');
  @media screen and (min-width: 768px) {
    background-image: url('../assets/destination/background-destination-tablet.jpg');
  }
  @media screen and (min-width: 992px) {
    background-image: url('../assets/destination/background-destination-desktop.jpg');
  }
}
</style>