<template>
	<div v-if="loading" class="loading-container">
		<Icon name="line-md:loading-twotone-loop" size="100" />
	</div>
	<div v-else>
		<div v-if="products && products.length > 0" class="collection-container">
			<h2 class="strict-voice">Collection</h2>
			<ProductsCard v-for="product in products" :key="product.id" :product="product" />
		</div>

		<div v-else>
			<h1>No products found, with set filters</h1>
		</div>
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
		brand: route.query.brand,
		gender: route.query.gender,
		type: route.query.type,
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
			SecondWave | ${capitalizeWords(route.params.item)} in Collection`,
	});
</script>

<style lang="scss" scoped>
	.loading-container {
		display: grid;
		place-items: center;
		min-height: 40vh;
	}

	.collection-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 5vw;
		column-gap: 3vw;

		h2 {
			grid-column: 1/-1;
			margin-bottom: 3rem;
			padding-bottom: 5px;
			text-transform: uppercase;
			font-weight: 600;
			border-bottom: 1px solid var(--color-secondary-20);
		}
	}
</style>
