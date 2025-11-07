<script setup lang="ts">
    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');
    const email = ref('');
    const result = ref('');

    const add = async () => {
        const payload = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        const resultPost = await $fetch("/api/v1/data", {
            method: "POST",
            body: payload
        })

        navigateTo("/");
    }
</script>

<template>
    <div class="h-screen bg-blue-950 text-white px-12">
        <div class="py-6">
            <p class="text-2xl">Add Sample Data</p>
        </div>
        <NuxtLink to="/" class="bg-blue-600 px-2 py-1 rounded">Back to Home</NuxtLink>

        <div class="mt-6">
            <div class="flex gap-4">
                <input type="text" class="text-black" v-model="username" placeholder="username">
                <input type="password" class="text-black" v-model="password" placeholder="password">
                <input type="email" class="text-black" v-model="email" placeholder="email@example.com">
            </div>
            <button @click="add()" class="mt-4 px-2 py-1 rounded" :class="[username === '' || password === '' || email === '' ? 'bg-slate-400' : 'bg-blue-600']" :disabled="username === '' || password === '' || email === ''">Add</button>
        </div>
    </div>
</template>