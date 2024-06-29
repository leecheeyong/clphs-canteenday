<script setup>
import { ref, onMounted } from 'vue'
import slider from '@/components/slider.vue'

const currentVideo = ref(0)
const mainInfo = ref({})

mainInfo.value = await fetch('https://canteenday-2024.vercel.app/').then((r) => r.json())

const videos = await fetch('https://canteenday-2024.vercel.app/images').then((r) => r.json())

const { description, location, date, time, video, logo } = mainInfo.value

onMounted(() => {
  setInterval(() => {
    if (currentVideo.value !== videos.length - 1) {
      currentVideo.value++
    } else {
      currentVideo.value = 0
    }
  }, 4000)
})
</script>

<template>
    <div class="fixed scroll-smooth">
        <div :class="index === currentVideo ? 'block' : 'hidden'" v-for="(video, index) in videos">
          <video autoplay muted loop class="top-0 w-screen h-screen z-0 object-cover opacity-60">
            <source :src="video.src" />
          </video>
        </div>
        <header class="absolute inset-x-0 top-0 z-50 text-white">
          <nav class="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
            <div class="lg:flex lg:flex-1 lg:justify-center">
              <div class="flex items-center justify-center gap-6">
                <a href="/" aria-label="Back to home" title="Home">
                  <img class="h-12 w-auto" src="/Logo.png" alt="" />
                </a>
                <h1 class="sm:text-2xl text-xl bg-pink-400 p-2 pl-4 pr-4 rounded-3xl text-white shadow-md shadow-gray">
                  <span class="type-title font-bold"></span>
                </h1>
                <img class="h-12 w-auto" src="/school.png" alt="" />
              </div>
            </div>
          </nav>
          <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
              <div
              class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="
                  clip-path: polygon(
                    74.1% 44.1%,
                    100% 61.6%,
                    97.5% 26.9%,
                    85.5% 0.1%,
                    80.7% 2%,
                    72.5% 32.5%,
                    60.2% 62.4%,
                    52.4% 68.1%,
                    47.5% 58.3%,
                    45.2% 34.5%,
                    27.5% 76.7%,
                    0.1% 64.9%,
                    17.9% 100%,
                    27.6% 76.8%,
                    76.1% 97.7%,
                    74.1% 44.1%
                  );
                "
              ></div>
            </div>
              <div class="text-center">
                <div v-for="(video, index) in videos" :class="index === currentVideo ? 'block' : 'hidden'">
                  <h1 class="tracking-tight bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-5xl md:text-6xl font-extrabold text-transparent text-center select-auto">
                  {{ video.title }}
                </h1>
                </div>
                <div
                class="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  class="relative left-[calc(50%-11rem)] aspect-[1055/678] w-[36.125rem] -translate-x-1/2 rotate-[90deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style="
                    clip-path: polygon(
                      74.1% 44.1%,
                      100% 61.6%,
                      97.5% 26.9%,
                      85.5% 0.1%,
                      80.7% 2%,
                      72.5% 32.5%,
                      60.2% 62.4%,
                      52.4% 68.1%,
                      47.5% 58.3%,
                      45.2% 34.5%,
                      27.5% 76.7%,
                      0.1% 64.9%,
                      17.9% 100%,
                      27.6% 76.8%,
                      76.1% 97.7%,
                      74.1% 44.1%
                    );
                  "
                ></div>
              </div>
                <p class="mt-16 text-md leading-8 text-gray-800 animate-fadeIn">
                <a href="#about" class="hover:underline bg-gray-200/30 rounded-lg p-4 py-2 md:inline-block hidden">详情</a> <a href="#guide" class="hover:underline bg-gray-200/30 rounded-lg p-4 py-2 md:inline-block hidden">指南</a> <a href="#special-events" class="hover:underline bg-gray-200/30 rounded-lg p-4 py-2 md:inline-block hidden">特殊节目</a> <a href="#sponsor" class="hover:underline bg-gray-200/30 rounded-lg p-4 py-2 md:inline-block hidden">赞助商</a><a href="#shops" class="hover:underline bg-gray-200/30 rounded-lg p-4 py-2 md:inline-block hidden">摊位单</a><a href="#map" class="hover:underline bg-gray-200/30 rounded-lg p-4 py-2 md:inline-block hidden">地图</a>
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#about" class="text-xl text-gray-800 font-semibold leading-6"
                    >开始 <span aria-hidden="true">→</span></a
                  >
                </div>
              </div>
            </div>
            <div
              class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="
                  clip-path: polygon(
                    74.1% 44.1%,
                    100% 61.6%,
                    97.5% 26.9%,
                    85.5% 0.1%,
                    80.7% 2%,
                    72.5% 32.5%,
                    60.2% 62.4%,
                    52.4% 68.1%,
                    47.5% 58.3%,
                    45.2% 34.5%,
                    27.5% 76.7%,
                    0.1% 64.9%,
                    17.9% 100%,
                    27.6% 76.8%,
                    76.1% 97.7%,
                    74.1% 44.1%
                  );
                "
              />
            </div>
          </div>
        </header>
      </div>
      <slider :description="description" :location="location" :date="date" :time="time" :video="video"/>
</template>