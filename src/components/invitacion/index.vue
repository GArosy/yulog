<script setup>
import {
  ref, onMounted, watch,
} from "vue"
import Page1 from './pages/page1.vue'
import Page2 from './pages/page2.vue'
import Page3 from './pages/page3.vue'
import Page4 from './pages/page4.vue'

const pageMap = {
  1: Page1,
  2: Page2,
  3: Page3,
  4: Page4,
}

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

watch(() => currentPage.value, (v) => {
  console.log(v);
})
</script>

<template>
  <div class="h-screen">
    <Transition :name="isForward ? 'forward' : 'back'">
      <Page1 class="page" v-if="currentPage === 1" />
      <Page2 class="page" v-else-if="currentPage === 2" />
      <Page3 class="page" v-else-if="currentPage === 3" />
      <Page4 class="page" v-else-if="currentPage === 4" />
    </Transition>
    <div class="absolute w-full h-32 flex justify-center items-center cursor-pointer bg-translate" @click="prevPage"
      v-if="currentPage !== 1">↑</div>
    <div class="absolute w-full h-32 bottom-0 flex justify-center items-center cursor-pointer bg-translate"
      @click="nextPage" v-if="currentPage !== 4">↓</div>
  </div>
</template>

<style>
.forward-move, /* 对移动中的元素应用的过渡 */
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