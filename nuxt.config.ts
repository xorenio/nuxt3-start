// import { defineNuxtConfig } from 'nuxt3'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  title: 'Hello Nuxt',
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  css: [
    '~/assets/css/tailwind.css',
  ],
  // theme: {    
  // 	dark: true,    
  // 	colors: {      
  // 		primary: '#ff0000'    
  // 	}  
  // }
})
