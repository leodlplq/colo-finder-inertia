<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Labeled from '../../components/form/Labeled.vue';

const form = useForm({
  email: '',
  password: '',
  username: '',
})

const handleSubmit = (e)=>{
  e.preventDefault();
  form.post('/register')
}
</script>

<template>
 
    <Head title="S'inscrire" />
    
    <div class="w-full h-full flex flex-col gap-10 items-center justify-center py-20">
      <h1 class="text-3xl font-bold text-black dark:text-white">S'inscrire</h1>

      <form class="w-1/2 flex flex-col gap-4 justify-items-center" @submit="handleSubmit">
        <Labeled name="username" label="Nom d'utilisateur">
          <InputText id="username" v-model="form.username" aria-describedby="username" placeholder="Mickey" />
        </Labeled>
        <Labeled name="email" label="Email">
          <InputText id="email" v-model="form.email" aria-describedby="email" placeholder="mickey.mouse@gmail.com" />
        </Labeled>
        <Labeled name="password" label="Mot de passe">
          <Password :feedback="false" id="password" v-model="form.password" aria-describedby="password" placeholder="Mot de passe" toggleMask/>
        </Labeled>
        <Button type="submit" label="S'inscrire" :disabled="form.processing" :loading="form.processing"></Button>
      </form>

      <span class="text-black dark:text-white">Déjà un compte ? <a href="/login" class="text-primary-500">Connectez vous</a></span>
    </div>
    
   

</template>