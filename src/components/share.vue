<script setup>
import { onMounted, ref } from 'vue'
const open = ref(false)
const canShare = ref(true)
function toggleModal() {
  open.value = open.value ? false : true
}

if (!navigator.canShare) {
  canShare.value = false
}

async function share() {
  try {
    await navigator.share({
      title: 'Canteen Day 2024',
      text: '食堂日2024',
      url: 'https://canteenday.vercel.app'
    })
  } catch (e) {
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcanteenday.vercel.app',
      '_blank'
    )
  }
}
</script>
<template>
  <div class="fixed right-6 bottom-6 group z-40">
    <div v-if="open" class="flex flex-col items-center mb-4 space-y-2">
      <!-- share (system) -->
      <button
        type="button"
        @click="share"
        aria-label="Share"
        class="flex justify-center items-center w-[42px] h-[42px] text-gray-600 hover:text-pink-400"
      >
        <i class="bx bxs-share text-4xl" v-if="canShare"></i>
        <i class="bx bxl-facebook-circle text-4xl" v-else></i>
      </button>
    </div>
    <button
      type="button"
      aria-label="Toggle Sharing Methods"
      @click="toggleModal"
      :class="[
        open ? 'bg-pink-700 hover:bg-pink-500' : 'bg-pink-400 hover:bg-pink-500 opacity-60',
        'flex items-center justify-center text-white rounded-full w-10 h-10'
      ]"
    >
      <svg
        v-if="!open"
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 12c0 1.654 1.346 3 3 3 .794 0 1.512-.315 2.049-.82l5.991 3.424c-.018.13-.04.26-.04.396 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.794 0-1.512.315-2.049.82L8.96 12.397c.018-.131.04-.261.04-.397s-.022-.266-.04-.397l5.991-3.423c.537.505 1.255.82 2.049.82 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .136.022.266.04.397L8.049 9.82A2.982 2.982 0 0 0 6 9c-1.654 0-3 1.346-3 3z"
        ></path>
      </svg>
      <svg
        v-if="open"
        class="w-5 h-5 transition-transform rotate-45"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </button>
  </div>
</template>
