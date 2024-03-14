<template>
  <nav class="w-full absolute z-50">
    <a @click="back" class="h-8 flex justify-center items-center cursor-pointer">
      up
    </a>
  </nav>
</template>

<script setup>
import { useSwipe } from "@vueuse/core";

  const back = () => {
    window.history.back();
  };
  const { isSwiping, direction } = useSwipe();
</script>