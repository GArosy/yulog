<template>
  <div class="h-screen w-screen sm:w-[640px] flex flex-col items-center font-[fzkt] text-[#9b2c1c]">

    <div class="flex flex-col items-center gap-6 text-lg">
      <div class="flex flex-col items-center mt-[72px]">
        <span>我们决定</span>
        <span>在2024年4月27日这一天</span>
        <span>将携手走过的有限个日夜</span>
        <span>延续至无限个互相陪伴的时刻</span>
      </div>
      <div class="flex flex-col items-center">
        <span>我们真诚地邀请</span>
        <span>人生中最重要的家人、朋友</span>
        <span>一同见证我们的爱情，分享我们的喜悦</span>
      </div>
    </div>
    <div class="flex items-center justify-center gap-px px-2 py-6 w-full text-base text-[#9b2c1c]">
      <div class="flex flex-col items-center">
        <img class="w-[48vw] max-w-[300px]" src="https://pic.imgdb.cn/item/65f985d29f345e8d030821c1.jpg" alt="Snipaste_2024-03-19_20-30-24.jpg">
        <div class="flex gap-2 mt-1">
          <div>新郎</div>
          <div>高胜禹</div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="w-[48vw] max-w-[300px]" src="https://pic.imgdb.cn/item/65f985d29f345e8d030822ec.jpg" alt="Snipaste_2024-03-19_20-31-33.jpg">
        <div class="flex gap-2 mt-1">
          <div>新娘</div>
          <div>王雪蓉</div>
        </div>
      </div>
    </div>
    <div 
      class="fixed text-center bottom-[15%]"
    >
      <div style="border-top: 1px solid #9b2c1c ;border-bottom: 1px solid #9b2c1c ;">
        <span class="font-[font2] text-red-700 text-2xl">好久不见，婚礼见</span>
      </div>
    </div>
    <div class="fixed h-12 w-12 top-0 left-0 m-3"
      style="border-top: 1px solid #9b2c1c ;border-left: 1px solid #9b2c1c ;" />
    <div class="fixed h-12 w-12 top-0 right-0 m-3"
      style="border-top: 1px solid #9b2c1c ;border-right: 1px solid #9b2c1c ;" />
    <div class="fixed h-12 w-12 bottom-0 left-0 m-3"
      style="border-bottom: 1px solid #9b2c1c;border-left: 1px solid #9b2c1c;" />
    <div class="fixed h-12 w-12 bottom-0 right-0 m-3"
      style="border-bottom: 1px solid #9b2c1c;border-right: 1px solid #9b2c1c;" />
  </div>
</template>

<script setup>
import { inject } from 'vue'

const isIOS = inject('isIOS')
</script>