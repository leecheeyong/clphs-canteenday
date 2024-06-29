<script setup>
defineProps({
  sponsorText: String,
  sponsorURL: String,
  sponsors: Array
})
</script>
<template>
  <div
    class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    v-if="sponsorText"
    id="sponsor"
    data-aos="fade-up"
  >
    <h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
    >
      资助此活动
    </h1>
    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
      {{ sponsorText }}
    </p>
    <div
      class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
    >
      <a
        :href="sponsorURL"
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
      >
        <i class="bx bxs-heart"></i>
        <span class="ml-2"> 赞助我们</span>
      </a>
    </div>
    <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      <span class="font-semibold text-gray-400 uppercase"
        >特别感谢赞助商们<br /><span class="font-sans">A SPECIAL THANKS TO</span></span
      >
      <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
        <div
          class="flex flex-col items-center justify-center w-1/2 sm:w-1/4"
          v-for="sponsor in sponsors"
        >
          <img
            :src="sponsor.image"
            :alt="sponsor.name"
            loading="lazy"
            v-if="sponsor.image"
            class="rounded-md"
          />
          <img
            :alt="sponsor.name"
            src="/user.png"
            loading="lazy"
            class="w-24 h-24 rounded-full opacity-60"
            v-else
          />
          <span class="mt-2 text-md font-semibold font-sans">{{ sponsor.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
