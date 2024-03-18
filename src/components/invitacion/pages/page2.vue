<template>
  <div class="h-screen flex flex-col justify-center items-center text-5xl">
    <Calendar />
    <Countdown :time="time" />
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