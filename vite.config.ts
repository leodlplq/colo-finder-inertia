import { defineConfig } from 'vite'
import inertia from '@adonisjs/inertia/client'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [inertia({ ssr: { enabled: false } }), vue(), adonisjs({ entrypoints: ['resources/app.ts'], reload: ['resources/views/**/*.edge'] })],
})
