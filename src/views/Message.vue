<template>
  <div>
    <ul>
      <li v-for="m of messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push</button>
        <button @click="replaceShow(m.id)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },
    mounted () {
      setTimeout(() => {
        const messages = [
          {
            title: 'message1',
            id: 1
          },
          {
            title: 'message2',
            id: 2
          },
          {
            title: 'message3',
            id: 3
          }
        ]
        this.messages = messages
      }, 1000)
    },
    methods: {
      pushShow (id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
