<script setup>
import { ref, onMounted } from 'vue'
import { getDateInfo } from '../utils/time'

const props = defineProps({
  countdownTime: Number
})
const emit = defineEmits(['onTimeout'])

const processValue = ref(0)

let interval = null
const startTime = Date.now()
const during = props.countdownTime

function increment() {
  processValue.value = ((Date.now() - startTime) / during) * 100
  if (processValue.value >= 100) {
    clearInterval(interval)
    emit('onTimeout')
  }
}

onMounted(() => {
  if (sessionStorage.getItem('showLoading') === 'true') {
    emit('onTimeout')
  } else {
    sessionStorage.setItem('showLoading', true)
  }
  interval = setInterval(() => {
    increment()
  }, 100)
})
</script>

<template>
  <div class="loading">
    <section class="nes-container">
      <section class="message-list">
        <section class="message -left">
          <!-- <i class="nes-bcrikko"></i> -->
          <i class="nes-octocat animate"></i>
          <div class="nes-balloon from-left">
            <p>测试字体</p>
            <p>{{ getDateInfo().specialDayInfo.message }}</p>
          </div>
        </section>

        <section class="message -right">
          <div class="nes-balloon from-right">
            <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
          </div>
          <!-- <i class="nes-bcrikko"></i> -->
        </section>
      </section>
    </section>
    <progress class="nes-progress is-pattern process" :value="processValue" :max="100"></progress>
  </div>
</template>

<style scoped lang="scss">
.loading {
  position: relative;
  height: 100vh;
  .nes-balloon {
    padding: 10px;
  }
  .process {
    width: 90%;
    height: 28px;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

