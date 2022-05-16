<template>
  <div class="background"></div>
  <div class="container">
    <h5><span class="number">01</span>PICK YOUR DESTINATION</h5>
    <div class="content">
      <img class="destination-image" :src="require(`../assets/destination/${data.destinations[index].images.png}`)" :alt="data.destinations[index].name + ' image'">
      <div class="text">
        <nav class="section-links">
          <a class="link" v-for="(link, i) in data.destinations" :key="i" @click="index = i" :class="{'active' : index == i}">{{link.name.toUpperCase()}}</a>
        </nav>
        <h2 class="title">{{data.destinations[index].name.toUpperCase()}}</h2>
        <p class="paragraph">{{data.destinations[index].description}}</p>
        <div class="info">
          <div class="distance">
            <p class="sub-heading-2">AVG. DISTANCE</p>
            <p class="sub-heading">{{data.destinations[index].distance.toUpperCase()}}</p>
          </div>
          <div class="travel">
            <p class="sub-heading-2">EST. TRAVEL TIME</p>
            <p class="sub-heading">{{data.destinations[index].travel.toUpperCase()}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data/data.json'
export default {
  name: 'DestinationView',
  data() {
    return {
      data,
      index: 0
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
.background {
  background-image: url('../assets/destination/background-destination-mobile.jpg');
  @media screen and (min-width: $tablet) {
    background-image: url('../assets/destination/background-destination-tablet.jpg');
  }
  @media screen and (min-width: $desktop) {
    background-image: url('../assets/destination/background-destination-desktop.jpg');
  }
}
.container {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem 2rem;
  text-align: center;
  @media screen and (min-width: $tablet) {
    padding: 3rem 3rem 2rem;
    h5 {
      text-align: left;
    }
  }
  @media screen and (min-width: $desktop) {
    padding: 4rem 8rem 2rem;
    text-align: left;
  }
  .content {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $tablet) {
      padding: 0 4rem;
    }
    @media screen and (min-width: $desktop) {
      flex-direction: row;
      padding: 0;
    }
    .destination-image {
      margin: 3rem auto;
      width: 50vw;
      height: 50vw;
      @media screen and (min-width: $tablet) {
        width: 28vw;
        height: 28vw;
        max-width: 445px;
        max-height: 445px;
        margin: 4rem auto;
      }
      @media screen and (min-width: $desktop) {
        margin-left: 3rem;
      }
    }
    .text {
      @media screen and (min-width: $desktop) {
        margin-left: 150px;
      }
      .section-links {
        margin-bottom: 2rem;
        .link {
          padding: 1rem 0;
          margin: 0 1rem;
          cursor: pointer;
          transition: border-bottom .2s;
          &.active {
            border-bottom: 3px solid $white;
          }
          @media screen and (min-width: $desktop) {
            border-bottom: 0 solid rgba(255,255,255,.5);
            &:first-of-type {
              margin-left: 0;
            }
            &:not(.active):hover {
              border-bottom-width: 3px;
            }
          }
        }
      }
      .paragraph {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid rgba(255,255,255,.3);
        @media screen and (min-width: $tablet) {
          padding-bottom: 3rem;
        }
        @media screen and (min-width: $tablet) {
          padding-bottom: 3rem;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        .sub-heading {
          margin: 1rem 0;
        }
        @media screen and (min-width: $tablet) {
          flex-direction: row;
          justify-content: space-evenly;
        }
        @media screen and (min-width: $desktop) {
          justify-content: flex-start;
          .distance {
            margin-right: 4rem;
          }
        }
      }
    }
  }
}
</style>