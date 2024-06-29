<script setup>
const { description, location, date, time, video } = defineProps({
  description: String, location: String, date: String, time: String, video:String,
})
import { ref, onMounted } from 'vue'
import Footer from './footer.vue'
import About from './about.vue'
import Skills from './skills.vue'
import Guide from './guide.vue'
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
  <div class="absolute top-[100vh] w-full bg-[#d7d6d6]" ref="slide" id="about">
    <about :description="description" :location="location" :date="date" :time="time" :video="video"/>
    <Guide />
    <Skills />
    <Reviews />
    <Footer />
  </div>
</template>
