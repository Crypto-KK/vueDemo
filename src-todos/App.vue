<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo" />
      <todo-list :todos="todos" :deleteTodo="deleteTodo" />
      <todo-footer :todos="todos" :deleteSelected="deleteSelected" :selectAll="selectAll" />
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  export default {
    data () {
      return {
        todos: JSON.parse(window.localStorage.getItem('todos') || '[]')
      }
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
        handler: function (newVal) {
          window.localStorage.setItem('todos', JSON.stringify(newVal))
        }
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
