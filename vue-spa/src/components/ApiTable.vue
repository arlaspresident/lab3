<template>
  <div>
    <h2>API Data</h2>
    <form @submit.prevent="addItem" class="form">
      <input v-model="form.name" placeholder="Name" required />
      <input v-model.number="form.duration" type="number" placeholder="Duration" required />
      <label>
        <input type="checkbox" v-model="form.completed" />
        Completed
      </label>
      <button type="submit">Add</button>
    </form>
    <table v-if="items.length">
      <thead>
        <tr>
          <th>Name</th>
          <th>Duration</th>
          <th>Completed</th>
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
const form = ref({ name: '', duration: 30, completed: false })
const API = import.meta.env.VITE_API_BASE

// Load data
async function loadData() {
  try {
    const res = await fetch(`${API}/workouts`)
    if (!res.ok) throw new Error('Failed to load data')
    items.value = await res.json()
  } catch (error) {
    console.error('Error loading data:', error)
  }
}

// Add item
async function addItem() {
  try {
    const res = await fetch(`${API}/workouts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (!res.ok) throw new Error('Failed to add item')
    const newItem = await res.json()
    items.value.unshift(newItem)
    form.value = { name: '', duration: 30, completed: false }
  } catch (error) {
    console.error('Error adding item:', error)
  }
}

// Delete item
async function deleteItem(id) {
  try {
    const res = await fetch(`${API}/workouts/${id}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('Failed to delete item')
    items.value = items.value.filter((i) => i.id !== id)
  } catch (error) {
    console.error('Error deleting item:', error)
  }
}

onMounted(loadData)
</script>

<style scoped>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

input {
  padding: 6px;
  flex: 1;
  min-width: 100px;
}

label {
  display: flex;
  align-items: center;
  gap: 5px;
}

button {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #aaa;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
}

button:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead {
  background-color: #f0f0f0;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  font-weight: bold;
}
</style>