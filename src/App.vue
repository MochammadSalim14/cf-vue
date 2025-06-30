<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">tokoh buah mak jum</h1>

    <!-- Form tambah / edit -->
    <form @submit.prevent="submitForm" class="mb-4 space-x-2">
      <input
        v-model="formData.name"
        placeholder="Nama Buah"
        class="border p-1 rounded"
      />
      <input
        v-model="formData.price"
        placeholder="Harga"
        type="number"
        class="border p-1 rounded"
      />
      <button type="submit" class="bg-blue-500 text-white px-2 py-1 rounded">
        {{ editIndex !== null ? 'Update' : 'Tambah' }}
      </button>
      <button
        v-if="editIndex !== null"
        @click="resetForm"
        type="button"
        class="bg-gray-400 text-white px-2 py-1 rounded"
      >
        Batal
      </button>
    </form>

    <!-- Tabel -->
    <table class="border w-full text-left">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2 border">No</th>
          <th class="p-2 border">Nama</th>
          <th class="p-2 border">Harga</th>
          <th class="p-2 border">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="border p-2">{{ index + 1 }}</td>
          <td class="border p-2">{{ item.name }}</td>
          <td class="border p-2">{{ item.price }}</td>
          <td class="border p-2 space-x-2">
            <button
              @click="editItem(index)"
              class="bg-yellow-400 px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              @click="deleteItem(index)"
              class="bg-red-500 text-white px-2 py-1 rounded"
            >
              Hapus
            </button>
          </td>
        </tr>
        <tr v-if="items.length === 0">
          <td colspan="4" class="text-center p-2">Tidak ada data</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  { name: 'buah duren', price: 10.000 },
  { name: 'Buah naga', price: 15.000 },
])

const formData = ref({ name: '', price: '' })
const editIndex = ref(null)

function submitForm() {
  if (editIndex.value !== null) {
    // edit mode
    items.value[editIndex.value] = { ...formData.value }
  } else {
    // add mode
    items.value.push({ ...formData.value })
  }
  resetForm()
}

function editItem(index) {
  formData.value = { ...items.value[index] }
  editIndex.value = index
}

function deleteItem(index) {
  if (confirm('Yakin ingin menghapus?')) {
    items.value.splice(index, 1)
  }
}

function resetForm() {
  formData.value = { name: '', price: '' }
  editIndex.value = null
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
}
</style>
