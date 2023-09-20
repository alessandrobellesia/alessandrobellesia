<script setup lang="ts">
	import { useHead } from '@unhead/vue'
	import '~/composables/useTheme'

	useHead({
		title: 'Curriculum vitae di Alessandro Bellesia',
		meta: [
			{
				name: 'description',
				content:
					'Lead Front-End Developer con oltre 14 di esperienza nella	progettazione, sviluppo e ottimizzazione di interfacce utente per applicazioni web e mobile.',
			},
		],
	})
</script>

<template>
	<RouterView />
</template>
