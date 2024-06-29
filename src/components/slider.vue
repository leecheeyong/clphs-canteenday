<script setup>
import { ref, onMounted } from 'vue'
import Footer from './footer.vue'
import About from './about.vue'
import Skills from './skills.vue'
import Reviews from './review.vue'
const slide = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
  slide.value.querySelectorAll('.hide').forEach((element) => {
    observer.observe(element)
  })
})
</script>
<template>
  <div class="absolute top-[100vh] bg-[#d7d6d6]" ref="slide" id="about">
    <about />
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-6 lg:px-8 py-16">
      <div>
        <img
          class="h-auto max-w-full rounded-xl hide"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-xl hide"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-xl hide"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-xl hide"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-xl hide"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-xl hide"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
    </div>
    <Skills />
    <Reviews />
    <Footer />
  </div>
</template>
