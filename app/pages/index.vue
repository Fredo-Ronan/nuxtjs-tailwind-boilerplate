<script lang="ts" setup>
	const { data: helloData, error: ErrorHello, status: statusHello } = await useFetch("/api/v1/hello");
    const { data: dataDB, error: ErrorDB, status: statusDB } = await useFetch("/api/v1/data");

    const accountsData = ref(dataDB);
</script>

<template>
    <div class="h-screen flex justify-center items-center bg-blue-950 text-white">
		<div class="text-center">
			<h1 class="text-2xl font-bold">
				Nuxt JS + Tailwind CSS boilerplate
			</h1>
			<p class="text-lg">
				Made by
				<nuxt-link
					href="https://fredo-code.vercel.app"
					target="_blank"
					class="underline"
				>Fredo Ronan</nuxt-link>
			</p>
			<p class="mt-6">
				Edit file
				<code class="font-mono bg-black text-white rounded px-2 text-sm">app.vue</code>
				to get started
			</p>
			<p class="mt-6">
				Visit <code class="font-mono bg-black text-white rounded px-2 text-sm"><nuxt-link
					target="_blank"
					href="http://localhost:3000/_tailwind"
					class="underline"
				>http://localhost:3000/_tailwind</nuxt-link></code> to see tailwind classes
			</p>
			<p class="mt-6">
				Data from API: {{ helloData!.hello }}
			</p>
			<p>
				This data is comming from <code class="font-mono bg-black text-white rounded px-2 text-sm">/api/v1/hello</code> route. Check the server folder.
			</p>

            <div class="mt-12">
				<div>
					These data is comming from <code class="font-mono bg-black text-white rounded px-2 text-sm">/api/v1/data</code> route. Check the server folder.
				</div>
				<div class="font-mono bg-black text-white rounded px-2 text-sm">
					<ol v-for="account in accountsData" :key="account.id">
						Username: {{ account.username }}, Email: {{ account.email }}
					</ol>
				</div>
            </div>
            <div class="mt-6">
				<NuxtLink to="/add" class="bg-blue-600 px-2 py-1 rounded">Add Data</NuxtLink>
			</div>
		</div>
	</div>
</template>