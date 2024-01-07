<script setup>
import { contactText } from '../constants/index'
</script>

<template>
  <section id="contact">
    <div class="contact__inner">
      <h2 class="contact__title">Contact</h2>
      <div class="contact__lines" aria-hidden="true">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="contact__text">
        <div class="text">
          <div v-for="(contact, key) in contactText" :key="key">
            <a :href="contact.link" target="_blank">{{ contact.title }}</a>
          </div>
        </div>
        <div class="resume">
          <a href="https://www.notion.so/6-552f629d5e0c401db79cd17f38348c4d?pvs=4" target="_blank">이력서 보러가기</a>
        </div>
      </div>
      <div class="contact__lines bottom" aria-hidden="true">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
#contact {
  height: 100vh;
}
.contact__inner {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  @media (max-width: 800px) {
    justify-content: center;
  }
  .contact__title {
    font-size: 10vw;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 800;
    white-space: nowrap;
    text-indent: -0.5vw;
    letter-spacing: -0.3vw;
    @media (max-width: 800px) {
      // display: none;
    }
  }
  .contact__text {
    width: 100%;
    height: 40vh;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .text {
      font-size: 3vw;
      line-height: 1.2;
      font-weight: 900;
      text-decoration: underline;
      text-align: center;
      position: relative;
      z-index: 100;
      transition: all 0.3s;
      cursor: all-scroll;
      @media (max-width: 800px) {
        font-size: 24px;
        padding: 0 16px;
        word-break: break-all;
      }
    }
    .resume {
      margin-top: 100px;
      padding: 8px 16px;
      a {
        font-size: 24px;
        font-weight: 700;
        &:hover {
          text-decoration: underline; 
        }
      }
    }
  }
  .contact__lines {
    width: 100%;
    .line {
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--black);
      margin-bottom: 0.5vw;
      &:nth-child(1) {
        height: 25px;
      }
      &:nth-child(2) {
        height: 17px;
      }
      &:nth-child(3) {
        height: 13px;
      }
      &:nth-child(4) {
        height: 9px;
      }
      &:nth-child(5) {
        height: 5px;
      }
      &:nth-child(6) {
        height: 2px;
      }
      &:nth-child(7) {
        height: 1px;
      }
    }
    &.top {
      .line {
        margin-top: 0.5vw;
        margin-bottom: 0;
        display: none;
        @media (max-width: 800px) {
          display: block;
        }
        &:nth-child(1) {
          height: 1px;
        }
        &:nth-child(2) {
          height: 2px;
        }
        &:nth-child(3) {
          height: 5px;
        }
        &:nth-child(4) {
          height: 9px;
        }
        &:nth-child(5) {
          height: 13px;
        }
        &:nth-child(6) {
          height: 17px;
        }
        &:nth-child(7) {
          height: 25px;
        }
      }
    }
  }
}
</style>
