<template>
  <div class="sm:w-[640px] calendar">
    <div class="header">
      <h2>4月 2024</h2>
    </div>
    <div class="grid grid-cols-7 text-xs text-stone-500 text-center">
      <div>日</div>
      <div>一</div>
      <div>二</div>
      <div>三</div>
      <div>四</div>
      <div>五</div>
      <div>六</div>
    </div>
    <div class="days">
      <div
        v-for="day in calendarData" 
        :key="day"
        class="py-2 px-3 flex flex-col justify-center items-center" 
        :class="{ 'opacity-50': day.isOtherMonth }"
      >
        <div
          class="absolute w-11 h-11 rounded-full bg-red-200 -z-10"
          v-if="day.isMarked"
        />
        <div 
          class="text-stone-700"
          :class="day.isMarked && 'text-red-600 font-semibold'"
        >
          {{ day.date }}
        </div>
        <div
          class="text-[10px] mt-0.5 text-stone-400"
          :class="day.isMarked && 'text-red-600 font-semibold'"
        >
          {{ day.lunar }}
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const calendarData = [
  {
    date: '31',
    lunar: '廿二',
    isOtherMonth: true,
  },
  {
    date: '1',
    lunar: '廿三',
  },
  {
    date: '2',
    lunar: '廿四',
  },
  {
    date: '3',
    lunar: '廿五',
  },
  {
    date: '4',
    lunar: '廿六',
  },
  {
    date: '5',
    lunar: '廿七',
  },
  {
    date: '6',
    lunar: '廿八',
  },
  {
    date: '7',
    lunar: '廿九',
  },
  {
    date: '8',
    lunar: '三十',
  },
  {
    date: '9',
    lunar: '四月',
  },
  {
    date: '10',
    lunar: '初二',
  },
  {
    date: '11',
    lunar: '初三',
  },
  {
    date: '12',
    lunar: '初四',
  },
  {
    date: '13',
    lunar: '初五',
  },
  {
    date: '14',
    lunar: '初六',
  },
  {
    date: '15',
    lunar: '初七',
  },
  {
    date: '16',
    lunar: '初八',
  },
  {
    date: '17',
    lunar: '初九',
  },
  {
    date: '18',
    lunar: '初十',
  },
  {
    date: '19',
    lunar: '十一',
  },
  {
    date: '20',
    lunar: '十二',
  },
  {
    date: '21',
    lunar: '十三',
  },
  {
    date: '22',
    lunar: '十四',
  },
  {
    date: '23',
    lunar: '十五',
  },
  {
    date: '24',
    lunar: '十六',
  },
  {
    date: '25',
    lunar: '十七',
  },
  {
    date: '26',
    lunar: '十八',
  },
  {
    date: '27',
    lunar: '十九',
    isMarked: true,
  },
  {
    date: '28',
    lunar: '二十',
  },
  {
    date: '29',
    lunar: '廿一',
  },
  {
    date: '30',
    lunar: '廿二',
  },
  {
    date: '1',
    lunar: '廿三',
    isOtherMonth: true,
  },
  {
    date: '2',
    lunar: '廿四',
    isOtherMonth: true,
  },
  {
    date: '3',
    lunar: '廿五',
    isOtherMonth: true,
  },
  {
    date: '4',
    lunar: '廿六',
    isOtherMonth: true,
  }
]
</script>

<style>
.calendar {
  padding: 8px;
  font-size: 20px;
}

.header {
  text-align: center;
  margin-bottom: 8px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>