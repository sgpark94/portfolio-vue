<script setup>
import { careerText } from "../constants";
</script>

<template>
  <section id="career">
    <div class="career__inner">
      <h2 class="career__title">Career <em>경력</em></h2>
      <div class="career__desc">
        <div v-for="(text, key) in careerText" :key="key">
          <span>{{ key + 1 }}.</span>
          <h3>{{ text.corp }}</h3>
          <p>{{ text.desc1 }}<br />{{ text.desc2 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "career",
};
</script>

<style lang="scss">
.career__inner {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .career__title {
    position: sticky;
    top: 110px;
    left: 0;
    width: 48%;
    height: 5vw;
    font-size: 4vw;
    font-weight: 900;
    line-height: 1.6;
    font-family: var(--mainKor-font);
    text-transform: uppercase;
    color: var(--black100);
    border-bottom: 0.4vw solid var(--black100);
    @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 10vw;
      font-size: 30px;
      height: auto;
      top: 68px;
      background-color: var(--mainBg-color);
    }
    em {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2;
    }
  }
  .career__desc {
    width: 50%;
    font-family: "Gowun Batang";
    @media (max-width: 800px) {
      width: 100%;
    }
    span {
      font-size: 5vw;
      line-height: 1;
      font-weight: 900;
      line-height: 1.3;
      font-family: var(--mainNum-font);
      @media (max-width: 800px) {
        font-size: 20vw;
      }
    }
    h3 {
      font-size: 1.5rem;
      text-decoration: underline;
      text-underline-position: under;
      margin-bottom: 1vw;
    }
    p {
      margin-bottom: 30vh;
      font-size: 1.1rem;
    }
  }
}
</style>
