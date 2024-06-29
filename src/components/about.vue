<template>
  <section class="bg-gray-900">
    <div
      class="gap-8 items-center py-8 px-8 mx-auto max-w-screen-xl xl:gap-2 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <div class="w-full flex justify-center py-8">
        <img
          class="sm:w-80 sm:h-80 rounded-3xl sm:rounded-xl w-60 h-60"
          src="/human.png"
          alt="image"
        />
      </div>
      <div class="mt-4 md:mt-0">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
          Make every moment memorable
        </h2>
        <p class="mb-6 font-light md:text-lg text-gray-400">
          As a photographer who has been in photography and videography career for about a decade,
          experience and passion is more than enough to be a professional. From shooting events to
          video editing, we've had everything covered !
        </p>
        <div class="flex justify-left">
          <a
            href="https://www.instagram.com/jakechang11/"
            target="_blank"
            aria-label="Jake's Instagram"
            title="Instagram"
            class="inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              style="fill: rgba(255, 255, 255, 1); transform:; msfilter:"
            >
              <path
                d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
              ></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 font-medium border-0 text-sm px-5 py-2.5 text-center"
          >
            Get in touch
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <img
    class="w-screen absolute z-0"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxMTE4MjciLz48cGF0aCBkPSJNMTkyMCwxMDgwQzE2MjgsMTE0NS44MzMzMzMzMzMzMzMzLDI5NC42NjY2NjY2NjY2NjY3LDExNDQuNSwwLDEwODBDLTI5NC42NjY2NjY2NjY2NjY3LDEwMTUuNSw5OC44MzMzMzMzMzMzMzMzNCw3MTEuMzMzMzMzMzMzMzMzNCwxNTIsNjkzQzIwNS4xNjY2NjY2NjY2NjY2Niw2NzQuNjY2NjY2NjY2NjY2NiwyNjQuODMzMzMzMzMzMzMzMyw5MzQuMzMzMzMzMzMzMzMzNCwzMTksOTcwQzM3My4xNjY2NjY2NjY2NjY3LDEwMDUuNjY2NjY2NjY2NjY2Niw0MjQuODMzMzMzMzMzMzMzMyw5MjkuMTY2NjY2NjY2NjY2Niw0NzcsOTA3QzUyOS4xNjY2NjY2NjY2NjY2LDg4NC44MzMzMzMzMzMzMzM0LDU3OS4zMzMzMzMzMzMzMzM0LDg1Ni42NjY2NjY2NjY2NjY2LDYzMiw4MzdDNjg0LjY2NjY2NjY2NjY2NjYsODE3LjMzMzMzMzMzMzMzMzQsNzM5LjE2NjY2NjY2NjY2NjYsODE0LjUsNzkzLDc4OUM4NDYuODMzMzMzMzMzMzMzNCw3NjMuNSw5MDEuMTY2NjY2NjY2NjY2Niw2ODQuMTY2NjY2NjY2NjY2Niw5NTUsNjg0QzEwMDguODMzMzMzMzMzMzMzNCw2ODMuODMzMzMzMzMzMzMzNCwxMDYyLjE2NjY2NjY2NjY2NjcsNzk3LjgzMzMzMzMzMzMzMzQsMTExNiw3ODhDMTE2OS44MzMzMzMzMzMzMzMzLDc3OC4xNjY2NjY2NjY2NjY2LDEyMjQuODMzMzMzMzMzMzMzMyw2NTUuMzMzMzMzMzMzMzMzNCwxMjc4LDYyNUMxMzMxLjE2NjY2NjY2NjY2NjcsNTk0LjY2NjY2NjY2NjY2NjYsMTM4MS44MzMzMzMzMzMzMzMzLDU4MS41LDE0MzUsNjA2QzE0ODguMTY2NjY2NjY2NjY2Nyw2MzAuNSwxNTQ0LjE2NjY2NjY2NjY2NjcsNzU4LjgzMzMzMzMzMzMzMzQsMTU5Nyw3NzJDMTY0OS44MzMzMzMzMzMzMzMzLDc4NS4xNjY2NjY2NjY2NjY2LDE2OTguMTY2NjY2NjY2NjY2Nyw2MzMuNjY2NjY2NjY2NjY2NiwxNzUyLDY4NUMxODA1LjgzMzMzMzMzMzMzMzMsNzM2LjMzMzMzMzMzMzMzMzQsMjIxMiwxMDE0LjE2NjY2NjY2NjY2NjYsMTkyMCwxMDgwQzE2MjgsMTE0NS44MzMzMzMzMzMzMzMzLDI5NC42NjY2NjY2NjY2NjY3LDExNDQuNSwwLDEwODAiIGZpbGw9IiNkN2Q2ZDYiLz48L3N2Zz4="
  />
</template>
