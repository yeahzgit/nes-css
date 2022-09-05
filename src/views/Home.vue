<script setup>
import { ref, onMounted } from 'vue'
import Loading from '../components/Loading.vue'

const handleTime = () => {
  console.log('timeout')
}

// onMounted() {
//   // TODO 处理刷新
// }
</script>

<template>
  <main class="main">
    <Loading :countdownTime="1000 * 5" @onTimeout="handleTime" />
  </main>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  height: 100vh;
  .process {
    width: 90%;
    height: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

