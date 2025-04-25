<script setup>
import { ref } from 'vue'
import schedule from './schedule.vue'

// const guide = await fetch('https://canteenday-2024.vercel.app/guide').then((r) => r.json())
const guide = [
  {
    title: '固本',
    icon: 'bx-shopping-bag',
    content: [
      '食堂日当天，固本将会在大礼堂&第三通道处售卖',
      '食堂日当天，购买食物或参与活动只能使用固本',
      '固本不找零钱，请携带准确的固本金额前往各摊位',
      '概不退还一切固本（包括食堂日结束后未使用的固本）'
    ]
  },
  {
    title: '随身手册',
    icon: 'bx-spreadsheet',
    content: [
      '参与者们将会领取一张随身手册',
      '该随身手册会包含活动地图及特殊活动介绍',
      '参与者们可以把收集到的帖子贴在帖子收集区',
      '获得了足够的帖子后可领换取礼物'
    ]
  },
  {
    title: '游戏',
    icon: 'bxs-basketball',
    content: [
      '游戏摊位将处在大礼堂及篮球场',
      '参与者们会在赢取游戏后得到一个帖子/盖章',
      '筹集了10个盖章/帖子后可在大礼堂/篮球场入口处换取礼物',
      '礼物将以抽签方式进行'
    ]
  },
  {
    title: '幸运抽奖',
    icon: 'bx-gift',
    content: [
      '幸运抽奖分为教职员奖，学生奖及班级奖',
      '奖项分为一等，二等，三等奖，幸运奖及特别奖',
      '抽奖必须是本校师生或相关人员',
      '有多余的固本也可以在固本背面填写姓名，班级/教职员部门，及学号'
    ]
  }
]
</script>
<template>
  <div class="flex justify-center" id="guide">
    <div class="mt-8 py-8 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-8">
      <div class="min-w-max mb-8 lg:mb-16" data-aos="fade-down">
        <h1
          class="mb-2 text-5xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
        >
          指南
        </h1>
        <h1
          class="mb-4 text-2xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
        >
          Guide
        </h1>
      </div>

      <div class="space-y-4 md:grid lg:grid-cols-2 md:gap-6 md:space-y-0" data-aos="zoom-in">
        <div
          class="bg-gradient-to-r from-indigo-200/40 via-purple-200/50 to-pink-200/40 rounded-xl p-8 hover:scale-[103%] hover:shadow-lg hover:from-indigo-200/80 hover:via-purple-200/90 hover:to-pink-200/80 ease-in-out hover:-translate-y-1 transition"
          v-for="list in guide"
        >
          <h1 class="flex flex-wrap mb-6 text-3xl font-bold">
            <div class="p-2 pt-1 pl-0 rounded-full bg-primary-100">
              <i class="bx" :class="list.icon"></i>
            </div>
            {{ list.title }}
          </h1>
          <ul class="text-gray-500 text-xl mb-1 list-disc" v-for="i in list.content">
            <li class="ml-6" v-if="i.length > 0">{{ i }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
