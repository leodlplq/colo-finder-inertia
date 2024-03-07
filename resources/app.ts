import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import './css/app.css'

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import type { DefineComponent } from 'vue'
import { createApp, h } from 'vue'
import Layout from './components/layout/Layout.vue'
import Wind from './presets/wind'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'
const pinia = createPinia()

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `./pages/${name}.vue`,
      import.meta.glob<DefineComponent>('./pages/**/*.vue')
    )
    page.default.layout = page.default.layout || Layout
    return page
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(pinia)
      .use(PrimeVue, { unstyled: true, pt: Wind })
      .mount(el)
  },
})
