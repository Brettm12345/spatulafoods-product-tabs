const plugin = require('tailwindcss/plugin');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const withPrefix = (prefix, object) => {
  if (prefix === '') return object;
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      `${prefix}${capitalize(key)}`,
      value,
    ])
  );
};

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/direflow-components/spatulafoods-product-tabs/**/*.{js,jsx,ts,tsx,vue}',
  ],
  variants: {
    display: [
      'children',
      'default',
      'children-first',
      'children-last',
      'children-odd',
      'children-even',
      'children-not-first',
      'children-not-last',
      'children-hover',
      'hover',
      'children-focus',
      'focus',
      'children-focus-within',
      'focus-within',
      'children-active',
      'active',
      'children-visited',
      'focus-visible',
      'visited',
      'children-disabled',
      'disabled',
      'responsive',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neuzeit Office', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fef5f4',
          100: '#fdeae9',
          200: '#facbc7',
          300: '#f6aba5',
          400: '#f06c62',
          500: '#e92d1f',
          600: '#d2291c',
          700: '#af2217',
          800: '#8c1b13',
          900: '#72160f',
        },
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      const newUtilities = Object.fromEntries(
        [...Array(100)]
          .map((_, i) => i + 1)
          .map(x => [
            `.column-count-${x}`,
            {
              columnCount: x,
            },
          ])
      );
      addUtilities(newUtilities);
    }),
    plugin(({addUtilities, config, e}) => {
      const newUtilities = ['', 'min'].map(prefix =>
        Object.fromEntries(
          Object.entries(config('theme.width')).map(([key, value]) => [
            `.${e([prefix, 'size', key].filter(x => x !== '').join('-'))}`,
            withPrefix(prefix, {
              width: value,
              height: value,
            }),
          ])
        )
      );
      addUtilities(newUtilities);
    }),
    plugin(({addUtilities, config, e}) => {
      const newUtilities = Object.fromEntries(
        Object.entries(config('theme.space')).map(([key, value]) => [
          `.${e(`col-gap-${key}`)}`,
          {columnGap: value},
        ])
      );
      addUtilities(newUtilities);
    }),
    require('@neojp/tailwindcss-important-variant'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
};
