<script setup>
const { map } = defineProps({ map: String })
</script>
<template>
  <section class="antialiased" id="map">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-8 lg:py-18">
      <main class="flex justify-center px-2 lg:px-4 py-10">
        <div
          class="shadow-[0_45px_70px_-25px_rgba(0,0,0,0.4)] h-[200px] w-[400px] md:w-[600px] md:h-[400px] lg:w-[1200px] lg:h-[700px] rounded-lg"
        >
          <img
            class="w-full h-full object-cover rounded-lg"
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
