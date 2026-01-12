import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      // Between The Turns brand colors
      orange: '#FF7F30',
      blue: '#30A0FF',
      teal: '#00D4AA',
      yellow: '#FFD93D',
      purple: '#9F7AEA',
      cream: '#FFF8F0',
      coral: '#FF6B6B',
      // Keep original brutal theme colors for compatibility
      pink: '#F3B3C1',
      green: '#88D66C',
    },
  },
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
});
