<template>
  <div class="h-screen w-full sm:w-[640px] flex flex-col items-center text-[#9b2c1c] font-[font2]">
    <img class="w-full p-3 max-w-[640px]" src="https://pic.imgdb.cn/item/6603cb8d9f345e8d03c0632e.jpg" alt="Snipaste_2024-03-27_15-32-06.jpg">
    <div class="flex gap-2 my-2 text-xl">
      <span class="font-light">/</span>
      <span class="font-[font2]">地址 ADDRESS</span>
      <span class="font-light">/</span>
    </div>
    <div class="flex flex-col items-center">
      <span>席设: 山西阳泉 | 红玺汇酒店一层宴会厅</span>
      <span>地址: 郊区大连街377号日昱城内</span>
    </div>
    <div class="p-3 w-full">
      <div id="container" class="sm:w-[640px] w-full h-[32vh] border-stone-100 border-[12px]" />
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
  onMounted
} from "vue";

onMounted(() => {
  const BMap = window.BMapGL
  const map = new BMap.Map("container");
  const point = new BMap.Point(113.623691, 37.872026);
  map.enableScrollWheelZoom(true)
  map.centerAndZoom(point, 16.5);

  const marker = new BMap.Marker(point);
  map.addOverlay(marker); //添加谷歌marker
  const label = new BMap.Label(
    "红玺汇酒店一层宴会厅",
    {
      offset: new BMap.Size(20, -10)
    }
  );
  marker.setLabel(label)
})
</script>