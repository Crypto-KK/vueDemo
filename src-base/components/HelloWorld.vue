<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data () { // 组件必须写函数
      return {
        msg: 'hello vue'
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
    font-size: 30px;
  }
</style>
