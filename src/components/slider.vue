<script setup>
const {
  description,
  location,
  date,
  time,
  video,
  map,
  disableGuide,
  disableStores,
  sponsors,
  sponsorURL
} = defineProps({
  description: String,
  location: String,
  date: String,
  time: String,
  video: String,
  map: String,
  disableGuide: String,
  disableStores: String,
  sponsors: Array,
  sponsorURL: String
})
import { ref, onMounted } from 'vue'
import Footer from './footer.vue'
import About from './about.vue'
import Map from './map.vue'
import Stores from './stores.vue'
import Sponsor from './sponsor.vue'
import Guide from './guide.vue'
import Schedule from './schedule.vue'
</script>
<template>
  <div class="absolute top-[100vh] w-full bg-[#d7d6d6]" id="about">
    <about
      :description="description"
      :location="location"
      :date="date"
      :time="time"
      :video="video"
    />
    <Guide v-if="disableGuide != 'TRUE'" />
    <Stores v-if="disableStores != 'TRUE'" />
    <Map :map="map" />
    <Sponsor v-if="sponsorURL" :sponsorURL="sponsorURL" :sponsors="sponsors" />
    <Footer />
  </div>
</template>
