<script setup>
import { ref } from 'vue'

const pesanBaru = ref('')
const daftarPesan = ref([])

function tambahPesan() {
  if (pesanBaru.value.trim() !== '') {
    daftarPesan.value.push(pesanBaru.value.trim())
    pesanBaru.value = ''
  }
}

function hapusPesan(index) {
  daftarPesan.value.splice(index, 1)
}
</script>

<template>
  <div class="pesan-board">
    <h2>Daftar Pesan</h2>
    <div class="form">
      <input v-model="pesanBaru" placeholder="Tulis pesan..." />
      <button @click="tambahPesan">Tambah</button>
    </div>

    <ul>
      <li v-for="(pesan, index) in daftarPesan" :key="index">
        {{ pesan }}
        <button class="hapus" @click="hapusPesan(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.pesan-board {
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  background:rgb(9, 248, 248);
  border-radius: 10px;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 8px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #eee;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
}

.hapus {
  position: absolute;
  right: 10px;
  top: 8px;
  background: red;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 3px;
}
</style>