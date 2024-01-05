<script setup>
import { portText } from "../constants";
</script>

<template>
  <section id="port">
    <div class="port__inner">
      <h2 class="port__title">portfolio <em>포폴 작업물</em></h2>
      <div class="port__wrap">
        <article class="port__item" v-for="(port, key) in portText" :key="key">
          <span class="num">{{ port.num }}.</span>
          <a :href="port.code" target="_blank" class="img">
            <img :src="port.img" :alt="port.name" />
          </a>
          <h3 class="title">{{ port.title }}</h3>
          <p class="desc">{{ port.desc }}</p>
          <a :href="port.view" target="_blank" v-if="port.view" class="site">사이트 보기</a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function () {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      const horSection = gsap.utils.toArray(".port__item");

      gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#port",
          start: "top 100px",
          end: "+=3000",
          pin: true,
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
  },
};
</script>

<style lang="scss">
#port {
  width: 100%;
  margin-top: 30vh;
  // overflow: hidden;
}
.port__inner {
  padding: 16px;

  .port__title {
    width: 100%;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100);
    margin-bottom: 16px;
    text-indent: -0.26vw;

    em {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2;
    }
  }
  .port__wrap {
    display: flex;
    flex-wrap: wrap;
    width: 15000px;

    .port__item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 500px;
      height: 70vh;
      background-color: var(--subBg100);
      padding: 2.5rem;
      margin-right: 20px;
      font-family: "Gowun Batang";  

      &:nth-child(1) {
        background-color: var(--subBg100);
      }
      &:nth-child(2) {
        background-color: var(--subBg200);
      }
      &:nth-child(3) {
        background-color: var(--subBg300);
      }
      &:nth-child(4) {
        background-color: var(--subBg400);
      }
      &:nth-child(5) {
        background-color: var(--subBg500);
      }
      &:nth-child(6) {
        background-color: var(--subBg100);
      }
      &:nth-child(7) {
        background-color: var(--subBg200);
      }
      &:nth-child(8) {
        background-color: var(--subBg300);
      }
      &:nth-child(9) {
        background-color: var(--subBg400);
      }
      &:nth-child(10) {
        background-color: var(--subBg500);
      }
      .num {
        font-size: 2rem;
        font-family: var(--mainNum-font);
      }
      .img {
        display: block;
        margin-top: -20px;
        transition: margin-top 0.3s;

        img {
          width: auto;
          max-width: 100%;
          max-height: 300px;
          border-radius: 5px;
          filter: saturate(0%);
          transition: all 0.3s;
          
        }

        &:hover {
          margin-top: 0;

          img {
            filter: saturate(100%);
          }
        }
      }
      .title {
        font-size: 1.5rem;
        text-align: center;
        padding: 0.8rem 0;
        font-weight: 700;
        color: var(--black100);
        border-bottom: 2px solid var(--black100);
        margin-bottom: 1rem;
      }
      .desc {
        font-size: 1rem;
      }
      .site {
        border: 1px solid var(--black100);
        display: block;
        text-align: center;
        padding: 0.625rem 1.5rem;
        margin-top: 1.5rem;
        transition: all 0.2s;

        &:hover {
          background-color: var(--black100);
          color: var(--white);
        }
      }
    }
  }
}
</style>
