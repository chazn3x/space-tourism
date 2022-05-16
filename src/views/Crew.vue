<template>
  <div class="background"></div>
  <div class="container">
    <h5><span class="number">02</span>MEET YOUR CREW</h5>
    <div class="content">
      <div class="crew-image">
        <img :src="require(`../assets/crew/${data.crew[index].images.png}`)" :alt="data.crew[index].name + ' image'">
      </div>
      <div class="text">
        <div class="section-dots">
          <div class="dot" v-for="(member, i) in data.crew" :key="i" @click="index = i" :class="{'active' : index == i}"></div>
        </div>
        <div class="info">
          <h4 class="role">{{data.crew[index].role.toUpperCase()}}</h4>
          <h3 class="name">{{data.crew[index].name.toUpperCase()}}</h3>
          <p class="paragraph">{{data.crew[index].bio}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data/data.json'
export default {
  name: 'CrewView',
  data() {
    return {
      data,
      index: 0
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables.scss';
.background {
  background-image: url('../assets/crew/background-crew-mobile.jpg');
  @media screen and (min-width: $tablet) {
    background-image: url('../assets/crew/background-crew-tablet.jpg');
  }
  @media screen and (min-width: $desktop) {
    background-image: url('../assets/crew/background-crew-desktop.jpg');
  }
}
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  @media screen and (min-width: $tablet) {
    padding: 3rem 3rem 0;
    h5 {
      text-align: left;
    }
  }
  @media screen and (min-width: $desktop) {
    padding: 4rem 8rem 0;
    text-align: left;
  }
  .content {
    padding: 0 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $tablet) {
      padding: 0 8rem;
      flex-direction: column-reverse;
    }
    @media screen and (min-width: $desktop) {
      flex-direction: row-reverse;
      padding: 0;
    }
    .crew-image {
      margin: 3rem auto;
      width: 100%;
      height: 250px;
      border-bottom: 1px solid rgba(255,255,255,.3);
      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
      @media screen and (min-width: $tablet) {
        border-bottom: none;
        height: 570px;
        margin: 0 auto;
      }
      @media screen and (min-width: $desktop) {
        margin-top: -2rem;
        margin-left: 3rem;
        height: 100%;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: $tablet) {
        margin-top: 50px;
        flex-direction: column-reverse;
        justify-content: flex-end;
      }
      .section-dots {
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        @media screen and (min-width: $desktop) {
          justify-content: flex-start;
        }
        .dot {
          margin: 0 10px;
          cursor: pointer;
          background-color: rgba(255,255,255,.2);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: background-color .2s;
          &.active {
            background-color: $white;
          }
          @media screen and (min-width: $desktop) {
            width: 15px;
            height: 15px;
            margin-top: 4rem;
            &:first-of-type {
              margin-left: 0;
            }
            &:not(.active):hover {
              background-color: rgba(255,255,255,.5);
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
        .role {
          color: rgba(255,255,255,.5);
          margin-bottom: .5rem;
        }
        .paragraph {
          padding-bottom: 1rem;
          margin-top: 1.5rem;
          @media screen and (min-width: $tablet) {
            padding-bottom: 3rem;
          }
          @media screen and (min-width: $desktop) {
            display: block;
            max-width: 450px;
          }
        }
      }
    }
  }
}
</style>