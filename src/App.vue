<template>
  <div class="todo-app">
    <h1>Haii Yusak Ardianto!!</h1>
    <form @submit.prevent="add" class="form">
      <input type="text" v-model="newTodo" placeholder="add new todo..." class="input">
      <button type="submit" class="add-btn">Add</button>
    </form>

    <h3 class="title">My To Do List</h3>
    <div class="filter-buttons">
      <button @click="filter = 'all'">Show All</button>
      <button @click="filter = 'done'">Done Only</button>
      <button @click="filter = 'undone'">Undone Only</button>
    </div>

    <div v-for="item in filtered" :key="item.id" class="todo-item" :class="{ done: item.isDone }">
      <span>{{ item.name }}</span>
      <div class="todo-actions">
        <button v-if="!item.isDone" @click="todoStore.setAsDone(item.id)" class="done-btn">Set as done</button>
        <button v-else @click="todoStore.setAsUnDone(item.id)" class="undone-btn">Set as undone</button>
        <button @click="todoStore.deleteTodo(item.id)" class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import bg from '@/assets/background.png'


const todoStore = useTodoStore()
const newTodo = ref('')
const filter = ref('all')

onMounted(() => {
  todoStore.fetchTodos()
})

function add() {
  if (newTodo.value.trim() !== '') {
    todoStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}

const filtered = computed(() => {
  if (filter.value === 'done') return todoStore.doneOnly
  if (filter.value === 'undone') return todoStore.undoneOnly
  return todoStore.showAll
})
</script>

<style scoped>
.todo-item.done {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.todo-item.done span {
  text-decoration: line-through;
  font-style: italic;
}

.todo-actions button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

* {
  background-image: url(v-bind('bg'));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.todo-app {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}
.form {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}
.input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.add-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.title {
  margin-bottom: 10px;
  font-weight: bold;
}
.filter-buttons button {
  margin: 8px 5px;
  padding: 8px 16px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
.todo-actions button {
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.done-btn {
  background-color:rgb(51, 40, 167);
  color: white;
}
.undone-btn {
  background-color:rgb(197, 7, 255);
  color: black;
}
.delete-btn {
  background-color: #dc3545;
  color: white;
}
</style>