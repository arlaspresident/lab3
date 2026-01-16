<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">Myfitness</router-link>
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">Start</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/data" class="nav-link" :class="{ active: $route.path === '/data' }">Trainings</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/info" class="nav-link" :class="{ active: $route.path === '/info' }">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
}

.navbar {
  background-color: #222;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo {
  color: white;
  font-size: 24px;
  font-weight: 900;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.3s;
}


.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
  padding: 8px 12px;
  border-bottom: 3px solid transparent;
}

.nav-link:hover {
  color: white;
  border-bottom-color: #2a5b28ff;
}

.nav-link.active {
  color: #4CAF50;
  border-bottom-color: #4CAF50;
}

main {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-container {
    height: 60px;
    padding: 0 15px;
  }

  .nav-logo {
    font-size: 18px;
  }

  .nav-menu {
    gap: 15px;
  }

  .nav-link {
    font-size: 14px;
    padding: 6px 10px;
  }
}
</style>