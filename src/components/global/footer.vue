<template>
  <div class="footer">Copyright {{year}}</div>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  color: #fff;
  background-color: #000;
  line-height: 50px;
  text-align: center;
}
</style>
