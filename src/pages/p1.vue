<template>
  <Header client:load />
  <div class="bg-gray-200 h-screen" ref="content">
    <h1>{{ isSwiping }}</h1>
    <h1>{{ direction }}</h1>
    <h1>{{ lengthY }}</h1>
  </div>
  <Footer :to="'p2'" client:load />
</template>

<script setup>
import {
  ref, watch,
} from "vue";
import { useSwipe } from "@vueuse/core";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const back = () => {
  window.history.back();
};
const content = ref(null);
const { isSwiping, direction, lengthY } = useSwipe(content);
// watch([isSwiping, direction, lengthY], ([isSwiping, direction, lengthY]) => {
//   console.log(isSwiping, direction, lengthY);
//   if (isSwiping && direction === "up" && lengthY > 300) {
//     //新建a标签
//     var a = document.createElement("a");
//     //创建一个文本节点
//     var link = document.createTextNode("p2");
//     //将文本节点添加到a标签中
//     a.appendChild(link);
//     //设置a标签的href属性
//     a.href = "p2";
//     //将a标签添加到body中
//     document.body.appendChild(a);
//     //触发a标签的单击事件
//     a.click();
//   }
// });
</script>