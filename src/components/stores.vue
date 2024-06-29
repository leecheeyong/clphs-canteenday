<script setup>
import { ref } from 'vue'

const stores = await fetch('https://canteenday-2024.vercel.app/stores').then((r) => r.json())

const foodCount = ref(stores.filter((store) => store.category === '主食').length)
const drinkCount = ref(stores.filter((store) => store.category === '饮料').length)
const gameCount = ref(stores.filter((store) => store.category === '游戏').length)
const otherCount = ref(stores.filter((store) => store.category === '其他').length)

const currentPage = ref('主食')
const currentShowing = ref(stores.filter((store) => store.category === currentPage.value))

const changeCurrentPage = (category) => {
  currentPage.value = category
  currentShowing.value = stores.filter((store) => store.category === currentPage.value)
}
</script>
<template>
  <div class="max-w-screen-xl px-2 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24" id="stores">
    <div class="max-w-6xl mx-auto sm:text-left text-center" data-aos="fade-up">
      <h1 class="text-5xl font-extrabold leading-tight tracking-tight text-gray-900">摊位</h1>
      <h1
        class="mb-4 text-2xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
      >
        Stores
      </h1>
    </div>

    <div class="flow-root max-w-6xl lg:px-0 mx-auto mt-8 sm:mt-12 lg:mt-16">
      <!-- Breadcrumb -->
      <nav
        data-aos="fade-up"
        class="flex justify-center px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50/40"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-0 md:space-x-16 rtl:space-x-reverse">
          <li
            class="inline-flex items-center text-center p-2 rounded-lg"
            @click="changeCurrentPage('主食')"
            :class="currentPage == '主食' ? 'bg-pink-200 animate-fadeIn' : 'cursor-pointer'"
          >
            <i class="bx bx-bowl-rice"></i>
            <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2">主食 {{ foodCount }}</span>
          </li>
          <li>
            <div
              class="flex items-center text-center p-2 rounded-lg"
              @click="changeCurrentPage('饮料')"
              :class="currentPage == '饮料' ? 'bg-pink-200 animate-fadeIn' : 'cursor-pointer'"
            >
              <i class="bx bx-drink"></i>
              <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2"
                >饮料 {{ drinkCount }}</span
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center text-center p-2 rounded-lg"
              @click="changeCurrentPage('游戏')"
              :class="currentPage == '游戏' ? 'bg-pink-200 animate-fadeIn' : 'cursor-pointer'"
            >
              <i class="bx bxs-invader"></i>
              <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2"
                >游戏 {{ gameCount }}</span
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center text-center p-2 rounded-lg"
              @click="changeCurrentPage('其他')"
              :class="currentPage == '其他' ? 'bg-pink-200 animate-fadeIn' : 'cursor-pointer'"
            >
              <i class="bx bx-layer"></i>
              <span class="ms-1 text-xl font-medium text-gray-500 md:ms-2"
                >其他 {{ otherCount }}</span
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="-my-4 divide-y divide-gray-200" data-aos="zoom-in">
        <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8 lg:px-0 px-4">
          <li
            class="relative flex flex-col sm:flex-row xl:flex-col items-start animate-[fadeIn_2s_ease]"
            v-for="item in currentShowing"
          >
            <div class="order-1 sm:ml-6 xl:ml-0">
              <h2 class="mb-1 text-slate-900 text-xl font-semibold">
                <span class="mb-1 block text-2xl leading-6 text-indigo-500">{{ item.name }}</span
                >{{ item.venue }}
              </h2>
              <div class="prose prose-slate prose-sm text-xl text-slate-600">
                <p>{{ item.description }}</p>
              </div>
              <a
                v-if="item.link"
                class="group inline-flex items-center h-9 rounded-full text-lg font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="#"
                >关注本摊<svg
                  class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M0 0L3 3L0 6"></path>
                </svg>
                ></a
              >
            </div>
            <iframe
              class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
              width="400"
              height="200"
              :src="item.video"
              title="YouTube video player"
              frameborder="0"
              loading="lazy"
              allow="encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
