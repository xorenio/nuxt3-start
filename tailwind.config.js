
// const plugin = require('tailwindcss/plugins')
// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  prefix: '',
  // important: true,
  darkMode: "class",
  separator: ':',
  // purge: {
  //   enabled: false,
  //   // content: ['./src/**/*.html'],
  // },
  // purge: {
  //   //enable remove unused CSS only in production
  //   enabled: process.env.NODE_ENV === 'production',
  //   //any file that may contain the reference of CSS styles by class name.
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js'
  //   ]
  // },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    // darkSelector: '.dark-mode',
    darkSelector: '.dark',
    screens: {
      xxs: '360px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      ml: '832px',
      mxl: '960px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      // transparent: 'transparent',
      transparent: {
       default: 'transparent',
       'white': '#ffffff80',
       'red': '#f5656580',
       'blue': '#4299e180',
       'green': '#48bb7880',
       'orange': '#ed893680',
       'yellow': '#ecc94b80',
       'pink': '#ed64a680',
       'purple': '#9f7aea80',
       'deep-purple': '#673AB780',
       'teal': '#38b2ac80',
       'indigo': '#667eea80',
      },
      dark: '#1d1d1d',
      faded: '#ffffff7d',
      darken: '#0a0a0ad1',
      lighten: '#ffffff17',
      // black: '',
      black: "#000",

      white: '#fff',

      // for people having issues with the US
      // https://greyorgray.com/
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        default: '#a0aec0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      grey: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        default: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        default: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        default: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        default: '#ecc94b',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        default: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        default: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        default: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        default: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        default: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      'deep-purple': {
        100: '#BC7DFF',
        200: '#A869FF',
        300: '#9455EF',
        400: '#7637D1',
        500: '#673AB7',
        default: '#673AB7',
        600: '#5819B3',
        700: '#4E0FA9',
        800: '#44059F',
        900: '#3A0095',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        default: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    spacing: {
      sw: '100vw',
      sh: '100vh',
      auto: 'auto',
      px: '1px',
      '0': '0',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.32rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '5.5': '1.32rem',
      '6': '1.5rem',
      '8': '2rem',
      '9': '2.4rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '13.5': '3.36rem',

      '14': '3.5rem',
      '16': '4rem',
      '17': '4.25rem',
      '18': '4.5rem',
      '19': '4.75rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
      '270': '270px',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      "m-10": '-10px',
      '300': '-300px',
      '100': '-100px',
      '-100': '-100px',
      '-300': '-300px',
      '60': '-60px',
      '120': '-120px',
      full: '100%',
      xs: '480px',
      sm: '640px',
      md: '768px',
      mlg: '978px',
      lg: '1024px',
      xl: '1280px',
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      transparent:'transparent',
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      bold: '0 2px 10px rgba(0, 0, 0, 0.2)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xxs: '0.5rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => theme('spacing'),
    inset: theme => ({
      ...theme('spacing')
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: theme => theme('spacing'),
    maxWidth: theme => theme('spacing'),
    minHeight: theme => theme('spacing'),
    minWidth: theme => theme('spacing'),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '25': '0.25',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '75': '0.75',
      '80': '0.8',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => theme('spacing'),
    stroke: {
      current: 'currentColor',
    },
    textColor: theme => theme('colors'),
    width: theme => theme('spacing'),
    zIndex: {
      auto: 'auto',
      'm1': '-1',
      '-1': '-1',
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '60': '60',
      '70': '70',
      '80': '80',
      '90': '90',
      '100': '100',
      '110': '110',
      '120': '120',
      '130': '130',
      '140': '140',
      '150': '150',
      '160': '160',
      '170': '170',
      '180': '180',
      '190': '190',
      '200': '200',
      '210': '210',
      '220': '220',
      '230': '230',
      '240': '240',
      '250': '250',
      '260': '260',
      '270': '270',
      '280': '280',
      '290': '290',
      '300': '300',
      '310': '310',
    },
  },
  variants: {
    alignContent: [
      'responsive'
    ],
    alignItems: [
      'responsive'
    ],
    alignSelf: [
      'responsive'
    ],
    appearance: [
      'responsive'
    ],
    backgroundAttachment: [
      'responsive'
    ],
    backgroundColor: [
      "dark", 
      "dark-hover", 
      "dark-group-hover", 
      "dark-even", 
      "dark-odd", 
      'responsive', 
      'hover', 
      'focus', 
      'group-hover',
      'active'
    ],
    backgroundPosition: [
      'responsive'
    ],
    backgroundRepeat: [
      'responsive'
    ],
    backgroundSize: [
      'responsive'
    ],
    borderCollapse: [
      'responsive'
    ],
    borderColor: [
      "dark", 
      "dark-focus", 
      "dark-focus-within", 
      'responsive', 
      'hover', 
      'focus', 
      'group-focus', 
      'group-hover',
      'active', 
      'group-focus-within', 
      'group-active', 
      'group-visited', 
      'group-disabled', 
      'hocus', 
      'group-hocus'
    ],
    borderRadius: [
      'responsive', 
      'hover', 
      'focus', 
      'group-focus', 
      'group-hover',
      'active', 
      'group-focus-within',
      'group-active', 
      'group-visited', 
      'group-disabled', 
      'hocus', 
      'group-hocus'
    ],
    borderStyle: [
      'responsive', 
      'hover', 
      'focus', 
      'group-focus', 
      'group-hover',
      'active', 
      'group-focus-within', 
      'group-active', 
      'group-visited', 
      'group-disabled', 
      'hocus', 
      'group-hocus'
    ],
    borderWidth: [
      'responsive', 
      'hover', 
      'focus', 
      'group-focus', 
      'group-hover',
      'active', 
      'group-focus-within', 
      'group-active', 
      'group-visited', 
      'group-disabled', 
      'hocus', 
      'group-hocus'
    ],
    boxShadow: [
      'responsive', 
      'hover', 
      'focus'
    ],
    cursor: [
      'responsive', 
      'focus', 
      'active'
    ],
    display: [
      'responsive', 
      'group-hover', 
      'focus'
    ],
    fill: [
      'responsive'
    ],
    flex: [
      'responsive'
    ],
    flexDirection: [
      'responsive'
    ],
    flexGrow: [
      'responsive'
    ],
    flexShrink: [
      'responsive'
    ],
    flexWrap: [
      'responsive'
    ],
    float: [
      'responsive'
    ],
    fontFamily: [
      'responsive'
    ],
    fontSize: [
      'responsive'
    ],
    fontSmoothing: [
      'responsive'
    ],
    fontStyle: [
      'responsive'
    ],
    fontWeight: [
      'responsive', 
      'hover', 
      'focus'
    ],
    height: [
      'responsive'
    ],
    inset: [
      'responsive'
    ],
    justifyContent: [
      'responsive'
    ],
    letterSpacing: [
      'responsive'
    ],
    lineHeight: [
      'responsive'
    ],
    listStylePosition: [
      'responsive'
    ],
    listStyleType: [
      'responsive'
    ],
    margin: [
      'responsive'
    ],
    maxHeight: [
      'responsive'
    ],
    maxWidth: [
      'responsive'
    ],
    minHeight: [
      'responsive'
    ],
    minWidth: [
      'responsive'
    ],
    objectFit: [
      'responsive'
    ],
    objectPosition: [
      'responsive'
    ],
    opacity: [
      'responsive', 
      'hover', 
      'group-hover'
    ],
    order: [
      'responsive'
    ],
    outline: [
      'responsive', 
      'group-hover',
      'focus'
    ],
    overflow: [
      'responsive'
    ],
    padding: [
      'responsive'
    ],
    pointerEvents: [
      'responsive'
    ],
    position: [
      'responsive'
    ],
    resize: [
      'responsive'
    ],
    stroke: [
      'responsive', 
      'hover'
    ],
    tableLayout: [
      'responsive'
    ],
    textAlign: [
      'responsive'
    ],
    textColor: [
      "dark", 
      "dark-hover", 
      "dark-active",
      'responsive', 
      'group-hover',
      'hover', 
      'focus'
    ],
    textDecoration: [
      'responsive', 
      'group-hover',
      'hover', 
      'focus'
    ],
    textTransform: [
      'responsive'
    ],
    userSelect: [
      'responsive'
    ],
    verticalAlign: [
      'responsive'
    ],
    visibility: [
      'responsive', 
      'group-hover', 
      'active'
    ],
    whitespace: [
      'responsive'
    ],
    width: [
      'responsive'
    ],
    wordBreak: [
      'responsive'
    ],
    zIndex: [
      'responsive'
    ],
  },
  corePlugins: {},
  plugins: [
   // require('tailwindcss/plugins/container')(),
   require('tailwindcss-interaction-variants'),
   require('tailwindcss-dark-mode')(),
   require('@tailwindcss/aspect-ratio'),
  ],
}
