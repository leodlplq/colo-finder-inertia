<script setup lang="ts">
import { useThemeStore } from '../../theme';

const theme = useThemeStore()
</script>

<template>
  <div class="min-h-screen min-w-screen bg-slate-100 dark:bg-slate-900 p-4" :class="{'dark': theme.isDark}">
    <slot></slot>
  </div>
  
</template>