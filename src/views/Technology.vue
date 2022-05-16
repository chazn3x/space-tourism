<template>
  <div class="background"></div>
  <div class="container">
    <h5><span class="number">03</span>SPACE LAUNCH 101</h5>
    <div class="content">
      <div class="technology-image">
        <img v-if="device != 'desktop'" :src="require(`../assets/technology/${data.technology[index].images.landscape}`)" :alt="data.technology[index].name + ' image'">
        <img v-else :src="require(`../assets/technology/${data.technology[index].images.portrait}`)" :alt="data.technology[index].name + ' image'">
      </div>
      <div class="text">
        <div class="section-buttons">
          <div class="button" v-for="(technology, i) in data.technology" :key="i" @click="index = i" :class="{'active' : index == i}">{{i + 1}}</div>
        </div>
        <div class="info">
          <p class="sub-heading-2">THE TERMINOLOGY...</p>
          <h3 class="name">{{data.technology[index].name.toUpperCase()}}</h3>
          <p class="paragraph">{{data.technology[index].description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data/data.json'
export default {
  name: 'TechnologyView',
  data() {
    return {
      data,
      index: 0,
      device: ''
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
@import '../assets/style/variables.scss';
.background {
  background-image: url('../assets/technology/background-technology-mobile.jpg');
  @media screen and (min-width: $tablet) {
    background-image: url('../assets/technology/background-technology-tablet.jpg');
  }
  @media screen and (min-width: $desktop) {
    background-image: url('../assets/technology/background-technology-desktop.jpg');
  }
}
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: $tablet) {
    padding-top: 3rem;
    h5 {
      text-align: left;
      padding-left: 3rem;
    }
  }
  @media screen and (min-width: $desktop) {
    padding: 4rem 0 0 8rem;
    text-align: left;
    h5 {
      text-align: left;
      padding-left: 0;
    }
  }
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $desktop) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 0;
    }
    .technology-image {
      margin: 3rem auto 2rem;
      width: 100%;
      height: 200px;
      img {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      @media screen and (min-width: $tablet) {
        border-bottom: none;
        height: 370px;
        margin: 3rem auto 0;
      }
      @media screen and (min-width: $desktop) {
        margin: 0 0 0 3rem;
        width: 500px;
        height: 520px;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      padding: 0 1.5rem;
      @media screen and (min-width: $tablet) {
        margin-top: 50px;
      }
      @media screen and (min-width: $desktop) {
        padding: 0;
        flex-direction: row;
      }
      .section-buttons {
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        @media screen and (min-width: $desktop) {
          flex-direction: column;
          justify-content: flex-start;
        }
        .button {
          margin: 0 10px;
          cursor: pointer;
          background-color: transparent;
          color: $white;
          border: .5px solid rgba(255,255,255,.5);
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          transition: background-color .2s, border .2s;
          &.active {
            background-color: $white;
            color: black;
          }
          @media screen and (min-width: $desktop) {
            margin-top: 4rem;
            margin: 1rem 4rem 1rem 0;
            width: 4.5rem;
            height: 4.5rem;
            font-size: 32px;
            &:not(.active):hover {
              border: .5px solid $white;
            }
          }
        }
      }
      .info {
        .name {
          @media screen and (min-width: $desktop) {
            width: max-content;
          }
        }
        .sub-heading-2 {
          margin-bottom: .5rem;
        }
        .paragraph {
          padding-bottom: 1rem;
          max-width: 450px;
          margin: 1.5rem auto 0;
          @media screen and (min-width: $tablet) {
            padding-bottom: 3rem;
          }
          @media screen and (min-width: $desktop) {
            display: block;
            max-width: 450px;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>