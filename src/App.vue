<template>
  <div
    class="font-['Quicksand'] max-w-xl bg-white p-8 shadow-2xl rounded absolute m-auto left-0 right-0 mt-32"
  >
    <h1 class="text-center text-3xl text-indigo-700">Vue Filters</h1>
    <ImgUpload v-if="!store.file" />
    <ImgEditor v-else />
  </div>
  <AppBG />
</template>

<script setup lang="ts">
import AppBG from './components/AppBG.vue'
import ImgEditor from './components/ImgEditor.vue'
import ImgUpload from './components/ImgUpload.vue'
import { useImageStore } from './stores/image'

const store = useImageStore()
</script>

<style scoped></style>
