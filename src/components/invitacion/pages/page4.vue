<template>
  <div class="h-screen w-screen sm:w-[640px] flex flex-col items-center text-[#9b2c1c] font-[font2]">
    <div class="flex gap-2 mt-16 text-xl mb-4">
      <span class="font-light">/</span>
      <span class="font-[font2]">地址 ADDRESS</span>
      <span class="font-light">/</span>
    </div>
    <div id="container" class="w-full h-[30vh]" />
    <div class="flex flex-col items-center mt-6">
      <span>席设: 山西阳泉 | 红玺汇酒店一层宴会厅</span>
      <span>地址: 郊区大连街377号日昱城内</span>
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
  onMounted, ref, watch,
} from "vue";

onMounted(() => {
  const BMap = window.BMapGL
  const map = new BMap.Map("container");
  console.log(map);
  const x = 1
  const y = 1
  const point = new BMap.Point(113.623691, 37.872026);
  map.enableScrollWheelZoom(true)
  map.centerAndZoom(point, 16.5);

  const marker = new BMap.Marker(point);
  map.addOverlay(marker); //添加谷歌marker
  const label = new BMap.Label(
    "红玺汇酒店一层大厅",
    {
      offset: new BMap.Size(20, -10)
    }
  );
  marker.setLabel(label)
})
</script>