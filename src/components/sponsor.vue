<script setup>
defineProps({
  sponsorURL: String,
  sponsors: Array
})
</script>
<template>
  <div
    class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    v-if="sponsors"
    id="sponsor"
    data-aos="fade-up"
  >
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
