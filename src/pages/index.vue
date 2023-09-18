<template>
	<div
		class="flex flex-col flex-1 mx-auto px-lg min-w-full bg-surface-1 min-h-full">
		<div class="flex flex-col items-center justify-center py-lg my-auto">
			<a href="https://volverjs.github.io/style" target="_blank">
				<img src="/volverjs.svg" class="logo" alt="Volverjs logo" />
			</a>
			<div class="text-center my-lg">
				<h1 class="vv-text vv-text--size-1 font-bold">
					Alessandro Bellesia
				</h1>
				<h2 class="vv-text vv-text--size-4 text-word-3 mb-lg">
					Lead Front-end Developer
				</h2>
			</div>
			<VvButtonGroup>
				<VvButton
					modifiers="secondary rounded"
					target="_blank"
					href="https://www.linkedin.com/in/alessandrobellesia/">
					Linkedin
				</VvButton>
			</VvButtonGroup>
		</div>
		<PjFooter />
	</div>
</template>
