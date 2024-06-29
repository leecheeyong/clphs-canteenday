<script setup>
import { ref, onMounted } from 'vue'
const skills = ref(null)
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
  skills.value.querySelectorAll('.hide').forEach((element) => {
    observer.observe(element)
  })
})
</script>
<template>
  <div class="overflow-hidden py-24 sm:py-32" ref="skills">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4 flex justify-center items-center hide">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">Every Skill Matters</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client's Experience,<br />
              Our Top Priority
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
          </div>
        </div>
        <img
          src="/demomap.jpg"
          alt="Product screenshot"
          class="hide w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="1216"
          height="721"
        />
      </div>
    </div>
  </div>
</template>
