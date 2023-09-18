<script setup lang="ts">
	import { useHead } from '@unhead/vue'
	import '~/composables/useTheme'

	useHead({
		title: 'Volver Vue Starter',
		meta: [
			{
				name: 'description',
				content: 'A Volverjs Template (Vite + Vue) inspired by Vitesse',
			},
		],
	})
</script>

<template>
	<RouterView />
</template>
