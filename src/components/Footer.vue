<template>
  <nav class="w-full absolute z-50 bottom-0">
    <a :href="to" class="h-8 flex justify-center items-center cursor-pointer">
      down
    </a>
  </nav>
</template>

<script setup>
import { useSwipe } from "@vueuse/core";
const props = defineProps({
  to: String,
});
const { isSwiping, direction } = useSwipe();
</script>