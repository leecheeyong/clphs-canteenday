<script setup>
import { ref, onMounted } from 'vue'
import slider from '@/components/slider.vue'
import Share from '@/components/share.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const currentVideo = ref(0)
const mainInfo = ref({})
const cursor = ref(null)

//mainInfo.value = await fetch('https://canteenday-2024.vercel.app/').then((r) => r.json())
mainInfo.value = {
  logo: './Logo.webp',
  description:
    '为了筹募锺灵校友会奖助学金基金及锺灵独中奖助学金基金，本校统考高中二班及国际中五\n班的同学将每年举办食堂义卖日。此活动也将会给予统考高中二班及国际中五\n班的同学一次难忘的体验。',
  location: '锺灵独立中学',
  date: '8月2日 (星期五）',
  time: '8:00am至2.00pm ',
  video: './slideshow/trailer.webm',
  map: './map.webp',
  disableGuide: 'FALSE',
  disableStores: 'FALSE',
  sponsorURL: '#',
  sponsors: [
    { name: 'Food Culture Resources', image: './edc-sponsor.webp' },
    { name: 'HVAC Engineering SDN BHD', image: 'hvac-sponsor.webp' }
  ]
}

//const videos = await fetch('https://canteenday-2024.vercel.app/images').then((r) => r.json())
const videos = [
  { title: '第63届食堂义卖日圆满结束', src: './slideshow/recap' },
  { title: '感谢所有参与者' },
  { title: '对本届食堂义卖日的支持' }
]

const {
  description,
  location,
  date,
  time,
  video,
  logo,
  map,
  disableGuide,
  disableStores,
  sponsorURL,
  sponsors
} = mainInfo.value

onMounted(() => {
  // document.addEventListener('mousemove', (e) => {
  //   cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  // })
  setInterval(() => {
    if (currentVideo.value !== videos.length - 1) {
      currentVideo.value++
    } else {
      currentVideo.value = 0
    }
  }, 4000)
})
var ua = window.navigator.userAgent.toLowerCase().includes('safari')
</script>

<template>
  <!-- <div class="cursor hidden lg:block" ref="cursor"></div> -->
  <div class="fixed scroll-smooth">
    <!-- <div :class="index === currentVideo ? 'block' : 'hidden'" v-for="(video, index) in videos"> -->
    <div>
      <video
        autoplay
        muted
        loop
        playsinline
        disablePictureInPicture
        class="top-0 w-screen h-screen z-0 object-cover opacity-60"
      >
        <source
          :src="ua ? videos[0].src + '.mp4' : videos[0].src + '.webm'"
          :type="ua ? 'video/mp4' : 'video/webm'"
        />
      </video>
    </div>
    <header class="absolute inset-x-0 top-0 z-50 text-white">
      <nav class="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div class="lg:flex lg:flex-1 lg:justify-center">
          <div class="flex items-center justify-center gap-6">
            <a href="/" aria-label="Back to home" title="Home">
              <img class="h-12 w-auto" src="/Logo.webp" alt="" />
            </a>
            <h1
              class="sm:text-2xl text-xl bg-pink-400 p-2 pl-4 pr-4 rounded-3xl text-white shadow-md shadow-gray"
            >
              <span class="type-title font-bold"></span>
            </h1>
            <img class="h-12 w-auto" src="/school.webp" alt="" />
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
            <div
              v-for="(video, index) in videos"
              :class="index === currentVideo ? 'block' : 'hidden'"
            >
              <h1
                class="tracking-tight bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl md:text-5xl font-extrabold text-transparent text-center select-auto"
              >
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
            <p class="mt-16 text-md leading-8 text-gray-800 animate-fadeIn font-semibold">
              <a
                href="#guide"
                title="Guide"
                class="hover:underline bg-blue-200/30 hover:bg-blue-200/60 rounded-lg p-4 py-2 md:inline-block hidden mx-1"
                >指南</a
              >
              <router-link
                to="/gallery#about"
                title="Gallery"
                class="hover:underline bg-pink-200/30 hover:bg-pink-200/60 rounded-lg p-4 py-2 md:inline-block hidden mx-1"
                >相册</router-link
              >
              <a
                href="#special-events"
                title="Band Performance"
                class="hover:underline bg-purple-200/30 hover:bg-purple-200/60 rounded-lg p-4 py-2 md:inline-block hidden mx-1"
                >乐队表演</a
              >
              <a
                href="#stores"
                title="Stores"
                class="hover:underline bg-green-200/30 hover:bg-green-200/60 rounded-lg p-4 py-2 md:inline-block hidden mx-1"
                >摊位单</a
              ><a
                href="#map"
                title="Map"
                class="hover:underline bg-orange-200/30 hover:bg-orange-200/60 rounded-lg p-4 py-2 md:inline-block hidden mx-1"
                >地图</a
              >
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <router-link
                to="#about"
                aria-label="Learn more"
                title="Learn More"
                class="hover:scale-[1.1] ease-in-out transition text-xl text-gray-800 font-semibold leading-6 animate-pulse"
                ><span aria-hidden="true" class="md:inline-block hidden">开始探索之乘 →</span
                ><span aria-hidden="true" class="animate-bounce mt-20 inline-block md:hidden"
                  >向上滑以探索更多 ↑</span
                ></router-link
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
  <slider
    :description="description"
    :location="location"
    :date="date"
    :time="time"
    :video="video"
    :map="map"
    :sponsorURL="sponsorURL"
    :disableStores="disableStores"
    :disableGuide="disableGuide"
    :sponsors="sponsors"
  />
  <Share />
</template>
