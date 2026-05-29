<script setup>
</script>

<template>
  <div class="news-page">
    <h1 class="news-title">ПОСЛЕДНИЕ НОВОСТИ</h1>
    <div class="news-grid">
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news1.png"/>
          <span class="badge tag-hero">ГЕРОИ</span>
        </div>
        <router-link to="update-7.41" class="card-content">
          <h2 class="card-title">Обновление 7.41</h2>
          <p class="card-title-info">Новая система предметов и global`ный баланс...</p>
          <div class="card-info">
            <span class="card-info-text">Новая система предметов...</span>
            <span class="arrow-icon">→</span>
          </div>
        </router-link>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news2.png"/>
          <span class="badge tag-tournament">ТУРНИР</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">TI2026 Shanghai</h2>
          <p class="card-title-info">The International 2026</p>
          <div class="card-info">
            <span class="card-info-text">Шанхай, сентябрь 2026...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news3.png"/>
          <span class="badge tag-hero">ГЕРОИ</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Обновление 7.40</h2>
          <div class="card-info">
            <span class="card-info-text">Летописное обновление игры...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news4.png"/>
          <span class="badge tag-tournament">ТУРНИР</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Чемпионы The International 2025</h2>
          <div class="card-info">
            <span class="card-info-text">Новая система предметов...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news5.png"/>
          <span class="badge tag-map">КАРТА</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Обновление 7.38</h2>
          <div class="card-info">
            <span class="card-info-text">Изменения ландшафта карты...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news6.png"/>
          <span class="badge tag-tournament">ТУРНИР</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Чемпионы The International 2024</h2>
          <div class="card-info">
            <span class="card-info-text">Новая история триумфа...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news7.png"/>
          <span class="badge tag-hero">ГЕРОИ</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Обновление 7.37</h2>
          <div class="card-info">
            <span class="card-info-text">Новая система предметов...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news8.png"/>
          <span class="badge tag-hero">ГЕРОИ</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Обновление 7.36</h2>
          <div class="card-info">
            <span class="card-info-text">Новая система предметов, кла...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <div class="news-card">
        <div class="card-image">
          <img src="../images/Page1/news9.png"/>
          <span class="badge tag-tournament">ТУРНИР</span>
        </div>
        <div class="card-content">
          <h2 class="card-title">Чемпионы The International 2023</h2>
          <div class="card-info">
            <span class="card-info-text">Новая система предметов, и...</span>
            <span class="arrow-icon">→</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news-page {
  background-color: #060609;
  background-image: radial-gradient(circle at top, #13111c 0%, #060609 70%);
  padding: 60px 20px;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}

.news-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #ffffff;
  margin-bottom: 50px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.news-card {
  background: #111017;
  border: 1px solid #3d3954;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: glow-pulse 3s infinite ease-in-out;
}
@keyframes glow-pulse {
  0% { box-shadow: 0 0 5px #6C5CE733; }
  50% { box-shadow: 0 0 20px #6C5CE780; }
  100% { box-shadow: 0 0 5px #6C5CE733; }
}
.news-card:hover {
  transform: translateY(-5px);
  border-color: #4a4f83;
  box-shadow: 0 10px 25px #00000080;
}

.card-image {
  position: relative;
  width: 100%;
  padding-top: 220px;
  overflow: hidden;
  background-color: #0d0e14;
}

.card-image img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  z-index: 1;
}

.news-card:hover .card-image img {
  transform: scale(1.04);
}

.badge {
  position: absolute;
  top: 12px; right: 12px;
  padding: 4px 10px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 4px;
  letter-spacing: 0.5px;
  z-index: 2;
}

.tag-hero {
  background: #2575fc;
  color: #fff;
}
.tag-tournament {
  background: #ea2027;
  color: #fff;
}
.tag-map {
  background: #10ac84;
  color: #fff;
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-decoration: none;
}

.card-title {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
  line-height: 1.4;
}

.card-title-info {
  font-size: 13px;
  color: #626275;
  margin: 0 0 15px 0;
}

.card-info {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #1f202e;
}

.card-info-text {
  font-size: 12px;
  color: #626275;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 85%;
}

.arrow-icon {
  font-size: 14px;
  color: #626275;
  transition: color 0.2s, transform 0.2s;
}

.news-card:hover .arrow-icon {
  color: #ffffff;
  transform: translateX(3px);
}
</style>