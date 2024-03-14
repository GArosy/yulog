<template>
  <div class="h-screen flex justify-center text-5xl" ref="page">
    <div class="flex flex-col items-center">
      <img src="http://tva1.sinaimg.cn/large/007RIY06gy1hnqsw00rofj30rk0zy7wh.jpg" />
      <div class="text-7xl mt-20 text-stone-500">2024. 4. 27</div>
      <div class="text-4xl mt-4 text-stone-500">我们期待您的到来</div>
      <div class="flex gap-4 mt-16 items-center justify-center text-stone-500 text-4xl">
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
  @apply w-28 h-28 rounded-full bg-[#c7bea9] flex justify-center items-center text-white text-5xl;
}
</style>