<template>
  <Header/>
  <Main/>
</template>

<script>
import Header from './components/macro/Header.vue'
import Main from './components/macro/Main.vue'
// import data from './data/data.js'

export default {
  name: 'App',
  components: {Header, Main},
  data() {
    return {
      // data
    }
  },
  provide() {
    let device = ''
    window.innerWidth < 768 ?
      device = 'mobile' :
        window.innerWidth < 992 ?
          device = 'tablet' : 
            device = 'desktop'
    window.addEventListener('resize', () => {
      window.innerWidth < 768 ?
        device = 'mobile' :
          window.innerWidth < 992 ?
            device = 'tablet' : 
              device = 'desktop'
    })
    return {
      device
    }
  },
  // computed: {
  //   device() {
  //     let device = ''
  //     window.innerWidth < 768 ?
  //       device = 'mobile' :
  //         window.innerWidth < 992 ?
  //           device = 'tablet' : 
  //             device = 'desktop'
  //     window.addEventListener('resize', () => {
  //       window.innerWidth < 768 ?
  //         device = 'mobile' :
  //           window.innerWidth < 992 ?
  //             device = 'tablet' : 
  //               device = 'desktop'
  //     })
  //     return device
  //   }
  // }
}
</script>


<style lang="scss">
@import './assets/style/index.scss';
</style>
