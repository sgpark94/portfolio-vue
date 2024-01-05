<script setup>
import { siteText } from "../constants";
</script>

<template>
  <section id="site">
    <div class="site__inner">
      <h2 class="site__title">Major Works <em>주요 작업물</em></h2>
      <div class="site__wrap">
        <article class="site__item" v-for="(list, key) in siteText" :key="key">
          <div class="site__img">
            <img :src="list.img" alt="">
          </div>
          <div class="site__cnt">
            <span class="num">{{ key + 1 }}.</span>
            <div class="text">
              <div v-for="(text, i) in list.text" :key="i">{{ text }}</div>
            </div>
            <h3 class="title">{{ list.title }}</h3>
            <div class="btn">
              <a :href="list.view" target="_blank">view</a>
            </div>
            <div class="info">
              <span>{{ list.info[0] }}</span>
              <span>{{ list.info[1] }}</span>
              <span>{{ list.info[2] }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "site",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";

.site__inner {
  padding: 16px;
  .site__title {
    position: sticky;
    top: 110px;
    left: 0;
    width: 70%;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100);
    margin-bottom: 100px;
    @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 10vw;
      font-size: 30px;
      height: auto;
      top: 68px;
      z-index: 1000;
      background-color: var(--mainBg-color);
    }
    em {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2;
    }
  }
  .site__wrap {
    .site__item {
      display: flex;
      height: 70vh;
      @include flex-center;
      position: sticky;
      left: 0;
      gap: 20px;
      padding: 0 20px;
      @media (max-width: 500px) {
        flex-direction: column;
      }
      &:nth-child(1) {
        background-color: var(--subBg100);
        top: 180px;
        @media (max-width: 800px) {
          top: 140px;
        }
      }
      &:nth-child(2) {
        background-color: var(--subBg200);
        top: 200px;
        @media (max-width: 800px) {
          top: 160px;
        }
      }
      &:nth-child(3) {
        background-color: var(--subBg300);
        top: 220px;
        @media (max-width: 800px) {
          top: 180px;
        }
      }
      &:nth-child(4) {
        background-color: var(--subBg400);
        top: 240px;
        @media (max-width: 800px) {
          top: 200px;
        }
      }
      &:nth-child(5) {
        background-color: var(--subBg500);
        top: 260px;
        @media (max-width: 800px) {
          top: 220px;
        }
      }
      .site__img {
        img {
          max-width: 30vw;
          max-height: 30vw;
          @media (max-width: 500px) {
            max-width: 50vw;
            max-height: 50vw;
          }
        }
      }
      .num {
        font-size: 5vw;
        line-height: 1;
        font-weight: 900;
        font-family: var(--mainNum-font);
        position: absolute;
        left: 1vw;
        top: 1vw;
        @media (max-width: 800px) {
          font-size: 60px;
          left: 20px;
          top: 30px;
        }
      }
      .text {
        text-align: center;
        margin-bottom: 1rem;
        > div {
          font-size: 3vw;
          line-height: 1;
          font-weight: 900;
          text-transform: uppercase;
          text-decoration: underline;
          font-family: var(--mainEng-font);
          @media (max-width: 800px) {
            font-size: 26px;
          }
        }
      }
      .title {
        font-family: var(--mainKor-font);
        margin-bottom: 1rem;
      }
      .btn {
        a {
          text-decoration: underline;
          text-transform: uppercase;
          color: var(--black200);
          font-size: 1rem;
          transition: all 0.3s;
          margin: 0 2px;
          &:hover {
            color: var(--black);
          }
        }
      }
      .info {
        position: absolute;
        left: 0;
        bottom: 3%;
        width: 98%;
        margin-left: 1%;
        border-top: 1px solid var(--black);
        border-bottom: 1px solid var(--black);
        display: flex;
        justify-content: space-between;
        @media (max-width: 800px) {
          flex-direction: column;
          width: 90%;
          margin-left: 5%;
          padding: 5px 0;
        }
        span {
          font-family: var(--mainKor-font);
          font-size: 12px;
          padding: 3px 0;
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
