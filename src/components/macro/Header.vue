<template>
  <header class="header">
    <router-link to="/" class="logo" title="Home">
      <img src="../../assets/shared/logo.svg" alt="">
    </router-link>
    <div class="line" v-if="device === 'desktop'"></div>
    <button v-if="device === 'mobile'" class="menu-button" @click="openMenu">
      <img v-if="!menu" src="../../assets/shared/icon-hamburger.svg" alt="">
      <img v-else src="../../assets/shared/icon-close.svg" alt="">
    </button>
    <div class="menu" v-if="menu || device != 'mobile'">
      <nav class="menu-links">
        <router-link v-for="(link, i) in links" :key="i" class="menu-link" :to="link.url" :title="link.title" @click="openMenu"><span v-if="device != 'tablet'" class="bold">0{{i}}</span> {{link.name}}</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menu: false,
      device: '',
      links: [
        {
          url: '/',
          name: 'HOME',
          title: 'Home'
        },
        {
          url: '/destination',
          name: 'DESTINATION',
          title: 'Destination'
        },
        {
          url: '/crew',
          name: 'CREW',
          title: 'Crew'
        },
        {
          url: '/technology',
          name: 'TECHNOLOGY',
          title: 'Technology'
        },
      ]
    }
  },
  methods: {
    openMenu() {
      this.menu = !(this.menu)
    }
  },
  created() {
    window.innerWidth < 768 ?
      this.device = 'mobile' :
        window.innerWidth < 992 ?
          this.device = 'tablet' : 
            this.device = 'desktop'
    window.addEventListener('resize', () => {
      window.innerWidth < 768 ?
        this.device = 'mobile' :
          window.innerWidth < 992 ?
            (
              this.device = 'tablet',
              this.menu = false
              ) : 
              this.device = 'desktop'
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/variables.scss';
.header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  @media screen and (min-width: $tablet) {
    padding: 0;
  }
  @media screen and (min-width: $desktop) {
    padding-top: 2rem;
  }
  .logo {
    @media screen and (min-width: $tablet) {
      margin: 0 3rem;
    }
  }
  .line {
    margin-right: -2rem;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,.3);
  }
  .menu {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #c8c8c81a;
    backdrop-filter: blur(30px);
    padding-top: 5rem;
    width: 70vw;
    height: 100vh;
    @media screen and (min-width: $tablet) {
      min-width: max-content;
      max-width: max-content;
      height: auto;
      padding-top: 0;
      padding: 0 1rem;
      position: unset;
    }
    @media screen and (min-width: $desktop) {
      padding: 0 5rem;
    }
    &-button {
      background: none;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    &-links {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: $tablet) {
        flex-direction: row;
      }
    }
    .menu-link {
      color: $white;
      margin: .7rem 0;
      padding: .5rem 3rem;
      text-decoration: none;
      transition: border-bottom .2s;
      @media screen and (min-width: $tablet) {
        padding: 2rem 0;
        margin: 0 2rem;
      }
      .bold {
        font-weight: 700;
      }
      &.router-link-exact-active {
        border-right: 3px solid $white;
        @media screen and (min-width: $tablet) {
          border-right: none;
          border-bottom: 3px solid $white;
        }
      }
      @media screen and (min-width: $desktop) {
        border-bottom: 0 solid rgba(255,255,255,.5);
        &:not(.router-link-exact-active):hover {
          border-bottom-width: 3px;
        }
      }
    }
  }
}
</style>