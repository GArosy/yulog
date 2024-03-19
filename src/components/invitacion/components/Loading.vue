<template>
  <div class="absolute bg-stone-50 h-screen w-screen z-20 flex justify-center overflow-hidden">
    <div class="absolute object-fill bg-[url('https://pic.imgdb.cn/item/65f883319f345e8d031309b7.jpg')] h-screen w-screen sm:w-[490px] flex flex-col items-center justify-start blur-3xl" />
    <div class="absolute flex flex-col justify-center" >
      <!-- header -->
      <div class="flex justify-between px-4 mt-3">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2" class="w-6 h-6 stroke-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        <div class="flex gap-2 items-center text-white/50 text-base">
          <span>SAVE</span>
          <span class="text-sm text-white/20">/</span>
          <span>THE</span>
          <span class="text-sm text-white/20">/</span>
          <span>DATE</span>
        </div>
        <svg viewBox="0 0 28 28" class="w-6 h-6 text-white">
          <g fill="#fff">
            <path d="M24 13a1 1 0 0 1 .993.883L25 14v8a4 4 0 0 1-3.8 3.995L21 26H7a4 4 0 0 1-3.995-3.8L3 22v-8a1 1 0 0 1 1.993-.117L5 14v8a2 2 0 0 0 1.85 1.994L7 24h14a2 2 0 0 0 1.994-1.85L23 22v-8a1 1 0 0 1 1-1zM6.929 8.657l6.364-6.364a1 1 0 0 1 1.32-.083l.094.083l6.364 6.364a1 1 0 0 1-1.32 1.497l-.094-.083L15 5.414V18a1 1 0 0 1-.883.993L14 19a1 1 0 0 1-.993-.883L13 18V5.414l-4.657 4.657a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l6.364-6.364l-6.364 6.364z" fill="currentColor"></path>
          </g>
        </svg>
      </div>
      <!-- image -->
      <img
        class="relative rounded-full mx-8 my-4 sm:w-[380px] blur-none animate-spin-slow-2"
        src="https://pic.imgdb.cn/item/65f883319f345e8d031309b7.jpg" 
        alt="1.jpg"
      >
      <!-- text -->
      <div class="flex flex-col w-full px-8">
        <div class="flex justify-start items-center gap-1.5 mb-2">
          <div class="text-sm text-white/70 bg-stone-400/40 rounded-full px-2">
            2024年
          </div>
          <div class="text-sm text-white/70 bg-stone-400/40 rounded-full px-2">
            4月
          </div>
          <div class="text-sm text-white/70 bg-stone-400/40 rounded-full px-2">
            27日
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-[24px] text-white/90 font-semibold">
            我们的婚礼邀请函
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white/60">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <div class="text-lg text-white/60">
          高胜禹 & 王雪蓉
        </div>
        <div class="text-base text-white/40 font-light">
          Wedding Invitation
        </div>
      </div>
      <div class="fixed bottom-0 w-full mb-6 sm:w-[444px]">
        <div class="flex justify-between px-8 mt-4">
          <svg viewBox="0 0 20 20" class="text-white/50 h-8 w-8"><g fill="none"><path d="M9.996 1.992c-.77 0-1.279.541-1.568 1.027c-.294.493-.45 1.07-.471 1.442c-.041.74.07 1.388.439 1.856c.384.488.96.675 1.6.675c.649 0 1.223-.209 1.605-.697c.369-.472.488-1.115.44-1.839c-.023-.352-.181-.926-.474-1.421c-.287-.485-.796-1.043-1.57-1.043zm-1.04 2.524c.01-.203.116-.624.331-.986c.22-.368.465-.538.71-.538c.239 0 .485.172.71.551c.217.37.325.793.337.978c.039.6-.074.958-.23 1.158c-.143.182-.385.313-.818.313c-.45 0-.682-.125-.814-.294c-.15-.19-.262-.544-.227-1.182zM5 8a2 2 0 0 0-2 2v6h-.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H17v-6a2 2 0 0 0-2-2H5zm11 8H4v-3.882l1.545 1.38a2 2 0 0 0 2.828-.162l.88-.99a1 1 0 0 1 1.495 0l.879.99a2 2 0 0 0 2.829.163L16 12.118V16zm0-5.224l-2.211 1.977a1 1 0 0 1-1.414-.081l-.88-.99a2 2 0 0 0-2.99 0l-.88.99a1 1 0 0 1-1.414.081L4 10.776V10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.776z" fill="currentColor"></path></g></svg>
          <svg viewBox="0 0 20 20" class="text-white/50 h-8 w-8"><g fill="none"><path d="M10.002 4.43a.5.5 0 0 1 .566-.425a2.86 2.86 0 0 1 2.424 2.421a.5.5 0 0 1-.99.143a1.86 1.86 0 0 0-1.575-1.574a.5.5 0 0 1-.425-.565zM5 7a5 5 0 0 1 10 0a8.313 8.313 0 0 1-1.598 4.859c-.791 1.074-1.837 1.892-2.902 2.093V14a1 1 0 0 0 1 1H14a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V17a1 1 0 0 0-1-1h-2.5a2 2 0 0 1-2-2v-.048c-1.065-.2-2.11-1.017-2.902-2.091A8.311 8.311 0 0 1 5 7zm5-4a4 4 0 0 0-4 4c0 1.637.585 3.16 1.402 4.268C8.237 12.399 9.232 13 10 13c.768 0 1.763-.602 2.598-1.734A7.313 7.313 0 0 0 14 7a4 4 0 0 0-4-4z" fill="currentColor"></path></g></svg>
          <svg t="1710826057504" class="icon text-white/50 h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="30434" width="48" height="48"><path d="M117.610667 938.666667A32.128 32.128 0 0 1 85.333333 906.666667c0-16.64 12.8-30.293333 29.162667-31.850667L117.610667 874.666667H149.333333V625.045333c0-37.568 30.293333-68.266667 68.48-70.272l3.968-0.106666H298.666667v-64.896c0-8.106667 3.072-15.893333 8.533333-21.824l2.474667-2.432 159.765333-149.674667V213.333333h-54.357333c-17.109333 0-30.976-14.336-30.976-32 0-16.64 12.288-30.293333 27.989333-31.850666l2.986667-0.149334h54.357333V117.333333a32 32 0 0 1 63.850667-3.072l0.149333 3.072V149.333333H588.8c17.088 0 30.954667 14.336 30.954667 32 0 16.64-12.266667 30.293333-27.989334 31.850667L588.8 213.333333h-55.338667v102.442667l180.885334 149.738667c6.122667 5.376 9.962667 12.8 10.816 20.8l0.192 3.456V554.666667h76.885333c38.677333 0 70.272 29.44 72.341333 66.517333l0.106667 3.861333V874.666667h31.722667c17.834667 0 32.277333 14.336 32.277333 32 0 16.64-12.8 30.293333-29.162667 31.850666l-3.114666 0.149334H117.610667zM298.666667 618.005333h-78.037334a7.189333 7.189333 0 0 0-7.082666 5.610667l-0.149334 1.429333L213.376 874.666667H298.666667V618.005333z m505.002666 0H725.333333V874.666667h85.568V625.045333a7.082667 7.082667 0 0 0-5.76-6.890666l-1.493333-0.149334zM501.44 384a32 32 0 0 1-9.237333-1.365333l-129.493334 121.685333V874.666667L490.666667 874.645333v-160.426666c0-17.429333 14.336-31.552 32-31.552 16.64 0 30.293333 12.522667 31.850666 28.522666l0.149334 3.029334V874.666667l106.730666 0.021333V504.32l-150.570666-121.706667a32 32 0 0 1-9.386667 1.386667z" fill="currentColor" fill-opacity=".85" p-id="30435"></path></svg>
          <svg t="1710825541187" class="icon text-white/50 h-8 w-8" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16839"><path d="M473.09 709.12c11.02 10.86 11.15 28.6 0.29 39.62-0.09 0.1-0.19 0.19-0.29 0.29a28.553 28.553 0 0 1-20.61 8.72c-7.26 0.05-14.26-2.69-19.56-7.66a1165.252 1165.252 0 0 0-118.41-95.15c-89.07-64.75-173.12-126.07-185.01-249.5-9.58-103.93 66.91-195.94 170.84-205.52 0.41-0.04 0.81-0.07 1.22-0.11 58.44-2.4 114.65 22.62 151.97 67.66 28.71-51.13 79.63-85.93 137.7-94.09 103.88-9.17 195.6 67.42 205.1 171.27 1.39 15.62-10.15 29.4-25.77 30.79-15.62 1.39-29.4-10.15-30.79-25.77-6.42-72.7-70.56-126.43-143.26-120.02l-0.26 0.02c-52.86 4.76-94.62 55.77-111.27 101.22-5.37 14.67-21.6 22.21-36.27 16.84a28.316 28.316 0 0 1-14.74-12.35c-24.31-40.97-74.27-82.73-127.39-78.76-72.7 6.41-126.45 70.54-120.04 143.24l0.05 0.54c8.99 97.79 76.12 146.95 161.22 208.8 43.94 30.49 85.79 63.87 125.28 99.92z m356.81-90.39c-26.43 52.86-79.29 67.4-148.01 85.37a729.54 729.54 0 0 0-118.67 39.12 755.916 755.916 0 0 0-39.12-115.5c-26.43-67.39-47.04-116.29-18.24-172.85 20.39-40.32 69.59-56.52 109.95-36.21 27.74 18.72 43.2 50.96 40.44 84.31-0.38 11.09 5.7 21.4 15.6 26.43a27.733 27.733 0 0 0 30.13-2.91 93.302 93.302 0 0 1 91.98-17.71c40.35 20.48 56.46 69.79 35.98 110.14l-0.04 0.07v-0.26z m-10.57-160.7a135.047 135.047 0 0 0-111.8 0 133.715 133.715 0 0 0-66.08-89.86c-67.97-33.95-150.6-6.68-185.01 61.05-40.17 79.29-12.69 147.75 16.39 219.64a581.619 581.619 0 0 1 42.82 140.61c1.37 9.26 7.2 17.26 15.6 21.41 3.88 1.86 8.12 2.85 12.42 2.91 4.9-0.06 9.71-1.34 14.01-3.7a553.155 553.155 0 0 1 140.08-51.28c74.8-19.82 145.63-38.32 185.01-114.71 33.61-68.06 6.29-150.49-61.32-185.01l-2.12-1.06z m0 0" fill="currentColor" p-id="16840"></path></svg>
          <svg t="1710825694396" class="icon text-white/50 h-7 w-7" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28207"><path d="M448 53.333333a32 32 0 0 0-25.6 12.8l-64 85.333334a32 32 0 0 0 4.757333 43.498666l149.333334 128a32 32 0 0 0 41.685333 0l149.333333-128a32 32 0 0 0 4.906667-43.264l-62.826667-85.333333a32 32 0 0 0-25.813333-13.034667h-83.562667z m16 64h139.626667l35.669333 48.384L533.333333 256.490667l-105.749333-90.624z m69.333333 149.333334c-194.026667 0-352 157.973333-352 352 0 194.026667 157.973333 352 352 352 194.026667 0 352-157.973333 352-352 0-194.026667-157.973333-352-352-352z m0 64c159.445333 0 288 128.554667 288 288S692.778667 906.666667 533.333333 906.666667 245.333333 778.112 245.333333 618.666667 373.888 330.666667 533.333333 330.666667z" p-id="28208" fill="currentColor"></path></svg>
        </div>
        <div class="mx-8 mt-4">
          <div class="relative w-full flex items-center">
            <div class="h-[3px] w-1/4 bg-white/90 rounded-full"></div>
            <div class="h-3 w-3 bg-white rounded-full absolute left-1/4 -translate-x-1"></div>
            <div class="h-[3px] w-3/4 bg-white/40 rounded-full"></div>
          </div>
        </div>
        <div class="mx-8 mt-1 flex justify-between text-white/80 font-extralight text-sm">
          <span>04:27</span>
          <span>13:14</span>
        </div>
        <div class="mx-8 mt-1 flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" class="h-6 w-6 text-white">
            <path d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 58l80 80l-80 80"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" class="h-8 w-8 text-white">
            <g fill="none">
              <path d="M17 4.252c0-1-1.116-1.595-1.947-1.038L6.554 8.921a1.25 1.25 0 0 0-.007 2.071l8.5 5.793A1.25 1.25 0 0 0 17 15.752v-11.5zM3 3.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0v-13z" fill="currentColor"></path>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20 text-white">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" class="h-8 w-8 text-white">
            <g fill="none">
              <path d="M3 4.252c0-1 1.116-1.595 1.947-1.038l8.499 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752v-11.5zM17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13z" fill="currentColor"></path>
            </g>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>