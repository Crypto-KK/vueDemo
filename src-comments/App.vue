<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :removeComment="removeComment" />
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'
  export default {
    data () {
      return {
        comments: [
          {
            name: 'kk',
            content: 'good'
          },
          {
            name: 'kk2',
            content: 'good1'
          },
          {
            name: 'kk3',
            content: 'good2'
          }
        ]
      }
    },
    components: {
      Add,
      List
    },
    methods: {
      addComment (comment) {
        this.comments.unshift(comment)
      },
      removeComment (index) {
        this.comments.splice(index, 1)
      }
    }
  }
</script>

<style>

</style>
