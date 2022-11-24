// store/filters.js
import { defineStore } from 'pinia'

export const useAppStore = defineStore("app", {
  // id: 'app-store',
  state: () => ({
      page: {
        title: "",
        subtitle: ""
      },
      video: {
        youtubeId: 0,
        vimeoId: 0,
        state: false
      },
      navigation: {
        top: { state: false },
        left: { state: false },
        right: { state: false },
        bottom: { state: false },
        state: false,
        // colours: { state: false },
        // languages: { state: false },

      },
      menu: {
        // items: [
        //   {n: 'home', to:'index'},
        //   {n: 'about', to:'about'},
        //   {n: 'game servers', to:'game-servers'},
        //   {
        //     n: 'discord', 
        //     href:'https://discord.gg/xKFDpuzeGh', 
        //     svg: '<svg class="w-4 mr-2 inline" xmlns="http://www.w3.org/2000/svg" width="1.29em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 199"><path fill="#5865F2" d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18Z"/></svg>'
        //   }
        // ]
        items: [
          {n: 'home', to:"index"},
          {n: 'about', to:"about"},
          {n: 'game servers', to:"game-servers"},
          {n: 'discord', 
            href:"https://discord.gg/xKFDpuzeGh",
            svg: '<svg  xmlns="http://www.w3.org/2000/svg" width="1em" width="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 199"><path fill="#5865F2" d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18Z"/></svg>'
          },



          {n: 'color scheme', 
            state: false,
            switch: true,
            // https://icon-sets.iconify.design/line-md/moon-twotone/
            dark:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="lightgray" fill-opacity="0"><path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"/></path><path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"/></path></g><g fill-opacity="0" stroke="lightgray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="lightgray" stroke-dasharray="56" stroke-dashoffset="56" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"/></path></g></svg>',
            
            // https://icon-sets.iconify.design/line-md/sun-rising-filled-loop/
            light: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><circle cx="12" cy="32" r="6" fill="gold"><animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"/></circle><g fill="none" stroke="gold" stroke-dasharray="2" stroke-dashoffset="2" stroke-linecap="round" stroke-width="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"/></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"/></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>',
            // i:[
            //   {
            //     n:'dark',
            //     svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><circle cx="32.2" cy="32" r="31.688" fill="#405866"/><path fill="#f5eb35" d="M18.438 3.442C7.787 8.55.415 19.399.415 32c0 14.418 9.636 26.564 22.813 30.404c-10.903-10.483-18.997-38.935-4.79-58.962z"/><g fill="#4f6977"><circle cx="29.529" cy="52.777" r="9.172"/><path d="M42.04 24.407a3.895 3.895 0 0 1-7.791 0a3.897 3.897 0 0 1 7.791 0"/></g><g fill="#e0cf35"><circle cx="6.316" cy="36.39" r="3.823"/><circle cx="6.659" cy="18.871" r="2.182"/></g><g fill="#4f6977"><circle cx="17.815" cy="19.604" r="3.413"/><path d="M47.835 11.07a4.804 4.804 0 0 1-4.808 4.803a4.807 4.807 0 0 1-4.807-4.803a4.808 4.808 0 0 1 9.615 0"/></g></svg>',
            //     c:'dark'
            //   },
            //   {
            //     n:'light',
            //     svg:'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><circle cx="32.02" cy="32.11" r="31.863" fill="#f5eb35"/><path fill="#405866" d="M18.281 3.397C7.571 8.534.161 19.447.161 32.111c0 14.497 9.689 26.71 22.938 30.571c-10.963-10.539-19.1-39.15-4.816-59.29"/><g fill="#e0cf35"><circle cx="29.339" cy="53" r="9.222"/><path d="M41.921 24.477a3.918 3.918 0 0 1-7.833 0a3.917 3.917 0 0 1 7.833 0"/></g><g fill="#4f6977"><circle cx="5.998" cy="36.526" r="3.844"/><circle cx="6.344" cy="18.911" r="2.194"/></g><g fill="#e0cf35"><circle cx="17.561" cy="19.647" r="3.431"/><path d="M47.745 11.07a4.831 4.831 0 0 1-4.833 4.83a4.832 4.832 0 1 1 4.833-4.83"/></g></svg>',
            //     c:'light'
            //   }
            // ]
          },
          {n: 'languages',
            svg:'<svg xmlns="http://www.w3.org/2000/svg" width="0.86em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1536 1792"><path fill="currentColor" d="M654 1078q-1 3-12.5-.5T610 1066l-20-9q-44-20-87-49q-7-5-41-31.5T424 948q-67 103-134 181q-81 95-105 110q-4 2-19.5 4t-18.5 0q6-4 82-92q21-24 85.5-115T393 918q17-30 51-98.5t36-77.5q-8-1-110 33q-8 2-27.5 7.5T308 792t-17 5q-2 2-2 10.5t-1 9.5q-5 10-31 15q-23 7-47 0q-18-4-28-21q-4-6-5-23q6-2 24.5-5t29.5-6q58-16 105-32q100-35 102-35q10-2 43-19.5t44-21.5q9-3 21.5-8t14.5-5.5t6 .5q2 12-1 33q0 2-12.5 27T527 769.5T510 803q-25 50-77 131l64 28q12 6 74.5 32t67.5 28q4 1 10.5 25.5t4.5 30.5zM449 592q3 15-4 28q-12 23-50 38q-30 12-60 12q-26-3-49-26q-14-15-18-41l1-3q3 3 19.5 5t26.5 0t58-16q36-12 55-14q17 0 21 17zm698 129l63 227l-139-42zM39 1521l694-232V257L39 490v1031zm1241-317l102 31l-181-657l-100-31l-216 536l102 31l45-110l211 65zM777 242l573 184V46zm311 1323l158 13l-54 160l-40-66q-130 83-276 108q-58 12-91 12h-84q-79 0-199.5-39T318 1668q-8-7-8-16q0-8 5-13.5t13-5.5q4 0 18 7.5t30.5 16.5t20.5 11q73 37 159.5 61.5T714 1754q95 0 167-14.5t157-50.5q15-7 30.5-15.5t34-19t28.5-16.5zm448-1079v1079l-774-246q-14 6-375 127.5T19 1568q-13 0-18-13q0-1-1-3V474q3-9 4-10q5-6 20-11q107-36 149-50V19l558 198q2 0 160.5-55t316-108.5T1369 0q20 0 20 21v418z"/></svg>',
            state: false,
            i:[
              {
                n:'english',
                l:"en"
              },
              {
                n:'français',
                l:"fr"
              },
              {
                n:'español',
                l:"es"
              }
            ]
          },
        ]
      },
      public: {title: ""},
      layout: "",
      color: {
        scheme: {
          dark: false,
          light: false,
          system: false,
        }
      },
      cookie:{
        domain: 'localhost',

        menu: false,
        hover: false,
        functinal: true,
      
        accepted: false,
        preference: false,
        advertising: false,
        statistics: false,

      },
      scroll:{
        percentage: 0,
      }
  }),
  actions: {
    setNavigationStatus (status) {
      this.navigation.state = status;
    },
    setNavigationColoursStatus (status) {
      this.navigation.colours.state = status;
    },
    setNavigationLanguagesStatus (status) {
      this.navigation.languages.state = status;
    },
    setNavigationAllStatus (status) {
      this.menu.items[4].state = status;
      this.menu.items[5].state = status;
      this.navigation.state = status;
    },
    setPageTitle (title) {
      this.page.title = title;
    },
    setPageSubTitle (subtitle) {
      this.page.subtitle = subtitle;
    },

    setVideoYoutubeId (id) {
      this.video.youtubeId = id;
    },
    setVideoVimeoId (id) {
      this.video.vimeoId = id;
    },
    setVideoStatus (status) {
      this.video.state = status;
    },
    setColorSchemeDark () {
        this.color.scheme.dark = true;
        this.color.scheme.light = false;
        this.color.scheme.system = false;
    },
    setColorSchemeLight () {
        this.color.scheme.dark = false;
        this.color.scheme.light = true;
        this.color.scheme.system = false;
    },
    setColorSchemeSystem () {
        this.color.scheme.dark = false;
        this.color.scheme.light = false;
        this.color.scheme.system = true;
    },
    setPublicTitle (title) {
      this.public = {title: title};
    },
    setScrollPercentage (num) {
      this.scroll.percentage = num;
    },
    setCookieMenuStatus (status) {
      this.cookie.menu = status;
    },

    setCookieMenuHoverStatus (status) {
      this.cookie.hover = status;
    },
    setCookieDomain (domain) {
      this.cookie.domain = domain;
    },
    setCookieAcceptedStatus (status) {
      this.cookie.accepted = status;
    },

    setCookiePreferenceStatus (status) {
      this.cookie.preference = status;
    },
    setCookieStatisticsStatus (status) {
      this.cookie.statistics = status;
    }
  },
  getters: {
    getNavigationState: state => state.navigation.state,
    getNavigationColoursState: state => state.navigation.colours.state,
    getNavigationlanguagesState: state => state.navigation.languages.state,
    getNavigationItems: state => state.menu.items,
    getPageTitle: state => state.page.title,
    getPageSubTitle: state => state.page.subtitle,
    getVideoYoutubeId: state => state.video.youtubeId,
    getVideoVimeoId: state => state.video.vimeoId,
    getVideoStatus: state => state.video.state,
    getColorScheme: state => state.color.scheme,
    getColorSchemeDark: state => state.color.scheme.dark,
    getColorSchemeLight: state => state.color.scheme.light,
    getColorSchemeSystem: state => state.color.scheme.system,
    getLayout: state => state.layout,
    getScrollPercentage: state => state.scroll.percentage,
    getCookieDomain: state => state.cookie.domain,
    getCookieMenuStatus: state => state.cookie.menu,
    getCookieMenuHoverStatus: state => state.cookie.menu,

    getCookieAcceptedStatus: state => state.cookie.accepted,
    getCookieFunctinalStatus: state => state.cookie.functinal,
    getCookiePreferenceStatus: state => state.cookie.preference,
    getCookieStatisticsStatus: state => state.cookie.statistics
  },
})
