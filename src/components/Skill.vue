<script setup>
import { skillText } from "../constants";
</script>

<template>
  <section id="skill">
    <div class="skill__inner">
      <h2 class="skill__title">Goals <em>2024 올해 목표</em></h2>
      <div class="skill__desc">
        <div v-for="(text, key) in skillText" :key="key">
          <span>{{ key + 1 }}.</span>
          <h3>{{ text.title }}</h3>
          <p>{{ text.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "skill",
};
</script>

<style lang="scss">
.skill__inner {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .skill__title {
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
  .skill__desc {
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
