<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>most star: <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted () {
      const url = `https://api.github.com/search9/repositories?q=v&sort=stars`
      // this.$http.get(url).then(
      //   response => {
      //     const result = response.data
      //     const most = result.items[0]
      //     this.repoUrl = most.html_url
      //     this.repoName = most.name
      //   },
      //   fail => {
      //     alert('失败')
      //   }
      // )
      axios.get(url).then(response => {
        const result = response.data
        const most = result.items[0]
        this.repoUrl = most.html_url
        this.repoName = most.name
        // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        alert('fail')
      })
    }
  }
</script>

<style>

</style>
