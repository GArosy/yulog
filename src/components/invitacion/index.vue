<script setup>
import {
  ref, onMounted, watch, provide,
} from "vue"
import { useSwipe } from "@vueuse/core";

import Up from './components/Up.vue'
import Down from './components/Down.vue'
import MusicIcon from '../../assets/icons/music.svg'
import Loading from './components/Loading.vue'
import Page1 from './pages/page1.vue'
import Page2 from './pages/page2.vue'
import Page3 from './pages/page3.vue'
import Page4 from './pages/page4.vue'

import { useCountdown } from './hooks/useCountdown.ts'

const envelope = ref(true)

const currentPage = ref(1)
const isForward = ref(true)
const nextPage = () => {
  if (currentPage.value >= 4) return
  isForward.value = true
  currentPage.value = currentPage.value + 1
}
const prevPage = () => {
  if (currentPage.value <= 1) return
  isForward.value = false
  currentPage.value = currentPage.value - 1
}

const container = ref(null);
const hasPaged = ref(false);

const { isSwiping, direction, lengthY } = useSwipe(container);
watch([isSwiping, direction, lengthY], ([isSwiping, direction, lengthY]) => {
  if (isSwiping) {
    if (hasPaged.value) return // 防止连续触发翻页事件
    if (direction === "up" && lengthY > 200) {
      nextPage()
      hasPaged.value = true
    }
    if (direction === "down" && lengthY < -200) {
      prevPage()
      hasPaged.value = true
    }
  } else {
    hasPaged.value = false
  }
});

const music = ref(null)
const isPlaying = ref(true)
const play = () => {
  if (!isPlaying.value) {
    music.value.play()
  } else {
    music.value.pause()
  }
  isPlaying.value = !isPlaying.value
}

const onClick = () => {
  envelope.value = false
  music.value.play()
}

const { time } = useCountdown()
provide('countdown', time)
</script>

<template>
  <div class="h-screen bg-stone-50" ref="container">
    <audio loop ref="music" autoplay hidden>
      <source src="/bgm.mp3" type="audio/mpeg">
    </audio>
    <Transition name="fade">
      <Loading v-if="envelope" @click="onClick"/>
    </Transition>
    <div
      class="fixed right-0 rounded-full w-10 h-10 m-5 bg-black/50 text-sm flex items-center justify-center z-10"
      :class="isPlaying ? 'animate-spin-slow' : ''"
      @click="play"
    >
      <img :src="MusicIcon.src" alt="music" class="w-6 h-6" />
    </div>
    <Transition :name="isForward ? 'forward' : 'back'">
      <Page1 class="page" v-if="currentPage === 1" />
      <Page2 class="page" v-else-if="currentPage === 2" />
      <Page3 class="page" v-else-if="currentPage === 3" />
      <Page4 class="page" v-else-if="currentPage === 4" />
    </Transition>
    <Up v-if="currentPage !== 1" @click="prevPage" />
    <Down v-if="currentPage !== 4" @click="nextPage" />
  </div>
</template>

<style>
@font-face {
  font-family: 'font1';
  src: url(../../font/HYBS.woff2);
}
@font-face {
  font-family: 'font2';
  src: url(../../font/HanYiZhongSong.ttf);
}
@font-face {
  font-family: 'fzkt';
  src: url(../../font/FangZhengKaiTiJianTi.ttf);
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  /* opacity: 0; */
  transform: translateY(-100%);
}

/* 页面切换动画 */
.forward-move,
.forward-enter-active,
.forward-leave-active {
  transition: all 0.5s ease;
}

.forward-enter-from {
  transform: translateY(100%);
}
.forward-leave-to {
  transform: translateY(-100%);
}

/* .back-move, 对移动中的元素应用的过渡 */
.back-enter-active,
.back-leave-active {
  transition: all 0.5s ease;
}

.back-enter-from {
  transform: translateY(-100%);
}
.back-leave-to {
  transform: translateY(100%);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.page {
  @apply h-screen w-full absolute z-0;
}

</style>