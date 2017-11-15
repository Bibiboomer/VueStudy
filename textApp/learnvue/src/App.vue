<template>
  <div id="app">
    <img src="./assets/logo.png">
    <a href="#/">首页</a>
    <a href="#/work">工作</a>  

    <router-link exact to="/">home</router-link>
    <router-link to="/work" active-class="lm">work</router-link>
    <router-link to="/lm" tag="li">shumo</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
        background-color:red;
    }

.lm{
     background-color:blue
}
</style>
