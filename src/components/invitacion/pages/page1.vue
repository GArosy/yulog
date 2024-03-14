<template>
  <div class="h-screen flex justify-center text-5xl" ref="page">
    <div class="flex flex-col items-center">
      <img src="https://tva1.sinaimg.cn/mw690/007RIY06gy1hnqvql4dunj30rk0zy7wh.jpg"/>
      <div class="text-3xl mt-8 text-stone-500">2024. 4. 27</div>
      <div class="text-lg mt-1 text-stone-500">我们期待您的到来</div>
      <div class="flex gap-2 mt-12 items-center justify-center text-stone-500 text-lg">
        <div class="time-box">{{ time.day }}</div>
        <div>天</div>
        <div class="time-box">{{ time.hour }}</div>
        <div>时</div>
        <div class="time-box">{{ time.minute }}</div>
        <div>分</div>
        <div class="time-box">{{ time.second }}</div>
        <div>秒</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  inject, ref, watch,
} from "vue";
// import { NCountdown } from 'naive-ui'
import dayjs from 'dayjs'
const date = dayjs('2024-04-27')
const time = ref({
  day: '-',
  hour: '-',
  minute: '-',
  second: '-',
})

setInterval(() => {
  time.value = {
    day: date.diff(dayjs(), 'd'),
    hour: date.diff(dayjs(), 'h') % 24,
    minute: date.diff(dayjs(), 'm') % 60,
    second: date.diff(dayjs(), 's') % 60,
  }
}, 1000)


</script>

<style scoped lang="scss">
.time-box {
  @apply w-12 h-12 rounded-full bg-[#c7bea9] flex justify-center items-center text-white text-2xl;
}
</style>