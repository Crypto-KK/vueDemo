<template>
  <div>
    <h2 v-if="firstView">请输入用户名</h2>
    <h2 v-if="loading">loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) of users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted () {
      PubSub.subscribe('search', (msg, searchName) => {
        const url = `https://api.github.com/search/users/?q=${searchName}`
        this.firstView = false
        this.loading = true
        axios.get(url).then(response => {
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar: item.avatar_url,
            name: item.login
          }))
          this.loading = false
          this.users = users
          // eslint-disable-next-line handle-callback-err
        }).catch(err => {
          this.loading = false
          this.errorMsg = 'fail'
        })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
