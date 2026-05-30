<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import defaultUserData from '../data/user.json'

const router = useRouter()
const isEditing = ref(false)
const fileInputRef = ref(null)

const user = ref({ ...defaultUserData })

const editForm = ref({
  username: '',
  email: '',
  avatar: '',
  password: '',
  confirmPassword: ''
})

const recentMatches = ref([
  { id: 1, hero: 'Invoker', result: 'Победа', kda: '12 / 3 / 15', duration: '38:12' },
  { id: 2, hero: 'Pudge', result: 'Поражение', kda: '4 / 9 / 8', duration: '42:05' },
  { id: 3, hero: 'Juggernaut', result: 'Победа', kda: '18 / 2 / 6', duration: '29:40' }
])

onMounted(() => {
  const savedData = localStorage.getItem('user_profile_json')
  if (savedData) {
    const parsedData = JSON.parse(savedData)
    user.value = { ...defaultUserData, ...parsedData }
  } else {
    user.value = { ...defaultUserData }
    localStorage.setItem('user_profile_json', JSON.stringify(defaultUserData))
  }
})

const triggerFileInput = () => {
  if (isEditing.value && fileInputRef.value) {
    fileInputRef.value.click()
  }
}

const handleAvatarChange = (event) => {
  const file = event.target.files[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    alert('Пожалуйста, выберите изображение!')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    editForm.value.avatar = e.target.result
  }
  reader.readAsDataURL(file)
}

const startEditing = () => {
  editForm.value.username = user.value.username
  editForm.value.email = user.value.email
  editForm.value.avatar = user.value.avatar || ''
  editForm.value.password = ''
  editForm.value.confirmPassword = ''
  isEditing.value = true
}

const saveProfile = () => {
  if (editForm.value.password && editForm.value.password !== editForm.value.confirmPassword) {
    alert('Пароли не совпадают!')
    return
  }

  user.value.username = editForm.value.username
  user.value.email = editForm.value.email
  user.value.avatar = editForm.value.avatar

  localStorage.setItem('user_profile_json', JSON.stringify(user.value))
  window.dispatchEvent(new Event('auth-change'))
  isEditing.value = false
}

const cancelEditing = () => {
  isEditing.value = false
}

const handleLogout = () => {
  localStorage.removeItem('isLoggedIn')
  window.dispatchEvent(new Event('auth-change'))
  router.push('/log')
}
</script>

<template>
  <div class="profile-page">
    <div class="profile-container">

      <div class="profile-header">
        <div
            class="avatar-wrapper"
            :class="{ 'editable': isEditing }"
            @click="triggerFileInput"
        >
          <input
              type="file"
              ref="fileInputRef"
              style="display: none"
              accept="image/*"
              @change="handleAvatarChange"
          />

          <template v-if="isEditing ? editForm.avatar : user.avatar">
            <img :src="isEditing ? editForm.avatar : user.avatar" alt="Avatar" class="avatar-img" />
          </template>
          <div v-else class="avatar-placeholder">
            <span class="avatar-letters">{{ user.username.slice(0, 2).toUpperCase() }}</span>
          </div>

          <div v-if="isEditing" class="avatar-edit-overlay">
            <span>ИЗМЕНИТЬ</span>
          </div>
        </div>

        <div class="user-info">
          <input
              v-if="isEditing"
              v-model="editForm.username"
              class="edit-input username-input"
              placeholder="Никнейм"
          />
          <h1 v-else class="username-title">{{ user.username }}</h1>
          <p class="user-rank">{{ user.rank }} • <span class="mmr-highlight">{{ user.mmr }} MMR</span></p>
        </div>

        <div class="header-actions">
          <button v-if="!isEditing" @click="startEditing" class="action-btn edit-btn">РЕДАКТИРОВАТЬ</button>
          <div v-else class="edit-buttons-group">
            <button @click="saveProfile" class="action-btn save-btn">СОХРАНИТЬ</button>
            <button @click="cancelEditing" class="action-btn cancel-btn">ОТМЕНА</button>
          </div>
        </div>
      </div>

      <div v-if="isEditing" class="edit-profile-form">
        <h2 class="section-title">ИЗМЕНЕНИЕ ДАННЫХ</h2>
        <div class="edit-inputs-grid">
          <div class="input-group">
            <label>ЭЛЕКТРОННАЯ ПОЧТА</label>
            <input type="email" v-model="editForm.email" class="edit-input" />
          </div>
          <div class="input-group">
            <label>НОВЫЙ ПАРОЛЬ</label>
            <input type="password" v-model="editForm.password" class="edit-input" placeholder="••••••••" />
          </div>
          <div class="input-group" v-if="editForm.password">
            <label>ПОДТВЕРЖДЕНИЕ ПАРОЛЯ</label>
            <input type="password" v-model="editForm.confirmPassword" class="edit-input" placeholder="••••••••" />
          </div>
        </div>
      </div>

      <div v-if="!isEditing" class="stats-grid">
        <div class="stat-card">
          <span class="stat-label">МАТЧИ</span>
          <span class="stat-value">{{ user.matches }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">ВИНРЕЙТ</span>
          <span class="stat-value highlight-win">{{ user.winrate }}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">ПОЧТА</span>
          <span class="stat-value email">{{ user.email }}</span>
        </div>
      </div>

      <div v-if="!isEditing" class="recent-matches">
        <h2 class="section-title">ПОСЛЕДНИЕ ИГРЫ</h2>
        <div class="matches-list">
          <div
              v-for="match in recentMatches"
              :key="match.id"
              :class="['match-item', match.result === 'Победа' ? 'win' : 'lose']"
          >
            <div class="match-hero">
              <span class="hero-name">{{ match.hero }}</span>
            </div>
            <div class="match-status-wrapper">
              <span :class="['status-badge', match.result === 'Победа' ? 'badge-win' : 'badge-lose']">
                {{ match.result }}
              </span>
            </div>
            <div class="match-kda">KDA: {{ match.kda }}</div>
            <div class="match-time">{{ match.duration }}</div>
          </div>
        </div>
      </div>

      <div class="profile-actions">
        <button @click="handleLogout" class="logout-btn">ВЫЙТИ ИЗ АККАУНТА</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.profile-page {
  background-color: #060609;
  background-image: radial-gradient(circle at top, #13111c 0%, #060609 70%);
  padding: 60px 20px;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
}

.profile-container {
  background: #111017;
  border: 1px solid #3d3954;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 20px 50px #00000099;
  animation: glow-pulse 3s infinite ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

@keyframes glow-pulse {
  0% { box-shadow: 0 0 5px #6C5CE733; }
  50% { box-shadow: 0 0 20px #6C5CE755; }
  100% { box-shadow: 0 0 5px #6C5CE733; }
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid #1f202e;
  padding-bottom: 25px;
}

.avatar-wrapper {
  position: relative;
  width: 90px;
  height: 90px;
  border: 2px solid #3d3954;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 15px #6c5ce733;
  background-color: #0d0e14;
}

.avatar-wrapper.editable {
  cursor: pointer;
  border-color: #6c5ce7;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #13111c, #231f38);
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-letters {
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(108, 92, 231, 0.5);
}

.avatar-edit-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 4, 6, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.avatar-wrapper.editable:hover .avatar-edit-overlay {
  opacity: 1;
}

.avatar-edit-overlay span {
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.user-info {
  flex-grow: 1;
}

.username-title {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 5px 0;
  letter-spacing: 0.5px;
}

.user-rank {
  color: #626275;
  font-size: 14px;
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.mmr-highlight {
  color: #6c5ce7;
  font-weight: 700;
}

.action-btn {
  background: #1f202e;
  border: 1px solid #3d3954;
  border-radius: 6px;
  padding: 10px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  color: #9a9ab0;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.edit-btn:hover {
  background: #3d3954;
  color: #fff;
  border-color: #4a4f83;
}

.edit-buttons-group {
  display: flex;
  gap: 10px;
}

.save-btn {
  background: rgba(16, 172, 132, 0.1);
  border-color: #10ac84;
  color: #10ac84;
}

.save-btn:hover {
  background: #10ac84;
  color: #fff;
}

.cancel-btn:hover {
  background: #3d3954;
  color: #fff;
}

.edit-profile-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #0d0e14;
  border: 1px solid #1f202e;
  border-radius: 12px;
  padding: 25px;
}

.edit-inputs-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.edit-input {
  background: #111017;
  border: 1px solid #3d3954;
  border-radius: 8px;
  padding: 12px 16px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.edit-input:focus {
  border-color: #6c5ce7;
  background: #13111c;
}

.username-input {
  font-size: 20px;
  font-weight: 700;
  max-width: 300px;
  margin-bottom: 5px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-card {
  background: #0d0e14;
  border: 1px solid #1f202e;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: border-color 0.3s;
}

.stat-card:hover {
  border-color: #3d3954;
}

.stat-label {
  color: #626275;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

.stat-value {
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
}

.stat-value.highlight-win {
  color: #10ac84;
  text-shadow: 0 0 10px rgba(16, 172, 132, 0.2);
}

.stat-value.email {
  font-size: 13px;
  color: #b3b3c6;
  word-break: break-all;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  margin: 0 0 20px 0;
  border-left: 3px solid #6c5ce7;
  padding-left: 12px;
}

.matches-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.match-item {
  display: grid;
  grid-template-columns: 2fr 1.5fr 2fr 1fr;
  align-items: center;
  padding: 16px 20px;
  background: #0d0e14;
  border: 1px solid #1f202e;
  border-radius: 10px;
  font-size: 14px;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.match-item:hover {
  transform: translateX(4px);
  border-color: #3d3954;
  background: #111017;
}

.match-hero {
  display: flex;
  align-items: center;
}

.hero-name {
  font-weight: 700;
  color: #ffffff;
}

.match-status-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.status-badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 22px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  letter-spacing: 0.5px;
  box-sizing: border-box;
}

.badge-win {
  background: #10ac84;
  color: #fff;
}

.badge-lose {
  background: #ea2027;
  color: #fff;
}

.match-kda {
  color: #626275;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.match-time {
  color: #626275;
  font-size: 13px;
  text-align: right; /* Время аккуратно прижимается к правому краю */
}

.profile-actions {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #1f202e;
  padding-top: 25px;
}

.logout-btn {
  background: transparent;
  border: 1px solid rgba(234, 32, 39, 0.4);
  border-radius: 8px;
  color: #ea2027;
  padding: 12px 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.logout-btn:hover {
  background: rgba(234, 32, 39, 0.1);
  border-color: #ea2027;
  box-shadow: 0 0 15px rgba(234, 32, 39, 0.2);
}
</style>