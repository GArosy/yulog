<template>
  <div class="h-screen w-screen sm:w-[640px] flex flex-col items-center font-[fzkt] text-stone-700">
    <Calendar />
    <Countdown :time="time" />
    <div class="fixed h-12 w-12 top-0 left-0 m-2 " style="border-top: 1px solid #0005 ;border-left: 1px solid #0005 ;" />
    <div class="fixed h-12 w-12 top-0 right-0 m-2 " style="border-top: 1px solid #0005 ;border-right: 1px solid #0005 ;" />
    <div class="fixed h-12 w-12 bottom-0 left-0 m-2 " style="border-bottom: 1px solid #0005;border-left: 1px solid #0005;" />
    <div class="fixed h-12 w-12 bottom-0 right-0 m-2 " style="border-bottom: 1px solid #0005;border-right: 1px solid #0005;" />
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