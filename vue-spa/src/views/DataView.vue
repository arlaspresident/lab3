<template>
  <div class="data-view">
    <div class="header">
      <h1>Training</h1>
      <p>Keep the track of your training</p>
    </div>
    
    <div class="container">
      <ApiTable />
    </div>
  </div>
</template>

<script setup>
import ApiTable from '../components/ApiTable.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

:root {
  --primary: #4CAF50;
  --dark: #222;
  --light: #f5f5f5;
}

.data-view {
  width: 100%;
  background: var(--light);
  font-family: 'Inter', sans-serif;
}

.header {
  background: linear-gradient(135deg, var(--dark) 0%, #333 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.header h1 {
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header p {
  font-size: 18px;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

@media (max-width: 768px) {
  .header {
    padding: 40px 20px;
  }

  .header h1 {
    font-size: 32px;
    letter-spacing: 1px;
  }

  .header p {
    font-size: 16px;
  }

  .container {
    padding: 40px 15px;
  }
}
</style>