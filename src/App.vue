<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding:0
}
#app {
  font-family: PingFangSC,STHeiti,Lucida Grande,Microsoft Yahei,Hiragino Sans GB,Hiragino Sans GB W3,SimSun,Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  font-size: 20px;
  width: 750px;
  margin:0 auto;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
</style>
