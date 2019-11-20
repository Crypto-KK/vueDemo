<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--      <todo-header @addTodo="addTodo" />-->
      <todo-header ref="header" />
      <todo-list :todos="todos" />
      <todo-footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll" />
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}} </span>
        <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteSelected">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import PubSub from 'pubsub-js'
  import StorageUtil from './util/StorageUtil'
  export default {
    data () {
      return {
        todos: StorageUtil.readTodos()
      }
    },
    computed: {
      completeSize () {
        return this.todos.reduce(
          (preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },
      isAllCheck: {
        get () {
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set (value) {
          this.selectAll(value)
        }
      }
    },
    mounted () {
      this.$refs.header.$on('addTodo', this.addTodo)
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      deleteSelected () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAll (isCheck) {
        // eslint-disable-next-line no-return-assign
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
    watch: {
      todos: {
        deep: true,
        // handler: function (newVal) {
        //   StorageUtil.saveTodos(newVal)
        // }
        handler: StorageUtil.saveTodos
      }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
