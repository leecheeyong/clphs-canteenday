<script setup>
const schedule = await fetch('https://canteenday-2024.vercel.app/special-events').then((r) =>
  r.json()
)
</script>
<template>
  <section class="antialiased" id="special-events">
    <div class="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 sm:py-8 lg:py-24">
      <div class="max-w-6xl mx-auto sm:text-left text-center" data-aos="fade-up">
        <h1 class="text-5xl font-extrabold leading-tight tracking-tight text-gray-900">乐队表演</h1>
        <h1
          class="mb-4 text-2xl sm:text-left tracking-tight font-extrabold text-gray-900 text-center"
        >
          Band Performance
        </h1>
        <div class="mt-4">节目表会有所更改，敬请留意</div>
      </div>
      <div
        class="gap-8 items-center py-8 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 sm:py-8 lg:px-6"
      >
        <div data-aos="fade in">
          <img
            src="/poster/band.webp"
            alt="Band Performance"
            class="mr-8 rounded-lg object-cover"
          />
        </div>
        <div class="flow-root max-w-6xl lg:px-0 px-4 mx-auto mt-6">
          <div class="-my-4 divide-y divide-gray-200" data-aos="zoom-in">
            <div
              class="flex flex-col gap-2 py-4 sm:gap-4 sm:flex-row sm:items-center"
              v-for="info in schedule"
            >
              <p class="text-md font-normal text-gray-500 sm:text-left shrink-0">
                {{ info.time }}
              </p>
              <p class="w-32 lg:text-center text-left text-gray-500">
                {{ info.venue }}
              </p>
              <h2 class="text-lg lg:text-xl font-semibold text-gray-900">
                {{ info.title }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
