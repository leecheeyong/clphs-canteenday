<script setup>
import { ref } from 'vue'
import schedule from './schedule.vue'

const guide = await fetch('https://canteenday-2024.vercel.app/guide').then((r) => r.json())
const events = await fetch('https://canteenday-2024.vercel.app/special-events').then((r) =>
  r.json()
)
</script>
<template>
    <div class="flex justify-center">
        <div class="py-8 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-8">
          <div class="min-w-max mb-8 lg:mb-16" data-aos="fade-down" id="guide">
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
            <div class="flex items-center sm:justify-start justify-center gap-4">
              <a
                href="#special-events"
                title="Goto Special Events Section"
                class="bg-purple-500 decoration-0 text-white hover:bg-pink-400 font-bold py-2 px-4 mt-3 rounded-3xl text-xl"
                >特殊活动</a
              >
              <a
                href="#stores"
                title="Goto Stores Section"
                class="bg-purple-500 decoration-0 text-white hover:bg-pink-400 font-bold py-2 px-4 mt-3 rounded-3xl text-xl"
                >摊位</a
              >
              <a
                href="#map"
                title="Goto Event Map Section"
                class="bg-purple-500 decoration-0 text-white hover:bg-pink-400 font-bold py-2 px-4 mt-3 rounded-3xl text-xl"
                >活动地图</a
              >
            </div>
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
  <schedule :schedule="events" />
</template>
