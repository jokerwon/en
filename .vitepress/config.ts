import { defineConfig } from 'vitepress'
import glob from 'fast-glob'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'EN',
  description: 'My English Notes',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Phrase', link: '/phrase/section-1' },
      { text: 'Camp', link: '/camp/' },
      { text: 'Pronunciation', link: '/pronunciation/consonant' },
    ],

    sidebar: {
      '/phrase/': [
        {
          text: 'Phrase',
          items: await getSidebarItems('phrase/*.md'),
        },
      ],
      '/camp/': [
        {
          text: 'Camp',
          items: [
            { text: 'Introduction', link: '/camp/' },
            {
              text: 'State 1',
              collapsed: true,
              items: await getSidebarItems('camp/stage-1/*.md'),
            },
            {
              text: 'State 2',
              collapsed: false,
              items: await getSidebarItems('camp/stage-2/*.md'),
            },
          ],
        },
      ],
      '/pronunciation/': [
        {
          text: 'Consonant',
          link: '/pronunciation/consonant',
        },
        {
          text: 'Vowel',
          link: '/pronunciation/vowel',
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/jokerwon/en' }],
  },
})

async function getSidebarItems(pattern: string) {
  return glob(pattern, { stats: true }).then((files) => files.map(({ name, path }) => ({ text: convertTitle(name), link: `/${path}` })))
}

function convertTitle(filename: string) {
  return filename
    .replace(/\.md$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}
