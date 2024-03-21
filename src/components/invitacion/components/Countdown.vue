<template>
  <div class="flex gap-2 ml-4 items-center justify-center text-red-700 text-lg">
    <div class="time-box">{{ time.day }}</div>
    <div>天</div>
    <div class="time-box">{{ time.hour }}</div>
    <div>时</div>
    <div class="time-box">{{ time.minute }}</div>
    <div>分</div>
    <div class="time-box">{{ time.second }}</div>
    <div>秒</div>
  </div>
</template>

<script setup lang="ts">
import {
  toRefs,
} from "vue";

interface Time {
  day: number
  hour: number
  minute: number
  second: number
}

const props = defineProps<{
  time: Time
}>()
const { time } = toRefs(props)
</script>

<style scoped lang="scss">
.time-box {
  @apply w-11 h-11 rounded-full bg-[#9b2c1c] flex justify-center items-center text-[#d8b76e] font-[font2] text-2xl;
}
</style>