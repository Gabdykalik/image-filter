<template>
  <div
    class="text-center my-8 py-32 text-slate-700 italic rounded border-4 border-double border-slate-700/25"
    @drag.prevent.stop=""
    @dragstart.prevent.stop=""
    @dragend.prevent.stop=""
    @dragenter.prevent.stop=""
    @dragleave.prevent.stop=""
    @dragover.prevent.stop=""
    @drop.prevent.stop="store.upload"
  >
    Drag and Drop Image
  </div>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/image'
const store = useImageStore()
</script>
