<template>
  <div>
    <Skip />
    <Header />
    <main id="main" role="main">
      <Intro />
      <Skill />
      <Career />
      <Site />
      <Port />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Intro from "@/components/Intro.vue";
import Skill from "@/components/Skill.vue";
import Career from "@/components/Career.vue";
import Site from "@/components/Site.vue";
import Port from "@/components/Port.vue";
import Contact from "@/components/Contact.vue";
import Skip from "@/components/Skip.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    Intro,
    Skill,
    Career,
    Site,
    Port,
    Contact,
    Skip,
  },
};
</script>
