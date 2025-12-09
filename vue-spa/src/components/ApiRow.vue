<template>
  <tr>
    <td>{{ row.title }}</td>
    <td>{{ row.description }}</td>
    <td>
      <button @click="$emit('remove', row.id)">Delete</button>
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
</style>
