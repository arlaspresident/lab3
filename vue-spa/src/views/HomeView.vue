<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg" style="background-image: url('/images/gym.jpg')"></div>
      <div class="hero-content">
        <h1 class="hero-title">PUSH YOUR LIMITS</h1>
        <p class="hero-subtitle">Track. Train. Transform.</p>
        <router-link to="/data" class="cta-button">Start Training</router-link>
      </div>
    </section>

    <section class="features-section">
      <div class="features-container">
        <div class="feature">
          <h3>Log Workouts</h3>
          <p>Record every session with name, duration, and completion status.</p>
        </div>
        <div class="feature">
          <h3>Track Progress</h3>
          <p>Watch your training history grow and see patterns emerge.</p>
        </div>
        <div class="feature">
          <h3>Stay Motivated</h3>
          <p>Mark workouts complete and celebrate your fitness journey.</p>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>Ready to dominate?</h2>
      <router-link to="/data" class="cta-button-secondary">Go to Workouts</router-link>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

:root {
  --primary: #4CAF50;
  --dark: #222;
  --light: #f5f5f5;
}

.home {
  width: 100%;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
}

.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: 96px;
  font-weight: 900;
  color: white;
  margin: 0 0 20px 0;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 40px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.cta-button {
  display: inline-block;
  padding: 16px 48px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
}

.features-section {
  padding: 80px 20px;
  background: var(--light);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature {
  background: white;
  padding: 40px;
  border-left: 5px solid var(--primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.feature:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-5px);
}

.feature h3 {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--dark);
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.feature p {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.cta-section {
  padding: 80px 20px;
  background: var(--dark);
  text-align: center;
  color: white;
}

.cta-section h2 {
  font-family: 'Inter', sans-serif;
  font-size: 52px;
  font-weight: 900;
  margin: 0 0 30px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-button-secondary {
  display: inline-block;
  padding: 16px 48px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button-secondary:hover {
  background: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 52px;
    letter-spacing: 1px;
  }

  .hero-subtitle {
    font-size: 18px;
    margin: 0 0 30px 0;
  }

  .cta-button {
    padding: 12px 30px;
    font-size: 14px;
  }

  .features-container {
    gap: 25px;
  }

  .feature {
    padding: 30px;
  }

  .feature h3 {
    font-size: 18px;
  }

  .cta-section h2 {
    font-size: 36px;
  }
}
</style>