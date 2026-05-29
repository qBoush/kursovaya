<script setup>
import { ref } from 'vue'
const selectedRegion = ref('Западная Европа')
</script>

<template>
  <div class="title">
    <div class="title-text">
      <h1>ЛИДЕРЫ СЕЗОНА 2026</h1>
      <p>ТАБЛИЦА ЛИДЕРОВ</p>
    </div>

    <div class="board">
      <div class="filters">
        <div class="filter-group">
          <div class="filter-item">
            Регион:
            <select v-model="selectedRegion">
              <option>Западная Европа</option>
              <option>Восточная Европа</option>
            </select>
          </div>
        </div>
      </div>

      <table>
        <thead>
        <tr>
          <th>Место</th>
          <th>Игрок</th>
          <th>Команда</th>
          <th>Кубок MMR</th>
          <th>Игры</th>
          <th>% Побед</th>
          <th>Любимые Герои</th>
        </tr>
        </thead>
        <tbody v-if="selectedRegion === 'Западная Европа'">
        <tr class="rank-1">
          <td>
            <img class="gold" src="../images/Page3/gold.png"/>
            <span class="rank-number">1</span>
          </td>
          <td>
            <div class="player-info">
              <div class="avatar">
                <img src="../images/Page3/watson.webp"/>
              </div>
              Watson
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo">
                <img src="../images/Page3/entity.webp"/>
              </div>
              Entity
            </div>
          </td>
          <td class="mmr">13,850</td>
          <td class="games-count">28</td>
          <td class="winrate">68%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/morphling.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/faceless_void.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/medusa.png"/></div>
            </div>
          </td>
        </tr>
        <tr class="rank-2">
          <td>
            <img class="silver" src="../images/Page3/silver.png"/>
            <span class="rank-number">2</span>
          </td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/malrine.webp"/></div>
              Malr1ne
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/spirit.webp"/></div>
              Team Spirit
            </div>
          </td>
          <td class="mmr-8-10">13,720</td>
          <td class="games-count">31</td>
          <td class="winrate">66%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/shredder.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/pangolier.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/huskar.png"/></div>
            </div>
          </td>
        </tr>
        <tr class="rank-3">
          <td>
            <img class="bronze" src="../images/Page3/bronze.png"/>
            <span class="rank-number">3</span>
          </td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/atf.webp"/></div>
              ATF
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/falcons.webp"/></div>
              Falcons
            </div>
          </td>
          <td class="mmr-8-10">13,600</td>
          <td class="games-count">29</td>
          <td class="winrate">65%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/razor.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/mars.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/shredder.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">4</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/quinn.webp"/></div>
              Quinn
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/gladiators.webp"/></div>
              Gladiators
            </div>
          </td>
          <td class="mmr-8-10">13,540</td>
          <td class="games-count">26</td>
          <td class="winrate">64%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/ember_spirit.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/pangolier.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/leshrac.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">5</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/nightfall.webp"/></div>
              Nightfall
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/bb.png"/></div>
              BetBoom
            </div>
          </td>
          <td class="mmr-8-10">13,540</td>
          <td class="games-count">24</td>
          <td class="winrate">64%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/terrorblade.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/morphling.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/luna.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">6</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/micke.webp"/></div>
              miCKe
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/liquid.webp"/></div>
              Team Liquid
            </div>
          </td>
          <td class="mmr-8-10">13,520</td>
          <td class="games-count">28</td>
          <td class="winrate">63%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/weaver.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/monkey_king.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/terrorblade.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">7</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/collapse.webp"/></div>
              Collapse
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/spirit.webp"/></div>
              Team Spirit
            </div>
          </td>
          <td class="mmr-8-10">13,480</td>
          <td class="games-count">25</td>
          <td class="winrate">62%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/magnataur.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/mars.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/spirit_breaker.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">8</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/yatoro.webp"/></div>
              Yatoro
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/spirit.webp"/></div>
              Team Spirit
            </div>
          </td>
          <td class="mmr-8-10">13,450</td>
          <td class="games-count">32</td>
          <td class="winrate">61%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/faceless_void.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/morphling.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/phantom_assassin.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">9</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/bzm.webp"/></div>
              bzm
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/og.png"/></div>
              OG
            </div>
          </td>
          <td class="mmr-8-10">13,410</td>
          <td class="games-count">27</td>
          <td class="winrate">60%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/invoker.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/puck.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/ember_spirit.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">10</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/skiter.webp"/></div>
              Skiter
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/falcons.webp"/></div>
              Falcons
            </div>
          </td>
          <td class="mmr-8-10">13,390</td>
          <td class="games-count">30</td>
          <td class="winrate">60%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/chaos_knight.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/terrorblade.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/naga_siren.png"/></div>
            </div>
          </td>
        </tr>
        </tbody>
        <tbody v-if="selectedRegion === 'Восточная Европа'">
        <tr class="rank-1">
          <td>
            <img class="gold" src="../images/Page3/gold.png"/>
            <span class="rank-number">1</span>
          </td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/satanic.webp"/></div>
              Satanic
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/parivision.webp"/></div>
              PARIVISION
            </div>
          </td>
          <td class="mmr">14,110</td>
          <td class="games-count">34</td>
          <td class="winrate">71%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/morphling.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/terrorblade.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/naga_siren.png"/></div>
            </div>
          </td>
        </tr>

        <tr class="rank-2">
          <td>
            <img class="silver" src="../images/Page3/silver.png"/>
            <span class="rank-number">2</span>
          </td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/gpk.webp"/></div>
              gpk
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/bb.png"/></div>
              BetBoom Team
            </div>
          </td>
          <td class="mmr-8-10">13,820</td>
          <td class="games-count">29</td>
          <td class="winrate">67%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/sf.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/storm_spirit.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/puck.png"/></div>
            </div>
          </td>
        </tr>
        <tr class="rank-3">
          <td>
            <img class="bronze" src="../images/Page3/bronze.png"/>
            <span class="rank-number">3</span>
          </td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/squad1x.webp"/></div>
              Squad1x
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/1win.webp"/></div>
              1win
            </div>
          </td>
          <td class="mmr-8-10">13,650</td>
          <td class="games-count">31</td>
          <td class="winrate">64%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/invoker.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/lina.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/ember_spirit.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">4</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/miero.webp"/></div>
              MieRo`
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/bb.png"/></div>
              BetBoom Team
            </div>
          </td>
          <td class="mmr-8-10">13,590</td>
          <td class="games-count">27</td>
          <td class="winrate">63%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/doom.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/centaur.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/tidehunter.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">5</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/larl.webp"/></div>
              Larl
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/spirit.webp"/></div>
              Team Spirit
            </div>
          </td>
          <td class="mmr-8-10">13,510</td>
          <td class="games-count">33</td>
          <td class="winrate">61%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/sniper.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/puck.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/pangolier.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">6</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/kiyotaka.webp"/></div>
              kiyotaka
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/aurora.webp"/></div>
              Aurora
            </div>
          </td>
          <td class="mmr-8-10">13,460</td>
          <td class="games-count">25</td>
          <td class="winrate">62%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/tinker.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/storm_spirit.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/meepo.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">7</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/panto.webp"/></div>
              Panto
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/mouz.webp"/></div>
              MOUZ
            </div>
          </td>
          <td class="mmr-8-10">13,400</td>
          <td class="games-count">30</td>
          <td class="winrate">59%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/disruptor.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/chen.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/clockwerk.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">8</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/munkushi.webp"/></div>
              Munkushi~
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/1win.webp"/></div>
              1win
            </div>
          </td>
          <td class="mmr-8-10">13,380</td>
          <td class="games-count">28</td>
          <td class="winrate">58%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/luna.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/sven.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/lina.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">9</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/malik.webp"/></div>
              Malik
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/parivision.webp"/></div>
              PARIVISION
            </div>
          </td>
          <td class="mmr-8-10">13,350</td>
          <td class="games-count">26</td>
          <td class="winrate">57%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/mars.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/enigma.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/shredder.png"/></div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="rank-number-4-10">10</td>
          <td>
            <div class="player-info">
              <div class="avatar"><img src="../images/Page3/kiritych.webp"/></div>
              Kiritych~
            </div>
          </td>
          <td>
            <div class="team-info">
              <div class="team-logo"><img src="../images/Page3/bb.png"/></div>
              BetBoom Team
            </div>
          </td>
          <td class="mmr-8-10">13,310</td>
          <td class="games-count">29</td>
          <td class="winrate">56%</td>
          <td>
            <div class="heroes">
              <div class="hero-icon"><img src="../images/Page3/chaos_knight.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/terrorblade.png"/></div>
              <div class="hero-icon"><img src="../images/Page3/slark.png"/></div>
            </div>
          </td>
        </tr>

        </tbody>
      </table>
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
* {
  font-family: 'Inter', sans-serif;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #060609;
  background-image: radial-gradient(circle at top, #13111c 0%, #060609 70%);
  padding: 40px 20px;
}

.title-text {
  text-align: center;
  margin-bottom: 25px;
}

.title h1 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1.5px;
}

.title p {
  font-size: 11px;
  color: #626275;
  letter-spacing: 3px;
}

.board {
  width: 100%;
  max-width: 1100px;
  background: #111017;
  border-radius: 6px;
  overflow: hidden;
  animation: glow-pulse 3s infinite ease-in-out;
  border: 1px solid #3d3954;
  position: relative;
}

.board::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(45deg, #6c5ce7, #a29bfe, #6c5ce7);
  z-index: -1;
  border-radius: 7px;
  opacity: 0.3;
  filter: blur(10px);
}

@keyframes glow-pulse {
  0% { box-shadow: 0 0 5px #6C5CE733; }
  50% { box-shadow: 0 0 20px #6C5CE780; }
  100% { box-shadow: 0 0 5px #6C5CE733; }
}

.filters {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #161420;
  border-bottom: 1px solid #231f33;
}

.filter-group {
  display: flex;
  gap: 20px;
}

.filter-item {
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #78788c;
  text-transform: uppercase;
}

.filter-item select {
  background: #1e1c2b;
  color: #fff;
  border: 1px solid #36324d;
  padding: 4px 10px;
  margin-left: 8px;
  cursor: pointer;
  border-radius: 3px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th {
  padding: 16px 20px;
  font-size: 11px;
  color: #626275;
  text-transform: uppercase;
  border-bottom: 1px solid #231f33;
}

td {
  padding: 12px 20px;
  font-size: 13px;
  color: #e2e2e9;
  border-bottom: 1px solid #171522;
  vertical-align: middle;
}

.rank-1 {
  background: linear-gradient(90deg, #D4AF370D 0%, #D4AF3726 50%, #D4AF370D 100%
  );
  background-size: 200% 100%;
  animation: neon 4s infinite linear;
  border: 1px solid #FAD9614D;
  box-shadow: inset 0 0 15px #FAD96133;
}

.rank-2 {
  background: linear-gradient(90deg, #A2AAAF0D 0%, #A2AAAF26 50%, #A2AAAF0D 100%
  );
  background-size: 200% 100%;
  animation: neon 4s infinite linear;
  border: 1px solid #A2AAAF4D;
  box-shadow: inset 0 0 15px #A2AAAF33;
}

.rank-3 {
  background: linear-gradient(90deg, #CD7F320D 0%, #CD7F3226 50%, #CD7F320D 100%
  );
  background-size: 200% 100%;
  animation: neon 4s infinite linear;
  border: 1px solid #CD7F324D;
  box-shadow: inset 0 0 15px #CD7F3233;
}

@keyframes neon {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.rank-number {
  font-weight: 700;
  color: #ffcc00;
  padding-left: 15px;
}

.rank-number-4-10 {
  font-weight: 700;
  padding-left: 35px;
}

.gold, .silver, .bronze {
  height: 40px;
  width: 40px;
  position: absolute;
  transform: translateY(-10px) translateX(-1.5px);
}

.mmr {
  color: #ffcc00;
  font-weight: 700;
  padding-left: 33px;
}
.mmr-8-10 {
  padding-left: 35px;
}
.games-count {
  padding-left: 28px;
}
.winrate {
  padding-left: 35px;
}
.player-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #2a2838;
}

.team-info {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #b5b5c3;
}

.team-logo img {
  width: 18px;
  height: 18px;
}

.heroes {
  display: flex;
  gap: 6px;
}

.hero-icon img {
  width: 34px;
  height: 20px;
  border-radius: 2px;
}
</style>