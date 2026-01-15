<template>
  <tr>
    <td>{{ row.name }}</td>
    <td>{{ row.duration }}</td>
    <td>{{ row.completed ? '✓ Yes' : 'No' }}</td>
    <td>
      <button @click="$emit('remove', row.id)" class="btn-delete">Delete</button>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  row: {
    type: Object,
    required: true,
  },
})
defineEmits(['remove'])
</script>

<style scoped>
button {
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
  border: none;
}

.btn-delete:hover {
  background-color: #c82333;
}
</style>