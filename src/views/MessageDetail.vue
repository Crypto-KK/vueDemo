<template>
  <div>
    <p>id:{{$route.params.id}}</p>
    <ul>
      <li>id {{messageDetail.id}}</li>
      <li>id {{messageDetail.title}}</li>
      <li>id {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        messageDetail: {}
      }
    },
    mounted () {
      setTimeout(() => {
        const allDetails = [
          {
            title: 'message1',
            id: 1,
            content: 'sdfdf'
          },
          {
            title: 'message2',
            id: 2,
            content: 'sdfdf'
          },
          {
            title: 'message3',
            id: 3,
            content: 'sdfdf'
          }
        ]
        this.allDetails = allDetails
      }, 500)
    },
    watch: {
      $route: function (value) {
        // 路由发生改变
        const id = value.params.id * 1
        this.messageDetail = this.allDetails.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>
