<script setup>
import { ref, onMounted } from 'vue'
import Loading from '../components/Loading.vue'
import MainContent from '../components/MainContent.vue'

const loading = ref(true)

const handleTime = () => {
  loading.value = false
}
</script>

<template>
  <main class="main">
    <Loading v-if="loading" :countdownTime="1000 * 3" @onTimeout="handleTime"></Loading>
    <Transition name="fade" mode="out-in">
      <MainContent v-if="!loading"></MainContent>
    </Transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

