<template>
  <div>
    <ul>
      <li v-for="(n, index) of newsList" :key="index">{{n}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newsList: ['new1', 'new2', 'new3']
      }
    }
  }
</script>

<style>

</style>
