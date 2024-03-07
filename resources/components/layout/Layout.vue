<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import { ref } from 'vue';
import { useThemeStore } from '../../theme';

const theme = useThemeStore()

const props = defineProps(['currentUser'])
console.log('user', props.currentUser)

const items = ref([
    {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: ()=>{
          router.get('/')
        }
    },
])
</script>

<template>
  <div class="min-h-screen h-screen min-w-screen bg-slate-100 dark:bg-slate-900 p-4" :class="{'dark': theme.isDark}">
    <div class="mx-auto md:w-4/6">
      <Menubar :model="items">
        <template #start>
            logo
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a class="flex align-items-center" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
        </template>
        <template #end>
            <div class="flex align-items-center gap-2">
                <Button :icon="theme.getIcon" aria-label="Toggle theme" @click="theme.toggle"/>
                <div v-if="props.currentUser">
                  <Button text><a href="/logout">Déconnecter</a></Button>
                </div>
                <div v-else class="flex align-items-center gap-2">
                  <Button><a href="/login">Se connecter</a></Button>
                  <Button outlined><a href="/register">S'inscrire</a></Button>
                </div>
            </div>
        </template>
      </Menubar>
      <slot></slot>
    </div>
   
  </div>
  
</template>