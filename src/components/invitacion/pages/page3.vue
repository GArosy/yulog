<template>
  <div class="h-screen w-screen sm:w-[640px] flex flex-col items-center text-[#9b2c1c] text-lg font-[font2]">
    <div class="flex gap-2 mt-16 text-xl">
      <span class="font-light">/</span>
      <span class="font-[font2]">时间 Time</span>
      <span class="font-light">/</span>
    </div>
    <div class="flex flex-col items-center mt-6">
      <span>2024年4月27日 | 中午12时00分</span>
      <span>农历三月十九 星期六</span>
    </div>
    <div class="mt-6">
      <Calendar />
    </div>
    <div class="fixed bottom-[18%] text-center flex flex-col items-center">
      <div class="flex gap-2 mt-16 text-xl mb-4">
        <span class="font-light">/</span>
        <span class="font-[font2]">倒计时</span>
        <span class="font-light">/</span>
      </div>
      <Countdown :time="time"/>
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
import {
  inject, ref, watch,
} from "vue";
import Calendar from "../components/Calendar.vue";
import Countdown from "../components/Countdown.vue";

const time = inject('countdown')
</script>