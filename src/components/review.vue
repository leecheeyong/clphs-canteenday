<script setup></script>
<template>
  <div
    data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": true
      }'
    class="relative"
  >
    <div class="hs-carousel relative overflow-hidden w-full min-h-[450px]">
      <div
        class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
      >
        <div class="hs-carousel-slide">
          <div class="flex justify-center h-full">
            <img src="/demomap.jpg" class="h-full w-full" />
          </div>
        </div>
        <div class="hs-carousel-slide">
          <div class="flex justify-center h-full">
            <video autoplay muted loop class="top-0 w-screen h-screen z-0 object-cover opacity-90">
              <source src="/demo.webm" />
            </video>
          </div>
        </div>
        <div class="hs-carousel-slide">
          <div class="flex justify-center h-full">
            <video autoplay muted loop class="top-0 w-screen h-screen z-0 object-cover opacity-90">
              <source src="/homepage.webm" />
            </video>
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-white hover:bg-gray-100/[.1]"
    >
      <span class="text-2xl" aria-hidden="true">
        <svg
          class="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          ></path>
        </svg>
      </span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      type="button"
      class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-white hover:bg-gray-100/[.1]"
    >
      <span class="sr-only">Next</span>
      <span class="text-2xl" aria-hidden="true">
        <svg
          class="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </span>
    </button>
  </div>
  <section class="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),#d7d6d6)] opacity-20"
    ></div>
    <div
      class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-200 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"
    ></div>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <figure class="max-w-screen-md mx-auto text-center">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p class="text-2xl italic font-medium text-gray-900">
            "Jake's a professional photographer that don't just shoot photos but wraps everything up
            with his skillful video editing knowledges all by himself, it's an impressive telent as
            a high school student"
          </p>
        </blockquote>
        <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <img
            class="w-10 h-10 rounded-full"
            src="https://joe.js.org/assets/joelee.png"
            alt="profile picture"
          />
          <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
            <cite class="pe-3 font-medium text-gray-900">Chee Yong</cite>
            <cite class="ps-3 text-sm text-gray-500">Client</cite>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
