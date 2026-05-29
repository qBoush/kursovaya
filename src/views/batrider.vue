<script setup>
import { ref, computed } from 'vue'

import skill1 from '../images/Page2/heroes/batrider/1skill.png'
import skill2 from '../images/Page2/heroes/batrider/2skill.png'
import skill3 from '../images/Page2/heroes/batrider/3skill.png'
import skill4 from '../images/Page2/heroes/batrider/4skill.png'
import skill11 from '../images/Page2/heroes/batrider/11skill.webm'
import skill22 from '../images/Page2/heroes/batrider/22skill.webm'
import skill33 from '../images/Page2/heroes/batrider/33skill.webm'
import skill44 from '../images/Page2/heroes/batrider/44skill.webm'

const current = ref(0)

const skillData = [
  {
    name:"STICKY NAPALM",
    type:"НАПРАВЛЕННАЯ НА ТОЧКУ",
    damageType:"МАГИЧЕСКИЙ УРОН",
    description: "Облачает выбранную область в вязкое масло, замедляя скорость разворота и передвижения врагов. Любая атака или способность Batrider наносит по подожженным целям дополнительный урон за каждый уровень эффекта.",
    stats:{
      damage:"4 / 8 / 12 / 16",
      stun:"6",
      radius:"375",
      slow:"2 - 14"
    },
    cooldown:"3",
    mana:"25",
    range:"550 / 600 / 650 / 700",
    lore:"Немногие вещи в Яма Тарази горят жарче и дольше, чем местная очищенная смола.",
    video: skill11,
    icon: skill1
  },
  {
    name:"FLAMEBREAK",
    type:"НАПРАВЛЕННАЯ НА ТОЧКУ",
    damageType:"МАГИЧЕСКИЙ УРОН",
    description: "Бросает коктейль Молотова, который взрывается при достижении целевой точки, отбрасывая врагов, нанося им мгновенный, а затем и периодический урон.",
    stats:{
      damage:"30 / 45 / 60 / 75",
      stun:"2 / 4 / 6 / 8",
      radius:"500",
      slow:"-"
    },
    cooldown:"18 / 17 / 16 / 15",
    mana:"110 / 115 / 120 / 125",
    range:"1300",
    lore:"Самодельная зажигательная смесь — излюбленное оружие наездника.",
    video: skill22,
    icon: skill2
  },
  {
    name:"FIREFLY",
    type:"НЕНАПРАВЛЕННАЯ",
    damageType:"МАГИЧЕСКИЙ УРОН",
    description: "Герой взмывает в воздух, оставляя за собой огненный след. Пламя уничтожает деревья на пути и наносит урон всем проходящим сквозь него врагам. Batrider получает бонус к скорости передвижения и беспрепятственный обзор.",
    stats:{
      damage:"30 / 60 / 90 / 120",
      stun:"15",
      radius:"200",
      slow:"+4 / 7 / 10 / 13"
    },
    cooldown:"40 / 37 / 34 / 31",
    mana:"125",
    range:"-",
    lore:"Когда летучая мышь злится, её дыхание воспламеняет сам воздух позади наездника.",
    video: skill33,
    icon: skill3
  },
  {
    name:"FLAMING LASSO",
    type:"НАПРАВЛЕННАЯ НА СУЩЕСТВО",
    damageType:"МАГИЧЕСКИЙ УРОН",
    description: "Захватывает вражеского героя в огненное лассо, позволяя Batrider тащить жертву за собой. Цель теряет возможность атаковать или двигаться. Использование Blink Dagger или телепортации разрывает лассо.",
    stats:{
      damage:"30 / 60 / 90",
      stun:"2.25 / 3 / 3.75",
      radius:"—",
      slow:"—"
    },
    cooldown:"90 / 80 / 70",
    mana:"150 / 175 / 200",
    range:"175",
    lore:"Отказ от правил честного боя гарантирует, что Batrider всегда поймает свою добычу.",
    video: skill44,
    icon: skill4
  }
]

const currentSkill = computed(() => {
  return skillData[current.value]
})

function nextSkill(){
  current.value++
  if(current.value >= skillData.length){
    current.value = 0
  }
}

function prevSkill(){
  current.value--

  if(current.value < 0){
    current.value = skillData.length - 1
  }
}

function setSkill(index){
  current.value = index
}
</script>

<template>
  <div class="background">
    <section class="hero-fullinfo">
      <div class="hero-info">
        <div class="hero-info-text">
          <h1>
            <img class="hero-title-att" src="../images/Page2/heroes-filter/image 211.png" height="40" width="40"/>
            УНИВЕРСАЛЬНЫЙ
          </h1>
          <h2>
            BATRIDER
          </h2>
          <div class="hero-info-skill">
            <img src="../images/Page2/heroes/batrider/1skill.png" height="80" width="80"/>
            <img src="../images/Page2/heroes/batrider/2skill.png" height="80" width="80"/>
            <img src="../images/Page2/heroes/batrider/3skill.png" height="80" width="80"/>
            <img src="../images/Page2/heroes/batrider/4skill.png" height="80" width="80"/>
          </div>
          <div class="hero-info-numbers">
            <div class="hero-info-att">
              <h1>
                СИЛА
              </h1>
              <p>
                <img src="../images/Page2/heroes-filter/image 208.png" height="30" width="30"/>
                21 + 2.0
              </p>
              <h1>
                ЛОВКОСТЬ
              </h1>
              <p>
                <img src="../images/Page2/heroes-filter/image 209.png" height="30" width="30"/>
                15 + 1.8
              </p>
              <h1>
                ИНТЕЛЛЕКТ
              </h1>
              <p>
                <img src="../images/Page2/heroes-filter/image 210.png" height="30" width="30"/>
                22 + 2.0
              </p>
            </div>
            <div>
              <div class="hero-info-stats">
                <div class="stats-damage" data-stats="Урон">
                  <img src="../images/Page2/heroes/ancient-apparation/icon_damage.png" height="32" width="32"/>
                  37-41
                </div>
                <div class="stats-armor" data-stats="Броня">
                  <img src="../images/Page2/heroes/ancient-apparation/icon_armor.png" height="32" width="32"/>
                  4.5
                </div>
                <div class="stats-move-speed" data-stats="Скорость передвижения">
                  <img src="../images/Page2/heroes/ancient-apparation/icon_movement_speed.png" height="32" width="32"/>
                  310
                </div>
                <div class="stats-attack-interval" data-stats="Интервал атаки">
                  <img src="../images/Page2/heroes/ancient-apparation/icon_attack_time.png" height="32" width="32"/>
                  1.7
                </div>
                <div class="stats-attack-speed" data-stats="Скорость атаки">
                  <img src="../images/Page2/heroes/ancient-apparation/icon_base_attack_speed.png" height="32" width="32"/>
                  100
                </div>
                <div class="stats-attack-range" data-stats="Дальность атаки">
                  <img src="../images/Page2/heroes/ancient-apparation/icon_attack_range.png" height="32" width="32"/>
                  375
                </div>
              </div>
              <div class="hero-info-health">
                <h1>
                  ЗАПАС ЗДОРОВЬЯ
                </h1>
                <div class="health">
                  <h2>
                    582
                  </h2>
                  <h1>
                    2.1
                  </h1>
                </div>
                <h1>
                  ЗАПАС МАНЫ
                </h1>
                <div class="mana">
                  <h2>
                    339
                  </h2>
                  <h1>
                    1.1
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-info-video">
          <video class="hero-info-video" autoplay muted loop playsinline>
            <source src="../images/Page2/heroes/batrider/batrider.webm" type="video/webm"/>
          </video>
        </div>
      </div>
    </section>
    <section class="hero-info-skills">
      <div>
        <div class="skill-window">
          <div class="left">
            <div class="preview">
              <video class="preview-video" :src="currentSkill.video" autoplay muted loop playsinline></video>
            </div>
            <div class="skills">
              <button class="arrow" @click="prevSkill">‹</button>
              <div class="skill-list">
                <div v-for="(skill,index) in skillData" :key="index" class="skill" :class="{ active:index === current }" @click="setSkill(index)">
                  <img :src="skill.icon" alt="">
                </div>
              </div>
              <button class="arrow" @click="nextSkill">›</button>
            </div>
          </div>
          <div class="right">
            <div class="header">
              <div class="icon">
                <img :src="currentSkill.icon" alt="">
              </div>
              <div>
                <h1>
                  {{ currentSkill.name }}
                </h1>
                <div class="tags">
                  <div class="tag">
                    {{ currentSkill.type }}
                  </div>
                  <div class="tag">
                    {{ currentSkill.damageType }}
                  </div>
                </div>
              </div>
            </div>
            <div class="description">
              {{ currentSkill.description }}
            </div>
            <div class="stats">
              <div class="stat">
                <div class="skill-do">
                  Урон
                </div>
                <div class="value">
                  {{ currentSkill.stats.damage }}
                </div>
              </div>
              <div class="stat">
                <div class="skill-do">
                  Длительность
                </div>
                <div class="value">
                  {{ currentSkill.stats.stun }}
                </div>
              </div>
              <div class="stat">
                <div class="skill-do">
                  Радиус
                </div>
                <div class="value">
                  {{ currentSkill.stats.radius }}
                </div>
              </div>
              <div class="stat">
                <div class="skill-do">
                  Замедление
                </div>
                <div class="value">
                  {{ currentSkill.stats.slow }}
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="resource">
                <div class="cooldown"></div>
                {{ currentSkill.cooldown }}
              </div>
              <div class="resource">
                <div class="mana-cost"></div>
                {{ currentSkill.mana }}
              </div>
              <div class="resource">
                <div class="range-cast"></div>
                {{ currentSkill.range }}
              </div>
            </div>
            <div class="lore">
              {{ currentSkill.lore }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  font-family: 'inter', sans-serif;
}
.background {
  background-image: radial-gradient(circle at top, #13111c 0%, #060609 70%);

}
.hero-fullinfo {
  margin: 0 auto;
}
.hero-info {
  display: flex;
  justify-content: space-between;
}
.hero-info h1 {
  color: #fff;
  font-family: 'Inter', sans-serif;
}
.hero-info h2 {
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 70px;
}
.hero-title-att{
  transform: translateY(8px);
}
.hero-info-text {
  padding-left: 50px;
  padding-top: 50px;
}
.hero-info-skill {
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
}
.hero-info-video {
  height: 1000px;
  justify-content: end;
  transform: translateY(-40px);
}
.hero-info-att {
  padding-right: 30px;
  border-top: #FFFFFF4C 1px solid;
  border-right: #FFFFFF4C 1px solid;
  border-bottom: #FFFFFF4C 1px solid;
  padding-bottom: 15px;
}
.hero-info-att h1 {
  font-size: 16px;
  color: #FFFFFFB3;
  padding-top:10px;
}
.hero-info-att p {
  font-size: 20px;
  color: #FFFFFF;
}
.hero-info-att img {
  transform: translateY(8px);
}
.hero-info-numbers {
  display: flex;
}
.hero-info-stats {
  display: flex;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-top: #FFFFFF4C 1px solid;
}

.stats-damage, .stats-armor, .stats-move-speed, .stats-attack-interval, .stats-attack-speed, .stats-attack-range {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  align-items: center;
  text-align: center;
  padding-top: 10px;
}

.hero-info-stats > div {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
}

.hero-info-stats > div::before {
  content: attr(data-stats);
  position: absolute;
  bottom: 105%;
  left: 50%;
  transform: translateX(-50%);
  border: #6a6a6a 1px solid;
  background-color: #1c242d;
  color: #e4f2f6;
  padding: 6px 12px;
  border-radius: 2px;
  font-family: sans-serif;
  font-size: 14px;
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out;
}

.hero-info-stats > div::after {
  content: "";
  position: absolute;
  bottom: 105%;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  border-width: 6px;
  border-style: solid;
  border-color: #1c242d transparent transparent transparent;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out;
}

.hero-info-stats > div:hover::before, .hero-info-stats > div:hover::after {
  opacity: 1;
}

.hero-info-health {
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: #FFFFFF4C 1px solid;
}
.hero-info-health h1 {
  font-size: 14px;
  padding-bottom: 5px;
  padding-top: 5px;
}
.health {
  background: #1eac00;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
}
.health h1 {
  font-size: 10px;
  transform: translateX(110px);
  color: #ffffffB3;
}
.health h2 {
  font-size: 15px;
}
.mana {
  background: #006aac;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
}
.mana h1 {
  font-size: 10px;
  transform: translateX(110px);
  color: #ffffffB3;
}
.mana h2 {
  font-size: 15px;
}
.hero-info-skills{
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: Inter,sans-serif;
  color:white;
  height: 700px;
  padding-bottom: 50px;
}

.skill-window{
  width:1100px;
  min-height:700px;
  max-height:700px;
  background: #111017;
  border:1px solid #78B4FF1F;
  border-radius:22px;
  padding:18px;
  display:flex;
  gap:20px;
  box-shadow: 0 0 80px #0078FF14, inset 0 0 30px #FFFFFF05;
  animation: glow-pulse 3s infinite ease-in-out;
  overflow:hidden;
}
@keyframes glow-pulse {
  0% { box-shadow: 0 0 5px #6C5CE733; }
  50% { box-shadow: 0 0 20px #6C5CE780; }
  100% { box-shadow: 0 0 5px #6C5CE733; }
}

.left{
  width:52%;
}

.preview{
  width:100%;
  height:420px;
  border-radius:16px;
  overflow:hidden;
  border:1px solid #FFFFFF0F;
}

.preview-video{
  width:100%;
  height:100%;
  object-fit:cover;
}

.skills{
  margin-top:14px;
  display:flex;
  align-items:center;
  gap:12px;
  justify-content: space-between;
}

.arrow{
  width:42px;
  height:42px;
  border:none;
  border-radius:50%;
  background: #FFFFFF0D;
  color:white;
  font-size:22px;
  cursor:pointer;
  transition:.2s;
}

.arrow:hover{
  background: #FFFFFF1F;
}

.skill-list{
  display:flex;
  gap:12px;
}

.skill{
  width:64px;
  height:64px;
  border-radius:10px;
  overflow:hidden;
  border:2px solid transparent;
  cursor:pointer;
  opacity:.55;
  transition:.25s;

  position:relative;
}

.skill img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.skill.active{
  opacity:1;
  border-color:#6C5CE780;
  box-shadow: 0 0 5px #6C5CE733, 0 0 20px #6C5CE780, 0 0 5px #6C5CE733;;
}

.skill.active::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-8px;
  width:100%;
  height:3px;
  border-radius:20px;
  background:#42bfff;
}

.right{
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.header{
  display:flex;
  gap:16px;
  align-items:flex-start;
}

.icon{
  width:90px;
  height:90px;
  border-radius:12px;
  overflow:hidden;
  border:1px solid #FFFFFF14;
}

.icon img{
  width:100%;
  height:100%;
  object-fit:cover;
}

h1{
  font-size:38px;
  letter-spacing:1px;
  margin-bottom:10px;
}

.tags{
  display:flex;
  gap:10px;
}

.tag{
  padding:8px 14px;
  background: #6C5CE733;
  box-shadow: inset 0 0 15px #6C5CE780;
  border-radius:8px;
  color: #FFFFFF;
  font-size:10px;
}

.description{
  margin-top:18px;
  color:#d7e6ff;
  font-size:18px;
  line-height:1.5;
  opacity:.92;
  border-bottom:1px solid #FFFFFF0F;
  padding-bottom:20px;
  height:150px;
  min-height:150px;
  max-height:150px;
  overflow:hidden;
}

.stats{
  margin-top:20px;
  display:grid;
  grid-template-columns:1fr 1fr;
  border:1px solid #FFFFFF0D;
  border-radius:16px;
  overflow:hidden;
}

.stat{
  padding:20px;
  background: #FFFFFF04;
  border-right:1px solid #FFFFFF0D;
  border-bottom:1px solid #FFFFFF0D;
}

.stat:nth-child(2n){
  border-right:none;
}

.skill-do{
  font-size:13px;
  text-transform:uppercase;
  color:#8ca5c6;
  margin-bottom:10px;
}

.value{
  font-size:22px;
}

.bottom{
  margin-top:18px;
  display:flex;
  gap:18px;
  color:#96a9c5;
  font-size:18px;
}

.resource {
  display:flex;
  align-items:center;
  gap:10px;
}

.cooldown{
  background: url("../images/Page2/heroes/ancient-apparation/cooldown.png");
  width:14px;
  height:14px;
  border-radius:4px;
  background-size: cover;
}

.mana-cost{
  background: linear-gradient(#00A4DB, #007196);
  width:14px;
  height:14px;
  border-radius:4px;
}

.range-cast{
  background: url("../images/Page2/heroes/ancient-apparation/castrange.png");
  width:14px;
  height:14px;
  border-radius:4px;
  background-size: cover;
}

.lore{
  margin-top:18px;
  border:1px solid #FFFFFF0D;
  border-radius:14px;
  padding:18px;
  background:#FFFFFF05;
  color:#9caec9;
  font-size:16px;
  line-height:1.6;
  font-style:italic;
  height:90px;
  min-height:90px;
  max-height:90px;
  overflow:hidden;
}
</style>