<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="a">
    <HelloWorld />
  </div>
</template>

<script>
  // 引入
  import HelloWorld from './components/HelloWorld'
  // 映射
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
