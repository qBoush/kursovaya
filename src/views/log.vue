<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import defaultUserData from '../data/user.json'

const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = () => {
  localStorage.setItem('isLoggedIn', 'true')

  const userProfile = {
    ...defaultUserData,
    email: email.value,
    username: email.value.split('@')[0]
  }
  localStorage.setItem('user_profile_json', JSON.stringify(userProfile))

  window.dispatchEvent(new Event('auth-change'))
  router.push('/profile')
}
</script>

<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="login-title">ВХОД</h1>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="email">ЭЛЕКТРОННАЯ ПОЧТА</label>
          <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="example@mail.com"
          />
        </div>

        <div class="input-group">
          <label for="password">ПАРОЛЬ</label>
          <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="••••••••"
          />
        </div>

        <button type="submit" class="submit-btn">ВОЙТИ</button>
      </form>

      <div class="register-redirect">
        Ещё нет аккаунта? <router-link to="/reg" class="register-link">Регистрация</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  background-color: #060609;
  background-image: radial-gradient(circle at top, #13111c 0%, #060609 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 40px 20px;
}

.login-container {
  background: #111017;
  border: 1px solid #3d3954;
  border-radius: 16px;
  padding: 40px 50px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 50px #00000099;
  animation: glow-pulse 3s infinite ease-in-out;
  box-sizing: border-box;
}

@keyframes glow-pulse {
  0% { box-shadow: 0 0 5px #6C5CE733; }
  50% { box-shadow: 0 0 20px #6C5CE755; }
  100% { box-shadow: 0 0 5px #6C5CE733; }
}

.login-title {
  text-align: center;
  margin-bottom: 35px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  color: #626275;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

.input-group input {
  background: #0d0e14;
  border: 1px solid #3d3954;
  border-radius: 8px;
  padding: 14px 16px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  transition: border-color 0.2s, background 0.2s;
  outline: none;
}

.input-group input:focus {
  border-color: #6c5ce7;
  background: #13111c;
}

.input-group input::placeholder {
  color: #626275;
}

.submit-btn {
  background: #1f202e;
  border: 1px solid #3d3954;
  border-radius: 8px;
  padding: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
  color: #9a9ab0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  margin-top: 10px;
}

.submit-btn:hover {
  background: #3d3954;
  color: #fff;
  border-color: #4a4f83;
  box-shadow: 0 0 12px rgba(108, 92, 231, 0.3);
}

.register-redirect {
  text-align: center;
  margin-top: 25px;
  color: #626275;
  font-size: 14px;
}

.register-link {
  color: #6c5ce7;
  text-decoration: none;
  font-weight: 700;
  margin-left: 5px;
  transition: color 0.2s, text-shadow 0.2s;
}

.register-link:hover {
  color: #8275e9;
  text-shadow: 0 0 8px rgba(108, 92, 231, 0.6);
}
</style>