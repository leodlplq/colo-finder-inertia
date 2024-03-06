<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Button from 'primevue/button';
import Layout from '../components/layout/Layout.vue';
import { useThemeStore } from '../theme';

const theme = useThemeStore()
</script>

<template>
  <Layout>
    <Head title="Homepage" />
    <Button :icon="theme.getIcon" aria-label="Toggle theme" @click="theme.toggle"/>
  </Layout>
</template>