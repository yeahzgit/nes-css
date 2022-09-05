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
  interval = setInterval(() => {
    increment()
  }, 100)
})
</script>

<template>
  <div class="main">
    main
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

