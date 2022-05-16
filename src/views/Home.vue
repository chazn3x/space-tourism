<template>
  <div class="background"></div>
  <div class="content">
    <div class="text">
      <h5 class="sub-title">SO, YOU WANT TO TRAVEL TO</h5>
      <h1 class="title">SPACE</h1>
      <p class="paragraph">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <router-link to="/destination" class="button">
      EXPLORE
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
.background {
  background-image: url('../assets/home/background-home-mobile.jpg');
  @media screen and (min-width: $tablet) {
    background-image: url('../assets/home/background-home-tablet.jpg');
  }
  @media screen and (min-width: $desktop) {
    background-image: url('../assets/home/background-home-desktop.jpg');
  }
}
.content {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 120px 2rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $tablet) {
    padding-top: 200px;
  }
  @media screen and (min-width: $desktop) {
    padding: 280px 150px 2rem;
    text-align: left;
    flex-direction: row;
  }
  .sub-title {
    color: $blue;
  }
  .title {
    margin: 2rem 0;
  }
  .paragraph {
    max-width: 415px;
    margin: 0 auto;
    @media screen and (min-width: $desktop) {
      margin: 0;
      max-width: 445px;
    }
  }
  .button {
    width: 150px;
    height: 150px;
    font-size: 20px;
    letter-spacing: 1.25px;
    margin: 50px auto 0;
    outline: 0 solid rgba(200,200,200,.1);
    transition: outline .3s;
    &:hover {
      outline-width: 3rem;
    }
    @media screen and (min-width: $tablet) {
      width: 242px;
      height: 242px;
      font-size: 32px;
      letter-spacing: 2px;
      margin: 150px auto 0;
      &:hover {
        outline-width: 5rem;
      }
    }
    @media screen and (min-width: $desktop) {
      width: 274px;
      height: 274px;
      margin: auto 0 0 auto;
    }
  }
}
</style>