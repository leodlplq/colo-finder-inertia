import { defineStore } from 'pinia'
import { PrimeIcons } from 'primevue/api'
import { computed, ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(false)

  function toggle() {
    isDark.value = !isDark.value
  }

  const getIcon = computed(() => (isDark.value ? PrimeIcons.SUN : PrimeIcons.MOON))

  return { isDark, toggle, getIcon }
})
