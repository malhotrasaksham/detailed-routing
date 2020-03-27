<template>
  <div>
    <div class="navigation">
      <router-link
        tag="span"
        class="navItem"
        :to="{name: 'About', hash: '#company'}"
        active-class="active"
      >Company</router-link>
      <router-link
        tag="span"
        :to="{name: 'About', hash: '#policies'}"
        class="navItem"
        active-class="active"
      >Policies</router-link>
      <router-link
        active-class="active"
        tag="span"
        :to="{name: 'About', hash: '#management'}"
        class="navItem"
      >Management</router-link>
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     currentHash: undefined
  //   };
  // },
  // watch: {
  //   "$route.hash": {
  //     handler(to, from) {
  //       this.currentHash = to;
  //     },
  //     immediate: true
  //   }
  // }
};
</script>

<style scoped>
.navItem {
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
}
.navItem:hover,
.navItem.active {
  border-bottom: 1px solid #000;
}
</style>
