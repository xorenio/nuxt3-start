
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
    <h1><h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1></h1>
    <pre>
            {{getNavigationState}}
    </pre>
    <slot />
    <div>
    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="ja">ja</option>
      </select>
    </form>
    </div>
  </div>
</template>

