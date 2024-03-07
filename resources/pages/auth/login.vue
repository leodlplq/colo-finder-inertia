<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Labeled from '../../components/form/Labeled.vue';

const form = useForm({
  email: '',
  password: '',
})

const handleSubmit = (e)=>{
  e.preventDefault();
  form.post('/login')
}
</script>

<template>
  
    <Head title="Se connecter" />
    
    <div class="w-full h-full flex flex-col gap-10 items-center justify-center py-20">
      <h1 class="text-3xl font-bold text-black dark:text-white">Se connecter</h1>

      <form class="w-1/2 flex flex-col gap-4 justify-items-center" @submit="handleSubmit">
        <Labeled name="email" label="Email">
          <InputText id="email" v-model="form.email" aria-describedby="email" placeholder="mickey.mouse@gmail.com" />
        </Labeled>
        <Labeled name="password" label="Mot de passe">
          <Password :feedback="false" id="password" v-model="form.password" aria-describedby="password" placeholder="Mot de passe" toggleMask/>
        </Labeled>
        <Button type="submit" label="Se connecter" :disabled="form.processing" :loading="form.processing"></Button>
      </form>

      <span class="text-black dark:text-white">Pas encore de compte ? <a href="/register" class="text-primary-500">Inscrivez vous</a></span>
    </div>
    
   
  
</template>