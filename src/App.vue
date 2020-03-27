<template>
  <div id="app">
    <top-nav></top-nav>
    <div class="content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import topNav from "@/components/global/top-nav";
import appFooter from "@/components/global/footer";

export default {
  name: "App",
  components: {
    topNav,
    appFooter
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  scroll-behavior: smooth;
}
</style>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
  margin: 20px auto;
  width: 70%;
}
</style>


