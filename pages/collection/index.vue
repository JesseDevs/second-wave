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

	const { data: products, refresh } = await useFetchProducts();

	setTimeout(() => {
		loading.value = false;
	}, 1000);

	useHead({
		title: `
			SecondWave | Collection`,
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
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		row-gap: 5vw;
		column-gap: 3vw;
		padding-bottom: 5vw;

		h2 {
			grid-column: 1/-1;
			margin-bottom: 3vw;
			background-color: red;
			padding-bottom: 5px;
			text-transform: uppercase;
			font-weight: 600;
			border-bottom: 1px solid var(--color-secondary-20);
		}
	}
</style>
