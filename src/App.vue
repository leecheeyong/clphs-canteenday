<script setup>
import { ref, onMounted } from 'vue'
import slider from './components/slider.vue'

const currentVideo = ref(0)
const videos = ['/demo.webm', '/demo1.webm', '/homepage.webm']
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
      <video autoplay muted loop class="top-0 w-screen h-screen z-0 object-cover opacity-90">
        <source :src="video" />
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
          <div class="text-center">
            <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
              Camera .<br /><span class="ml-16">Juice</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-100">
              passionate &#183; experienced &#183; photos &#183; videos
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#about" class="text-sm font-semibold leading-6"
                >Learn more <span aria-hidden="true">→</span></a
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
  <slider />
</template>
