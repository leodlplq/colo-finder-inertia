<script setup lang="ts">
const props = defineProps<{
  name: string,
  label: string,
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.name" class="text-black dark:text-white">{{ props.label }}</label>
    <slot></slot>
  </div>
</template>