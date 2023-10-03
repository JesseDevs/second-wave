<template>
	<div v-if="loading" class="loading-container">
		<Icon name="line-md:loading-twotone-loop" size="100" />
	</div>
	<div v-else>
		<div v-if="products && products.length > 0" class="collection-container">
			<h2 class="strict-voice">Collection</h2>
			<picture class="landscape shop">
				<img src="/images/shop.jpg" alt="" />
				<div class="overlay"></div>
				<text-content>
					<p>Results: “{{ searchedItem }}”</p>
					<p>{{ products.length }} products</p>
				</text-content>
			</picture>
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
	const searchedItem = computed(() => route.params.item || 'All');

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
		margin-bottom: 40vh;
	}

	.collection-container {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		row-gap: 5vw;
		column-gap: 3vw;
		padding-bottom: 5vw;

		@media (min-width: 599px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 3rem;
		}

		@media (min-width: 1000px) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			gap: 3rem;
		}

		h2 {
			grid-column: 1/-1;

			padding-bottom: 5px;
			text-transform: uppercase;
			font-weight: 600;
			border-bottom: 1px solid var(--color-secondary-20);
		}
	}

	picture.landscape.shop {
		position: relative;
		aspect-ratio: 10/5;
		border-radius: 1.5rem;
		overflow: hidden;
		grid-column: 1/-1;
		margin-bottom: 3rem;
		.overlay {
			opacity: 0.4;
		}

		text-content {
			padding: 12px;
			position: absolute;
			left: 0;
			bottom: 0;
			font-weight: 600;
		}

		@media (min-width: 1000px) {
			grid-column: 1 / span 2;
			aspect-ratio: 10/7;
		}
	}
</style>
