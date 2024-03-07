<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { useThemeStore } from '../theme';

const theme = useThemeStore()

const props = defineProps(['currentUser'])
console.log('currentuser', props.currentUser)
</script>

<template>
    <Head title="Homepage" />
    <h1>Homepage</h1>
</template>