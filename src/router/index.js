import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/Home.vue'),
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: ()=>import('../views/Page1.vue'),
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: () => import('../views/Page2.vue'),
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: ()=>import('../views/Page3.vue'),
    },
    {
      path: '/reg',
      name: 'reg',
      component: ()=>import('../views/reg.vue'),
    },
    {
      path: '/log',
      name: 'log',
      component: ()=>import('../views/log.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/alchemist',
      name: 'alchemist',
      component: ()=>import('../views/alchemist.vue'),
    },
    {
      path: '/axe',
      name: 'axe',
      component: ()=>import('../views/axe.vue'),
    },
    {
      path: '/bristleback',
      name: 'bristleback',
      component: ()=>import('../views/bristleback.vue'),
    },
    {
      path: '/centaur-warrunner',
      name: 'centaur-warrunner',
      component: ()=>import('../views/centaur-warrunner.vue'),
    },
    {
      path: '/chaos-knight',
      name: 'chaos-knight',
      component: ()=>import('../views/chaos-knight.vue'),
    },
    {
      path: '/anti-mage',
      name: 'anti-mage',
      component: ()=>import('../views/anti-mage.vue'),
    },
    {
      path: '/bloodseeker',
      name: 'bloodseeker',
      component: ()=>import('../views/bloodseeker.vue'),
    },
    {
      path: '/bounty-hunter',
      name: 'bounty-hunter',
      component: ()=>import('../views/bounty-hunter.vue'),
    },
    {
      path: '/broodmother',
      name: 'broodmother',
      component: ()=>import('../views/broodmother.vue'),
    },
    {
      path: '/ancient-apparation',
      name: 'ancient-apparation',
      component: ()=>import('../views/ancient-apparation.vue'),
    },
    {
      path: '/chen',
      name: 'chen',
      component: ()=>import('../views/chen.vue'),
    },
    {
      path: '/crystal-maiden',
      name: 'crystal-maiden',
      component: ()=>import('../views/crystal-maiden.vue'),
    },
    {
      path: '/dark-seer',
      name: 'dark-seer',
      component: ()=>import('../views/dark-seer.vue'),
    },
    {
      path: '/abaddon',
      name: 'abaddon',
      component: ()=>import('../views/abaddon.vue'),
    },
    {
      path: '/arc-warden',
      name: 'arc-warden',
      component: ()=>import('../views/arc-warden.vue'),
    },
    {
      path: '/bane',
      name: 'bane',
      component: ()=>import('../views/bane.vue'),
    },
    {
      path: '/batrider',
      name: 'batrider',
      component: ()=>import('../views/batrider.vue'),
    },


  ],
})

export default router
