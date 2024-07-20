<script setup>
const { map } = defineProps({ map: String })
</script>
<template>
  <section class="antialiased" id="map">
    <div class="max-w-screen-xl px-4 py-6 mx-auto lg:px-6 sm:py-8 lg:py-12">
      <div class="mt-8 py-8 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-8">
        <div class="min-w-max" data-aos="fade-down">
          <h1
            class="mb-2 text-5xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
          >
            地图
          </h1>
          <h1
            class="mb-4 text-2xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
          >
            Map
          </h1>
        </div>
        <div class="mt-4 sm:text-left text-center">地图会有所更改，敬请留意</div>
      </div>
      <main class="flex justify-center px-2 lg:px-4 py-4">
        <div
          class="shadow-[0_45px_70px_-25px_rgba(0,0,0,0.4)] h-[200px] w-[400px] md:w-[600px] md:h-[400px] lg:w-[1200px] lg:h-[700px]"
        >
          <img
            class="w-full h-full rounded-lg"
            loading="lazy"
            v-if="map"
            :src="map"
            alt="Canteen Day 2024 Map"
          />
        </div>
      </main>
    </div>
  </section>
</template>
