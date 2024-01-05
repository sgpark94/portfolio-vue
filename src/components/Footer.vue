<script setup>
import { footerText } from "../constants";
</script>

<template>
  <footer id="footer" role="contentinfo">
    <div class="footer__inner">
      <div class="footer__text">
        <span>seulgi park</span>
        <span>© psk</span>
      </div>
      <h2 class="footer__title">Social</h2>
      <div class="footer__info">
        <ul>
          <li v-for="(footer, key) in footerText" :key="key">
            <img :src="footer.logo" alt="" />
            <a :href="footer.link" target="_blank">{{ footer.title }}</a>
            <em>{{ footer.desc }}</em>
          </li>
        </ul>
      </div>
      <div class="footer__right">
        © 2024 seulgi Park<br />이 사이트는 Vue.js를 이용하여 제작하였습니다.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
#footer {
  font-family: var(--mainKor-font);
}
.footer__inner {
  padding: 16px;
  .footer__title {
    margin-top: 20px;
    text-align: left;
    font-size: 10vw;
    text-transform: uppercase;
    line-height: 1;
    font-weight: 800;
    white-space: nowrap;
    text-indent: -0.5vw;
    letter-spacing: -0.3vw;
  }
  .footer__text {
    font-size: 12px;
    text-transform: uppercase;
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
    display: flex;
    justify-content: space-between;
  }
  .footer__info {
    margin: 40px 0 100px;
      h3 {
        border-top: 2px solid var(--black);
        font-size: 10px;
        margin-bottom: 40px;
        padding-top: 10px;
      }
      ul {
        border-top: 1px solid var(--black);
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid var(--black);
          img {
            margin-right: 8px;
            width: 24px;
          }
          a {
            padding: 14px 0;
            font-size: 14px;
            display: inline-block;
            text-transform: uppercase;
          }
          em {
            text-align: left;
            font-size: 12px;
            padding-left: 10px;
            opacity: 0;
            transition: all 0.3s;
          }
          &:hover {
            em {
              opacity: 1;
            }
          }
        }
      }
    // }
  }
  .footer__right {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 20px;
  }
}
</style>
