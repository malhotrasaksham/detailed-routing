<template>
  <div>
    <about-nav></about-nav>
    <router-view></router-view>
    <div class="navUp" v-if="showScrollToTop" @click="ScrollToTop()">UP</div>
  </div>
</template>
<script>
import aboutNav from "@/components/about/about-nav";
export default {
  components: {
    aboutNav
  },
  data() {
    return {
      showScrollToTop: false
    };
  },
  created() {
    window.addEventListener("scroll", this.ShowScrollToTop);
  },
  methods: {
    ScrollToTop() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
    ShowScrollToTop() {
      if (window.scrollY > 200) {
        this.showScrollToTop = true;
      } else {
        this.showScrollToTop = false;
      }
    }
  }
};
</script>
<style scoped>
.navUp {
  position: fixed;
  right: 0;
  bottom: 15vh;
  font-weight: bold;
  padding: 15px;
  background-color: green;
  cursor: pointer;
}
</style>

