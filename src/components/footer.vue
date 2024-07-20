<script setup>
const date = new Date().getFullYear()
</script>
<template>
  <footer class="w-full bottom-0 py-8">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <span
        class="block text-3xl text-gray-500 sm:text-center my-2 text-bold flex items-center sm:justify-center gap-4"
      >
        <a
          href="https://clphs.edu.my"
          target="_blank"
          aria-label="Chung Ling Private High School Website"
          title="Chung Ling Private High School"
          class="pb-1 px-1"
          ><span class="bg-[url('/school.png')] w-6 h-6 block bg-contain"></span
        ></a>
        <a href="https://instagram.com/clphs_2024canteenday" target="_blank" title="Instagram"
          ><i class="bx bxl-instagram"></i
        ></a>
      </span>
      <a
        href="https://github.com/leecheeyong/clphs-canteenday"
        title="Project License"
        target="_blank"
        class="hover:underline"
      >
        ><span class="block text-xs text-gray-500 sm:text-center font-sans"
          >Canteen Day © 2024</span
        ></a
      >
      <span class="block text-xs text-gray-500 sm:text-center font-sans"
        >This project is available as an open source under the terms of
        <a
          href="https://github.com/leecheeyong/clphs-canteenday/blob/main/LICENSE"
          title="Project License"
          target="_blank"
          class="hover:underline"
          >the MIT License</a
        ></span
      >
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  color: #e8b7b7;
}
</style>
