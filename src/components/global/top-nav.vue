<template>
  <div class="topNav">
    <div class="left">
      <router-link tag="span" :to="{name:'Home'}" class="item">ToDo</router-link>
    </div>
    <div class="right">
      <router-link tag="span" :to="{name:'Search'}" active-class="active" class="item">Search</router-link>
      <router-link tag="span" :to="{name:'About'}" active-class="active" class="item">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.topNav {
  display: flex;
  color: #fff;
  background-color: #000;
  text-align: center;
}

.topNav .item {
  line-height: 50px;
  padding: 0px 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

.topNav .item:hover {
  background-color: #DDD;
  color: black;
}

.topNav .item.active:after {
  position: absolute;
  content: "";
  height: 3px;
  background-color: #fff;
  width: 100%;
  bottom: 0;
  left: 0;
}
.topNav .left {
  flex: 1;
  text-align: left;
}
</style>