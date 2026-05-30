<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)

const user = ref({
  username: 'DOTA_PLAYER_777',
  avatar: ''
})

const checkAuth = () => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'

  if (isLoggedIn.value) {
    const savedJSON = localStorage.getItem('user_profile_json')
    if (savedJSON) {
      const parsedUser = JSON.parse(savedJSON)
      user.value.username = parsedUser.username
      user.value.avatar = parsedUser.avatar || ''
    }
  }
}

onMounted(() => {
  checkAuth()
  window.addEventListener('auth-change', checkAuth)
  window.addEventListener('storage', checkAuth)
})

onUnmounted(() => {
  window.removeEventListener('auth-change', checkAuth)
  window.removeEventListener('storage', checkAuth)
})

const goToLogin = () => {
  router.push('/log')
}
</script>

<template>
  <div class="header">
    <div class="header-left">
      <router-link class="header-page" to="/">
        <img src="../images/header/icone.png" alt="Dota 2 Logo" />
      </router-link>
      <router-link class="header-page-news" to="Page1">НОВОСТИ</router-link>
      <router-link class="header-page-news" to="Page2">ГЕРОИ</router-link>
      <router-link class="header-page-news" to="Page3">ИГРОКИ</router-link>
    </div>

    <div class="header-right">
      <router-link v-if="isLoggedIn" to="/profile" class="header-profile">
        <span class="header-username">{{ user.username }}</span>
        <div class="header-avatar-wrapper">
          <img v-if="user.avatar" :src="user.avatar" alt="Avatar" class="header-avatar" />
          <div v-else class="header-avatar-placeholder">
            <span class="header-avatar-letters">{{ user.username.slice(0, 2).toUpperCase() }}</span>
          </div>
        </div>
      </router-link>

      <button v-else @click="goToLogin" class="login-btn">ВОЙТИ</button>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Inter';
  src: url('../fonts/InterVariable.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  padding-right: 40px;
}

.header-page img {
  height: 70px;
  width: 293px;
}

.header-page {
  padding-left: 32px;
  display: flex;
  align-items: center;
}

.header-page-news {
  padding-left: 77px;
  text-decoration: none;
  background: linear-gradient(to bottom, #aeb6be 0%, #ffffff 50%, #7a8288 51%, #d1d5db 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 22px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.header-page-news:hover {
  color: #E2E2E9;
  text-shadow: 0 0 8px #ffffff99;
}

.header-profile {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.header-username {
  font-size: 18px;
  letter-spacing: 0.5px;
  background: linear-gradient(to bottom, #aeb6be 0%, #ffffff 50%, #7a8288 51%, #d1d5db 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
}

.header-profile:hover .header-username {
  color: #E2E2E9;
  text-shadow: 0 0 8px #ffffff99;
}

.header-avatar-wrapper {
  width: 45px;
  height: 45px;
  border: 1px solid #ffffff33;
  border-radius: 100%;
  box-shadow: 0 0 10px #ffffff0d;
  transition: all 0.3s ease;
  overflow: hidden;
}

.header-profile:hover .header-avatar-wrapper {
  border-color: #ffffff;
  box-shadow: 0 0 12px #ffffff26;
}

.header-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1a1a24, #2a2a38);
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-avatar-letters {
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.login-btn {
  background: transparent;
  border: 1px solid #ffffff33;
  padding: 10px 24px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  background-image: linear-gradient(to bottom, #aeb6be 0%, #ffffff 50%, #7a8288 51%, #d1d5db 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.login-btn:hover {
  border-color: #ffffff;
  color: #E2E2E9;
  box-shadow: 0 0 12px #ffffff26;
  text-shadow: 0 0 8px #ffffff99;
}
</style>