<script setup>

</script>

<template>
  <div class="header">
  <router-link class="header-page" to="/"><img src="../images/header/icone.png" alt=""></img></router-link>
  <router-link class="header-page-news" to="Page1">НОВОСТИ</router-link>
  <router-link class="header-page-news" to="Page2">ГЕРОИ</router-link>
  <router-link class="header-page-news" to="Page3">ИГРОКИ</router-link>
  </div>

</template>

<style scoped>
@font-face {
  font-family: 'Inter';
  src: url('../fonts/InterVariable.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
template {

}
.header {
  display: flex;
  justify-content: start;
  align-items: center;
  background: black;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  font-family: Inter, sans-serif;
  font-weight: bold;
  z-index: 5;
  position: relative;
}
.header-page img {
  height: 70px;
  width: 293px;
}
.header img {
  padding-left: 32px;
}
.header-page-news {
  padding-left: 77px;
  text-decoration: none;
  background: linear-gradient(to bottom, #aeb6be 0%, #ffffff 50%, #7a8288 51%, #d1d5db 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 22px;
  transition: color 0.3s ease;
}

.header-page-news:hover {
  color: #E2E2E9;
  text-shadow: 0 0 8px white;
}


</style>