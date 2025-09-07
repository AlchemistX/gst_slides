import { defineConfig } from '@slidev/cli'

export default defineConfig({
  title: 'GStreamer in Action',
  info: `
    ## GStreamer in Action 강의 자료입니다.
    Learn more at [GStreamer](https://gstreamer.freedesktop.org/)
  `,

  transition: 'slide-left',

  css: 'unocss',
  highlighter: 'shiki',
  lineNumbers: false,
  mdc: true,

  drawings: { persist: false },
  monaco: true,
  selectable: false,
  remoteAssets: false,

  seoMeta: { ogImage: 'auto' },
})
