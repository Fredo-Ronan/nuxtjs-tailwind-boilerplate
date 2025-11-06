<script lang="ts" setup>
	const { data: helloData, error, status } = await useFetch("/api/v1/hello");
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
		</div>
	</div>
</template>
