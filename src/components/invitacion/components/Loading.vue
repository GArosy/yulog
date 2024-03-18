<template>
  <div class="absolute bg-stone-50 h-screen w-screen z-20 flex justify-center overflow-hidden">
    <div class="absolute object-fill bg-[url('https://pic.imgdb.cn/item/65f883319f345e8d031309b7.jpg')] h-screen w-screen sm:w-[490px] flex flex-col items-center justify-start blur-3xl" />
    <div class="absolute flex flex-col justify-center" >
      <!-- header -->
      <div class="flex justify-between p-4">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
      <!-- image -->
      <img
        class="relative rounded-full p-8 sm:w-[380px] blur-none animate-spin-slow-2"
        src="https://pic.imgdb.cn/item/65f883319f345e8d031309b7.jpg" 
        alt="1.jpg"
      >
      <!-- text -->
      <div class="flex flex-col w-full px-8">
        <div class="text-[24px] text-white/90">
          高胜禹&王雪蓉的婚礼邀请函
        </div>
        <div class="text-lg text-white/40">
          Wedding Invitation
        </div>
      </div>
      <!-- <div class="absolute top-1/2 p-4 text-2xl text-white bg-red-600 rounded-full">点击打开</div> -->
    </div>
  </div>
</template>

<script setup>
import Down from "../../../assets/icons/down.svg"
import Share from "../../../assets/icons/share.svg"
</script>