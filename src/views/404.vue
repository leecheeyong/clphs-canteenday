<script setup>
import { ref, onMounted } from 'vue'
import Footer from '../components/footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const mainInfo = ref({})
const cursor = ref(null)
onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
})
</script>

<template>
  <div class="cursor" ref="cursor"></div>
  <main class="grid min-h-full place-items-center bg-white px-6 py-44 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-xl font-mono font-semibold text-indigo-600">404 Not Found</p>
      <h1 class="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">空空如也</h1>
      <p class="mt-6 text-xl leading-7 text-gray-600">
        贵客所在的页面未被开发<br /><span class="font-sans text-lg"
          >Aww, this page does not exists</span
        >
      </p>
      <div class="flex items-center sm:justify-start justify-center gap-2 pt-4 sm:p-4">
        <a
          href="/#special-events"
          class="bg-purple-400 decoration-0 text-white hover:bg-pink-400 font-bold py-2 px-4 mt-3 rounded-xl text-xl"
          >乐队表演</a
        >
        <a
          href="/#stores"
          class="bg-purple-400 decoration-0 text-white hover:bg-pink-400 font-bold py-2 px-4 mt-3 rounded-xl text-xl"
          >摊位</a
        >
        <a
          href="/#map"
          class="bg-purple-400 decoration-0 text-white hover:bg-pink-400 font-bold py-2 px-4 mt-3 rounded-xl text-xl"
          >活动地图</a
        >
      </div>
      <br />
      <a
        href="/"
        class="hover:scale-[1.1] ease-in-out transition text-lg font-semibold text-gray-900"
        title="Bring me back to earth"
        >带我重返人间<span aria-hidden="true">&rarr;</span></a
      >
    </div>
  </main>
  <Footer mainInfo="mainInfo" />
</template>
