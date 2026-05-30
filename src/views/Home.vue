<script>
export default {
  data() {
    return {
      tracks: [],
      trackData: []
    };
  },
  mounted() {
    this.initHeroSlider();
  },
  methods: {
    initHeroSlider() {
      const allElements = document.querySelectorAll('.hero-cards');
      const setupAnimation = () => {
        allElements.forEach((el, index) => {
          el.innerHTML += el.innerHTML;
          const half = el.scrollHeight / 2;
          this.tracks[index] = el;
          const isReverse = index === 1 || index === 3;
          this.trackData[index] = {
            y: isReverse ? 0 : -half,
            halfHeight: half,
            speed: 0.5,
            direction: isReverse ? 'up' : 'down'
          };
        });
        this.animate();
      };

      if (document.readyState === 'complete') {
        setupAnimation();
      } else {
        window.addEventListener('load', setupAnimation);
      }
    },
    animate() {
      this.trackData.forEach((data, index) => {
        const el = this.tracks[index];
        if (el) {
          if (data.direction === 'down') {
            data.y += data.speed;
            if (data.y >= 0) {
              data.y = -data.halfHeight + (data.y % data.halfHeight);
            }
          } else {
            data.y -= data.speed;
            if (data.y <= -data.halfHeight) {
              data.y = 0 + (data.y % data.halfHeight);
            }
          }
          el.style.transform = `translate3d(0, ${data.y}px, 0)`;
        }
      });
      requestAnimationFrame(this.animate);
    }
  }
};
</script>

<template>
  <section class="home-right-now">
    <video autoplay loop muted playsinline class="home-bg-video">
      <source src="../images/home/background-right.mp4" type="video/mp4">
    </video>
    <div class="home-right-now-content">
      <div class="right-now-text">
        <h1>НАЧИНАЙ<br> ПРЯМО СЕЙЧАС</h1>
        <p>
          «Добро пожаловать в Dota – уникальную игру, вдохновленную . Сражайтесь с друзьями,<br>
          изучайте героев, каждый из которых обладает множеством уникальных способностей!»
        </p>
      </div>
      <div class="home-right-now-button">
        <img src="../images/home/Group 4.png" height="32" width="32"/>
        <button class="right-now-button"> ИГРАТЬ БЕСПЛАТНО<br><span>СКАЧАТЬ В STEAM</span></button>
      </div>
    </div>
  </section>

  <section class="news">
    <div class="news-text">
      <h1>ПОСЛЕДНИЕ НОВОСТИ</h1>
      <router-link class="news-text2" to="Page1">СМОТРЕТЬ ВСЕ</router-link>
    </div>
    <div class="news-images">
      <div class="news-card">
        <img class="news-image-1" src="../images/home/sectionnews/image 3.png" height="169" width="300"/>
        <div class="news-card-info">
          <h1>
            The international 2026
          </h1>
          <p>
            Каждый год преданные Доте игроки со всего света объединяются и неустанно тренируются, преследуя лишь одну цель: бросить вызов соперникам высочайшего класса и одержать победу,...
          </p>
        </div>
      </div>
      <div class="news-card">
        <img class="news-image-2" src="../images/home/sectionnews/image 216.png" height="169" width="300"/>
        <div class="news-card-info">
          <h1>
            Чемпионы The<br>
            international 2025
          </h1>
          <p>
            Поздравляем команду Team Falcons — чемпионов The International 2025. В течение последнего года команда выступала с переменным успехом, но всё же завоевала титул чемпионов в...
          </p>
        </div>
      </div>
      <div class="news-card">
        <img class="news-image-3" src="../images/home/sectionnews/image 214.png" height="169" width="300"/>
        <div class="news-card-info">
          <h1>
            Обновление 7.41
          </h1>
          <p>
            Вышло обновление 7.41. Список<br>изменений можно найти здесь. Кроме<br> того, мы внесли улучшения и исправили различные ошибки: Когда герой<br>применяет на союзника расходник или передаёт...
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="what-dota">
    <div class="what-dota-info">
      <h1>ЧТО ТАКОЕ<br><span>DOTA?</span></h1>
      <p>
        Многопользовательская игра в жанре MOBA<br>
        («многопользовательская онлайновая боевая<br>
        arena»). Разрабатывается компанией Valve<br>
        Corporation.
      </p>
    </div>
  </section>

  <section class="what-your-hero">
    <h1 class="what-your-hero-text1">КОГО ВЫ <br>
      <span class="what-your-hero-text2">ВЫБЕРИТЕ?</span></h1>
    <p class="what-your-hero-text-info">
      Во вселенной Dota представлено множество разнообразных героев, каждый из которых<br>
      обладает уникальными способностями и игровым стилем. Это позволяет игрокам<br>
      адаптировать персонажей под свою стратегию или же нужду команды, что делает каждый<br>
      матч уникальным и непредсказуемым.
    </p>
    <div class="hero-grid-container">
      <div class="hero-grid">
        <div class="hero-column">
          <div class="hero-cards">
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2036.png">
              <div class="hero-card-text">
                SLARDAR
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2062.png">
              <div class="hero-card-text">
                JUGGERNAUT
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2063.png">
              <div class="hero-card-text">
                MEDUSA
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2064.png">
              <div class="hero-card-text">
                JAKIRO
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2065.png">
              <div class="hero-card-text">
                NYX
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2066.png">
              <div class="hero-card-text">
                MORPHLING
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2067.png">
              <div class="hero-card-text">
                SKYWRATH MAGE
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2068.png">
              <div class="hero-card-text">
                SHADOW FIEND
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2069.png">
              <div class="hero-card-text">
                ORACLE
              </div>
            </div>
          </div>
        </div>
        <div class="hero-column">
          <div class="hero-cards">
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2070.png">
              <div class="hero-card-text">
                INVOKER
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2071.png">
              <div class="hero-card-text">
                RUBICK
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2072.png">
              <div class="hero-card-text">
                VOID SPIRIT
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2073.png">
              <div class="hero-card-text">
                LEGION COMMANDER
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2021.png">
              <div class="hero-card-text">
                BOUNTY HUNTER
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2022.png">
              <div class="hero-card-text">
                AXE
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2023.png">
              <div class="hero-card-text">
                LION
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2024.png">
              <div class="hero-card-text">
                MUERTA
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2025.png">
              <div class="hero-card-text">
                DROW RANGER
              </div>
            </div>
          </div>
        </div>
        <div class="hero-column">
          <div class="hero-cards">
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2026.png">
              <div class="hero-card-text">
                BRISTLEBACK
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2035.png">
              <div class="hero-card-text">
                LONE DRUID
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2028.png">
              <div class="hero-card-text">
                LICH
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2029.png">
              <div class="hero-card-text">
                SPIRIT BREAKER
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2030.png">
              <div class="hero-card-text">
                NATURE PROPHET
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2031.png">
              <div class="hero-card-text">
                KUNKKA
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2032.png">
              <div class="hero-card-text">
                SNIPER
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2033.png">
              <div class="hero-card-text">
                DEATH PROPHET
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2034.png">
              <div class="hero-card-text">
                WITCH DOCTOR
              </div>
            </div>
          </div>
        </div>
        <div class="hero-column">
          <div class="hero-cards">
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2037.png">
              <div class="hero-card-text">
                MARCI
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2038.png">
              <div class="hero-card-text">
                IO
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2039.png">
              <div class="hero-card-text">
                NAGA
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2040.png">
              <div class="hero-card-text">
                NECROPHOS
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2041.png">
              <div class="hero-card-text">
                MONKEY KING
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2042.png">
              <div class="hero-card-text">
                DAZZLE
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2043.png">
              <div class="hero-card-text">
                TERRORBLADE
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2044.png">
              <div class="hero-card-text">
                PHOENIX
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2045.png">
              <div class="hero-card-text">
                URSA
              </div>
            </div>
          </div>
        </div>
        <div class="hero-column">
          <div class="hero-cards">
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2046.png">
              <div class="hero-card-text">
                ZEUS
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2047.png">
              <div class="hero-card-text">
                PHANTOM ASSASIN
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2048.png">
              <div class="hero-card-text">
                DOOM
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2049.png">
              <div class="hero-card-text">
                EARTHSHAKER
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2050.png">
              <div class="hero-card-text">
                KEZ
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2051.png">
              <div class="hero-card-text">
                WARLOCK
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2052.png">
              <div class="hero-card-text">
                KEEPER OF THE LIGHT
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2053.png">
              <div class="hero-card-text">
                VENGEFUL SPIRIT
              </div>
            </div>
            <div class="hero-card">
              <img src="../images/what-your-hero/image%2054.png">
              <div class="hero-card-text">
                ABBADON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="start-play">
    <div class="start-play-info">
      <h1 class="start-play-text1">НАЧИНАЙ<br>
        <span class="start-play-text2">СЕЙЧАС</span></h1>
      <img src="../images/home/Group 4.png" height="32" width="32"/>
      <button class="right-now-button"> ИГРАТЬ БЕСПЛАТНО<br><span>СКАЧАТЬ В STEAM</span></button>
    </div>
  </section>
</template>

<style>
@font-face {
  font-family: 'lora';
  src: url('../fonts/Lora-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Inter';
  src: url('../fonts/InterVariable.ttf') format('truetype');
  font-style: normal;
}
body {
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #000;
}

.home-right-now {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #000;
}

.home-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.home-right-now-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
}

.home-right-now h1 {
  font-size: 64px;
  color: #FFFFFF;
  padding-top: 150px;
  padding-bottom: 14px;
  font-family: 'lora';
  display: inline-block;
  text-align: left;
  margin-right: 1240px ;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
}

.home-right-now p {
  color: #FFFFFFB3;
  font-family: 'lora';
  font-size: 20px;
  margin-right: 900px ;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
}
.home-right-now-button {
  text-align: center;
  margin-right: 1500px ;
}
.right-now-text {
  padding-left: 43px;
  padding-bottom: 74px;
  text-align: center;
}

.right-now-button {
  margin-left: 39px;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 5px;
  padding-left: 63px;
  background: none;
  width: 276px;
  font-size: 19px;
  color: #FFFFFF;
  border-color: #FFFFFFB3;
  border-radius: 5px;
  font-family: 'Inter';
  font-weight: Bold;
}

.home-right-now img {
  transform: translateX(87px) translateY(-2px);
}

.news {
  background-image: url('../images/home/sectionnews/background.jpg');
  width: 1922px;
  height: 342px;
  margin: 0 auto;
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
}

.news-text {
  display: flex;
  font-family: 'lora' , sans-serif;
  font-weight: bold;
  padding-left: 480px;
  padding-top: 50px;
  padding-bottom: 10px;
  color: #FFFFFF;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
}
.news-text2 {
  margin-top: 10px;
  padding-left: 20px;
  font-size: 22px;
  text-decoration: none;
  color: #FFFFFFB3;
}
.news-images {
  display: flex;
  gap: 20px;
  justify-content: center;
  border-radius: 5px;
  border: 4px solid transparent;
  background-size: 100%;
}

.news-image-1 {
  border: 4px solid;
  border-image: linear-gradient(135deg, #d4af37 0%, #fef9d7 50%, #d4af37 100%) 1;
}
.news-image-2 {
  border: 4px solid #00f2ff;
}

.news-image-3 {
  border: 4px solid transparent;
  border-image: linear-gradient(to bottom, #5d4037, #2e1f1a) 10%;
}
.news-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.news-card-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: white;
  font-family: 'Inter', sans-serif;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.news-card-info h1 {
  font-size: 18px;
  margin-bottom: 8px;
  text-transform: uppercase;
  padding-left: 5px;
  text-align: center;
}

.news-card-info p {
  font-size: 14px;
  color: #FFFFFFB3;
  padding-left: 5px;
  text-align: center;
}

.news-card:hover .news-card-info {
  opacity: 1;
  transform: translateY(0);
}

.news-card-info {
  background: linear-gradient(to bottom, #1a151000, #1a1510f2);
}
.news-card-info {
  background: linear-gradient(to bottom, #00141e00, #00141ef2);
}
.news-card-info {
  background: linear-gradient(to bottom, #140f0a00, #140f0af2);
}

.news-images {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;
}
.what-dota {
  background: url("../images/what-dota/image 6.png");
  height: 1080px;
  width: 1920px;
  background-size: cover;
  margin: 0 auto;
}

.what-dota h1 {
  padding: 296px 0 0 0;
  color: #FFFFFFB3;
  font-family: 'lora';
  font-size: 51px;
  text-align: center;
  text-shadow: black 0px 0px 20px;
}

.what-dota span {
  color: white;
  font-family: 'lora';
  font-size: 80px;
}

.what-dota p {
  text-align: center;
  font-family: 'lora';
  font-size: 40px;
  color: #FFFFFFB3;
  text-shadow: black 0px 0px 20px;
}
.what-your-hero {
  background-color: #000;
  width: 1922px;
  margin: 0 auto;
}
.what-your-hero-text1 {
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 100px;
  text-align: center;
  font-size: 51px;
  color: #FFFFFFB3;
  font-family: 'lora','sans-serif';
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
  z-index: 10;
  pointer-events: none;
}
.what-your-hero-text2 {
  color: #FFFFFF;
  font-size: 60px;

}
.what-your-hero-text-info {
  font-size: 30px;
  color: #FFFFFFB3;
  font-family: 'lora','sans-serif';
  text-align: center;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
  top: 2550px;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  padding-top: 120px;

}
.hero-grid-container {
  width: 100%;
  height: 700px;
  overflow: hidden;
  background-color: #000;
  position: relative;
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
}

.hero-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px 0;
  height: 100%;
}

.hero-column {
  width: 220px;
  height: 100%;
  position: relative;
}

.hero-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  width: 100%;
  will-change: transform;
}

.hero-card {
  position: relative;
  width: 100%;
  height: 140px;
  background: #1a1a1a;
  border: none;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 1;
}

.hero-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-card:hover {
  transform: scale(1.1);
  z-index: 100;
}

.hero-card-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to top, black, transparent);
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease;
  box-sizing: border-box;
  pointer-events: none;
}

.hero-card:hover .hero-card-text {
  opacity: 1;
}
.start-play {
  background-image: url('../images/start-play/image 75.png');
  height: 318px;
  width: 1920px;
  margin: 0 auto;
}
.start-play-text1 {
  font-family: 'lora', sans-serif;
  font-size: 51px;
  color: #FFFFFFB3;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
  padding-left: 63px;
  padding-top: 30px;
  padding-bottom: 30px ;

}
.start-play-text2 {
  font-family: 'lora', sans-serif;
  font-size: 60px;
  color: #FFFFFF;
  text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px black;
}
.start-play-info img {
  transform: translateX(87px) translateY(-2px);
}
</style>