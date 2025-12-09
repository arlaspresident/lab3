<template>
  <div>
    <h2>API Data</h2>

    <form @submit.prevent="addItem" class="form">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.description" placeholder="Description" />
      <button type="submit">Add</button>
    </form>

    <table v-if="items.length">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <ApiRow
          v-for="item in items"
          :key="item.id"
          :row="item"
          @remove="deleteItem"
        />
      </tbody>
    </table>

    <p v-else>No items yet.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ApiRow from './ApiRow.vue'

const items = ref([])
const form = ref({ title: '', description: '' })

const API = import.meta.env.VITE_API_BASE  // <-- den sätter vi senare i .env

//load
async function loadData() {
  const res = await fetch(`${API}/items`)
  items.value = await res.json()
}

//add
async function addItem() {
  const res = await fetch(`${API}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value),
  })
  const newItem = await res.json()

  items.value.unshift(newItem)
  form.value = { title: '', description: '' }
}

//delete
async function deleteItem(id) {
  await fetch(`${API}/items/${id}`, { method: 'DELETE' })
  items.value = items.value.filter((i) => i.id !== id)
}

onMounted(loadData)
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 6px;
  flex: 1;
}

button {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #aaa;
  cursor: pointer;
}
</style>
