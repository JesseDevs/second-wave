<template>
	<div>
		{{ route.params }}
	</div>
</template>

<script setup>
	const route = useRoute();
	const { capitalizeWords } = useUtilities();

	useHead({
		title: `
			${capitalizeWords(route.params.item)}
		 in products.`,
	});
</script>

<style lang="scss" scoped></style>
