<template>
  <div class="font-[font1] h-screen flex justify-center text-base text-[#92322d]" ref="page">
    <div class="flex flex-col items-center">
      <div 
        class="w-screen sm:w-[640px] bg-[url(https://pic.imgdb.cn/item/6603c5a09f345e8d038df618.jpg)] bg-cover bg-center"
        :class="isIOS ? 'h-[60vh]' : 'h-[70vh]'" 
      />
      <div class="sm:w-[490px] w-full h-[30vh] flex-col flex justify-between">
        <div class="flex justify-between items-center text-xl px-6 py-1 italic">
          <div>我</div>
          <div>们</div>
          <div>结</div>
          <div>婚</div>
          <div>啦</div>
        </div>
        <div class="flex flex-col justify-center items-center text-2xl font-[font2] text-red-900">
          <div class="text-red-900">
            Mr.高胜禹
          </div>
          <div class="relative flex items-center justify-center w-1/2">
            <div class="h-px bg-red-700 w-1/4"></div>
            <div class="text-base text-red-700 leading-4 font-[fzkt]">&</div>
            <div class="h-px bg-red-700 w-1/4"></div>
            <div class="absolute bottom-0 flex justify-between gap-40 text-[80px] font-black text-red-100">
              <div>04</div>
              <div>27</div>
            </div>
          </div>
          <div class="text-red-900">
            Ms.王雪蓉
          </div>
        </div>
        <div class="px-6 pb-6 flex justify-between">
          <div>山西阳泉</div>
          <div>红玺汇酒店</div>
        </div>
      </div>
      <div class="fixed h-12 w-12 top-0 left-0 m-3" style="border-top: 1px solid #fff9;border-left: 1px solid #fff9;" />
      <div class="fixed h-12 w-12 top-0 right-0 m-3" style="border-top: 1px solid #fff9;border-right: 1px solid #fff9;" />
      <div class="fixed h-12 w-12 bottom-0 left-0 m-3" style="border-bottom: 1px solid #9b2c1c;border-left: 1px solid #9b2c1c;" />
      <div class="fixed h-12 w-12 bottom-0 right-0 m-3" style="border-bottom: 1px solid #9b2c1c;border-right: 1px solid #9b2c1c;" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isIOS = inject('isIOS')
</script>

<style scoped lang="scss">
</style>