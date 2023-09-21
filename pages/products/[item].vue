<template>
	<div v-if="products">
		<div v-if="loading" class="loading-container">
			<Icon name="line-md:loading-twotone-loop" size="45" />
		</div>
		<ProductsCard v-else v-for="product in products" :key="product.id" :product="product" />
	</div>

	<div v-else>
		<h1>No products found, with set filters</h1>
	</div>
</template>

<script setup>
	const route = useRoute();
	const { capitalizeWords } = useUtilities();
	const maxPrice = computed(() => route.query.maxPrice);
	const minPrice = computed(() => route.query.minPrice);

	const { data: products, refresh } = await useFetchProducts(route.params.item, {
		minPrice,
		maxPrice,
		brand: route.params.brand,
		gender: route.params.gender,
		type: route.params.type,
	});

	watch(
		() => route.query,
		() => refresh(),
	);

	const loading = ref(true);
	setTimeout(() => {
		loading.value = false;
	}, 1000);

	useHead({
		title: `
			SecondWave | ${capitalizeWords(route.params.item)}
		 in products.`,
	});
</script>

<style lang="scss" scoped></style>
