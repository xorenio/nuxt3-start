
<template>
  <div>
    Hello
    <NuxtLink to="/about">
    About page
  </NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
  title: 'My App'
});
useHead({
  title: 'My App',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  // bodyAttrs: {
  //   class: 'test'
  // }
})
function enableCustomLayout () {
  setPageLayout('custom')
}

</script>
