
<script setup>
import { useAppStore } from '@/store/app.js'
const layout = "app";

const appStore = useAppStore()
const getNavigationState = appStore.getNavigationState
// const { getNavigationState } = storeToRefs(appStore);

</script>
<style type="text/css">
  /* Themes  */
  .dark-mode {
    @apply text-white bg-black;
  }

  .light-mode {
    @apply text-black bg-white;
  }
</style>
<template>
  <div>
    <h1>app</h1>
    <pre>
            {{getNavigationState}}
    </pre>
    <slot />
  </div>
</template>
