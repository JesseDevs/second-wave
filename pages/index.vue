<template>
	<div>
		<HomeHeroLanding />
		<HomeAboutBlock />
	</div>
</template>

<script setup>
	useHead({
		title: `SecondWave | Home`,
	});

	definePageMeta({
		layout: 'home',
		pageTransition: {
			name: 'slide-fade',
			mode: 'out-in',
		},
	});
</script>

<style lang="scss" scoped></style>
