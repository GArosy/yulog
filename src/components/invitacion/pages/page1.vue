<template>
  <!-- <audio loop controls>
    <source src="../../../assets/audio/bgm.mp3" type="audio/mpeg">
  </audio> -->
  <div class="h-screen flex justify-center text-5xl" ref="page">
    <audio loop controls ref="music" autoplay>
      <source src="/bgm.mp3" type="audio/mpeg">
    </audio>
    <div @click="play"
      class="fixed right-0 rounded-full w-10 h-10 m-5 bg-black/50 text-sm flex items-center justify-center"
      :class="isPlaying ? 'animate-spin-slow' : ''">
      <NIcon color="#fff" size="24">
        <MusicNote120Regular />
      </NIcon>
    </div>
    <div class="flex flex-col items-center">
      <div
        class="h-[70vh] w-screen sm:w-[640px] bg-[url(https://pic.imgdb.cn/item/65f436ea9f345e8d03b680b5.png)] bg-cover bg-center">
      </div>
      <div class="font-serif flex justify-center items-center gap-3 text-xl mt-5">
        <div>锟 斤 拷</div>
        <div class="text-lg">&</div>
        <div>烫 烫 烫</div>
      </div>
      <div class="font-serif text-3xl mt-4 text-stone-500">2024 / 4 / 27</div>
      <div class="font-serif text-lg mt-1 text-stone-500">山西阳泉红玺汇酒店</div>
      <div class="flex gap-2 mt-4 items-center justify-center text-stone-500 text-lg">
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
import { MusicNote120Regular } from '@vicons/fluent'
import { NIcon } from 'naive-ui'
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

const music = ref(null)

const isPlaying = ref(false)
const play = () => {
  if (!isPlaying.value) {
    console.log(music, 'play');
    music.value.play()
  } else {
    console.log(music, 'pause');
    music.value.pause()
  }
  isPlaying.value = !isPlaying.value
}

</script>

<style scoped lang="scss">
.time-box {
  @apply w-12 h-12 rounded-full bg-[#c7bea9] flex justify-center items-center text-white text-2xl;
}
</style>