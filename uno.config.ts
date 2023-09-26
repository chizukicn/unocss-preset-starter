import { defineConfig } from 'unocss'
import { presetStarter } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetStarter({
      span: 24,
    }),
  ],
  rules: [
    ['col-item', {
      'margin': '.5rem',
      'background': '#0066dd',
      'text-align': 'center',
      'color': 'white',
    }],
  ],
})
