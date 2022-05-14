<template>
  <header class="header">
    <div class="logo">
      <img src="../../assets/shared/logo.svg" alt="">
    </div>
    <nav>
      <router-link class="prova" to="/">00 Home</router-link>
      <router-link class="prova" to="/destination">01 Destination</router-link>
      <router-link class="prova" to="/crew">02 Crew</router-link>
      <router-link class="prova" to="/technology">03 Technology</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .logo {
    padding: 2rem;
  }
  .prova {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>