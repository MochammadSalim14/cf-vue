<template>
  <div class="p-6 bg-green-50 min-h-screen">
    <h1 class="text-3xl font-bold mb-4 text-green-700">Manajemen Obat</h1>

    <!-- Form tambah/edit -->
    <div class="mb-6 bg-white p-4 rounded shadow-md">
      <input v-model="form.nama" placeholder="Nama Obat" class="input" />
      <input v-model="form.deskripsi" placeholder="Deskripsi" class="input" />
      <input v-model.number="form.harga" placeholder="Harga" class="input" type="number" />
      <button @click="submitForm" class="btn bg-green-500 hover:bg-green-600 text-white">
        {{ editingId ? 'Update' : 'Tambah' }}
      </button>
    </div>

    <!-- Tabel -->
    <table class="w-full bg-white rounded shadow">
      <thead class="bg-green-200 text-green-900">
        <tr>
          <th class="p-2 text-left">#</th>
          <th class="p-2 text-left">Nama</th>
          <th class="p-2 text-left">Deskripsi</th>
          <th class="p-2 text-left">Harga</th>
          <th class="p-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obat, i) in obatList" :key="obat.id" class="hover:bg-green-100">
          <td class="p-2">{{ i + 1 }}</td>
          <td class="p-2">{{ obat.nama }}</td>
          <td class="p-2">{{ obat.deskripsi }}</td>
          <td class="p-2">Rp {{ obat.harga.toLocaleString() }}</td>
          <td class="p-2 flex gap-2 justify-center">
            <button @click="editObat(obat)" class="btn text-blue-600">Edit</button>
            <button @click="hapusObat(obat.id)" class="btn text-red-600">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const obatList = ref([])
const form = ref({ nama: '', deskripsi: '', harga: 0 })
const editingId = ref(null)

const getObat = async () => {
  const res = await fetch('/api/obat')
  obatList.value = await res.json()
}

const submitForm = async () => {
  const url = editingId.value
    ? `/api/obat/${editingId.value}`
    : '/api/obat'
  const method = editingId.value ? 'PUT' : 'POST'

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value)
  })

  resetForm()
  await getObat()
}

const editObat = (obat) => {
  form.value = { ...obat }
  editingId.value = obat.id
}

const hapusObat = async (id) => {
  await fetch(`/api/obat/${id}`, { method: 'DELETE' })
  await getObat()
}

const resetForm = () => {
  form.value = { nama: '', deskripsi: '', harga: 0 }
  editingId.value = null
}

onMounted(getObat)
</script>

<style>
.input {
  @apply border p-2 rounded mb-2 mr-2 w-64;
}
.btn {
  @apply px-3 py-1 rounded transition;
}
</style>
