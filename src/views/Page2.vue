<script setup>
import { ref, computed } from 'vue';

const activeAttr = ref(null);
const search = ref('');
const attributes = ['str', 'agi', 'int', 'uni'];

const toggleAttr = (attr) => {
  activeAttr.value = activeAttr.value === attr ? null : attr;
};

const buttons = computed(() => {
  return attributes.map(attr => ({
    id: attr,
    classes: [
      'att-icon',
      attr,
      {
        active: activeAttr.value === attr,
        dim: activeAttr.value !== null && activeAttr.value !== attr
      }
    ]
  }));
});

const isHeroVisible = (name) => {
  return name.toLowerCase().includes(search.value.toLowerCase().trim());
};

const isAttVisible = (attId) => {
  return !activeAttr.value || activeAttr.value === attId;
};
</script>

<template>
  <div class="page">
    <h1>ВЫБЕРИТЕ ГЕРОЯ</h1>

    <div class="filters">
      <span class="filter-text">ФИЛЬТР</span>

      <div class="attrs">
        <span>АТРИБУТ</span>
        <button v-for="btn in buttons"
                :key="btn.id"
                :class="btn.classes"
                @click="toggleAttr(btn.id)">
        </button>
      </div>

      <div class="search">
        <img class="search-icon" src="../images/Page2/heroes-filter/Search.png" height="33" width="33"/>
        <input type="text" v-model="search" placeholder="Поиск...">
      </div>
    </div>

    <div class="content">
      <div class="group" v-show="isAttVisible('str')">
        <h2><span class="att-icon str"></span> СИЛА</h2>
        <div class="grid">
          <router-link  to="alchemist" class="card" v-show="isHeroVisible('Alchemist')">
            <img src="../images/Page2/heroes-filter/image%2078.png">
            <div class="hero-card-text">ALCHEMIST</div>
          </router-link>
          <router-link  to="axe" class="card" v-show="isHeroVisible('Axe')">
            <img src="../images/Page2/heroes-filter/image%2079.png">
            <div class="hero-card-text">AXE</div>
          </router-link>
          <router-link  to="bristleback" class="card" v-show="isHeroVisible('Bristleback')">
            <img src="../images/Page2/heroes-filter/image%2080.png">
            <div class="hero-card-text">BRISTLEBACK</div>
          </router-link>
          <router-link to="centaur-warrunner"class="card" v-show="isHeroVisible('Centaur Warrunner')">
            <img src="../images/Page2/heroes-filter/image%2081.png">
            <div class="hero-card-text">CENTAUR WARRUNNER</div>
          </router-link>
          <router-link  to="chaos-knight" class="card" v-show="isHeroVisible('Chaos Knight')">
            <img src="../images/Page2/heroes-filter/image%2082.png">
            <div class="hero-card-text">CHAOS KNIGHT</div>
          </router-link>
        </div>
      </div>

      <div class="group" v-show="isAttVisible('agi')">
        <h2><span class="att-icon agi"></span> ЛОВКОСТЬ</h2>
        <div class="grid">
          <router-link  to="anti-mage" class="card" v-show="isHeroVisible('Anti-Mage')">
            <img src="../images/Page2/heroes-filter/image%20115.png">
            <div class="hero-card-text">ANTI-MAGE</div>
          </router-link>
          <router-link  to="bloodseeker" class="card" v-show="isHeroVisible('Bloodseeker')">
            <img src="../images/Page2/heroes-filter/image%20117.png">
            <div class="hero-card-text">BLOODSEEKER</div>
          </router-link>
          <router-link  to="bounty-hunter" class="card" v-show="isHeroVisible('Bounty Hunter')">
            <img src="../images/Page2/heroes-filter/image%20116.png">
            <div class="hero-card-text">BOUNTY HUNTER</div>
          </router-link>
          <router-link  to="broodmother" class="card" v-show="isHeroVisible('Broodmother')">
            <img src="../images/Page2/heroes-filter/image%20118.png">
            <div class="hero-card-text">BROODMOTHER</div>
          </router-link>
        </div>
      </div>

      <div class="group" v-show="isAttVisible('int')">
        <h2><span class="att-icon int"></span> ИНТЕЛЛЕКТ</h2>
        <div class="grid">
          <router-link to="ancient-apparation" class="card" v-show="isHeroVisible('Ancient Apparition')">
            <img src="../images/Page2/heroes-filter/image%20151.png">
            <div class="hero-card-text">ANCIENT APPARARION</div>
          </router-link>
          <router-link  to="chen" class="card" v-show="isHeroVisible('Chen')">
            <img src="../images/Page2/heroes-filter/image%20152.png">
            <div class="hero-card-text">CHEN</div>
          </router-link>
          <router-link  to="crystal-maiden" class="card" v-show="isHeroVisible('Crystal Maiden')">
            <img src="../images/Page2/heroes-filter/image%20153.png">
            <div class="hero-card-text">CRYSTAL MAIDEN</div>
          </router-link>
          <router-link  to="dark-seer" class="card" v-show="isHeroVisible('Dark Seer')">
            <img src="../images/Page2/heroes-filter/image%20154.png">
            <div class="hero-card-text">DARK SEER</div>
        </router-link>
        </div>
      </div>

      <div class="group" v-show="isAttVisible('uni')">
        <h2><span class="att-icon uni"></span> УНИВЕРСАЛ</h2>
        <div class="grid">
          <router-link  to="abaddon" class="card" v-show="isHeroVisible('Abaddon')">
            <img src="../images/Page2/heroes-filter/image%20186.png">
            <div class="hero-card-text">ABADDON</div>
          </router-link>
          <router-link  to="arc-warden" class="card" v-show="isHeroVisible('Arc Warden')">
            <img src="../images/Page2/heroes-filter/image%20187.png">
            <div class="hero-card-text">ARC WARDEN</div>
          </router-link>
          <router-link  to="bane" class="card" v-show="isHeroVisible('Bane')">
            <img src="../images/Page2/heroes-filter/image%20188.png">
            <div class="hero-card-text">BANE</div>
          </router-link>
          <router-link  to="batrider" class="card" v-show="isHeroVisible('Batrider')">
            <img src="../images/Page2/heroes-filter/image%20189.png">
            <div class="hero-card-text">BATRIDER</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'lora';
  src: url('../fonts/Lora-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  src: url('../fonts/InterVariable.ttf') format('truetype');
  font-style: normal;
}
.page {
  background-color: #060609;
  background-image: radial-gradient(circle at top, #13111c 0%, #060609 70%);
  color: #fff;
  font-family: 'inter', sans-serif;
  padding: 40px 20px;
  height: 1200px;
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111017;
  border: 1px solid #2d303e;
  border-radius: 6px;
  padding: 10px 25px;
  max-width: 1100px;
  margin: 0 auto 40px;
  animation: glow-pulse 3s infinite ease-in-out;
}
@keyframes glow-pulse {
  0% { box-shadow: 0 0 5px #6C5CE733; }
  50% { box-shadow: 0 0 20px #6C5CE780; }
  100% { box-shadow: 0 0 5px #6C5CE733; }
}
.filter-text, .attrs span {
  font-size: 16px;
  font-weight: bold;
  font-family: 'inter', sans-serif;
}
.attrs {
  display: flex;
  align-items: center;
  gap: 15px;
}
.att-icon {
  width: 22px;
  height: 22px;
  border: 1px solid transparent;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}
.att-icon:hover {
  transform: scale(1.15);
}
.att-icon {
  transform: scale(1.1);
}
.att-icon.dim {
  filter: brightness(0.3) grayscale(70%);
}

.att-icon {
  width: 30px;
  height: 30px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
}

.str {
  background-image: url('../images/Page2/heroes-filter/image 208.png');
}
.agi {
  background-image: url('../images/Page2/heroes-filter/image 209.png');
}
.int {
  background-image: url('../images/Page2/heroes-filter/image 210.png');
}
.uni {
  background-image: url('../images/Page2/heroes-filter/image 211.png');
}
.search {
  display: flex;
  align-items: center;
  background: #161420;
  border-radius: 4px;
  padding: 4px 10px;
  width: 180px;
  border: 1px solid #36324d;

}
.search-icon {
  margin-right: 8px;
  height: 20px;
  width: 20px;
  cursor: default;
}
.search input {
  background: transparent;
  border: none;
  color: #fff;
  outline: none;
  width: 100%;
}
.content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 35px;
}
h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 22px;
  margin-bottom: 15px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 12px;
}
.card {
  width: 256px;
  height: 144px;
  background: #1a1b23;
  overflow: hidden;
  box-shadow: 0 4px 10px #00000066;
  cursor: pointer;
  transition: 0.15s;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.card:hover {
  transform: scale(1.04);
  filter: brightness(1.15);
  box-shadow: 5px -5px 15px #000000;
}
.card {
  position: relative;
}

.hero-card-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to top, #000000CC, transparent);
  color: white;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .hero-card-text {
  opacity: 1;
}
</style>