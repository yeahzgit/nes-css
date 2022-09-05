<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue'
import 'nes.css/css/nes.min.css';
</script>

<template>
  <Home class="home"></Home>
</template>

<style scoped>
@import '../node_modules/nes.css/css/nes.css';

@font-face {
  font-family: 'z-pix';
  src: url('./assets/zpix.woff2') format('truetype');;
}
@font-face {
  font-family: 'start-2p';
  src: url('./assets/start2p.ttf') format('truetype');;
}
.home {
  font-family: 'z-pix' !important;
  /* font-family: 'start-2p' !important; */
  font-weight: bold ;
  font-size: 14px;
}
</style>

