<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

// Daftar project/pesan
const projects = ref([
  'Belajar Vue Router',
  'Membuat halaman Contact',
  'Menambahkan fitur hapus project'
])

// Fungsi untuk menghapus project
function removeProject(index) {
  projects.value.splice(index, 1)
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <!-- Daftar Project -->
  <section class="project-section">
    <h2>Daftar Project</h2>
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        {{ project }}
        <button @click="removeProject(index)">Hapus</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.project-section {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 600px;
  background: #f5f5f5;
  border-radius: 8px;
}

.project-section h2 {
  margin-bottom: 1rem;
  text-align: center;
  color: #2c3e50;
}

.project-section ul {
  list-style-type: none;
  padding: 0;
}

.project-section li {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #ffffff;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}

.project-section button {
  background-color: #ff5c5c;
  border: none;
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;
}

.project-section button:hover {
  background-color: #e74c3c;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
