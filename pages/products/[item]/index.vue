<template>
	<div>
		<ProductsCard v-for="product in products" :key="product.id" :product="product" />
	</div>
</template>

<script setup>
	const route = useRoute();
	const { capitalizeWords } = useUtilities();

	const { data: products, refresh } = await useFetchProducts(route.params.item);

	useHead({
		title: `
			SecondWave | ${capitalizeWords(route.params.item)}
		 in products.`,
	});
</script>

<style lang="scss" scoped></style>
