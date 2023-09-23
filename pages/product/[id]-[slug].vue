<template>
	<detail-page>
		<ProductDetail :product="product" />
		<!--
		<article class="detail-attr" v-for="feature in product.features" :key="feature"> -->

		<text-content>
			<p><span>Designed for :</span> {{ product.gender }}</p>
			<p><span>Type:</span> {{ product.type }}</p>
			<p>
				<span>Description:</span><br />
				{{ product.description }}
			</p>
		</text-content>
		<ProductMessageForm />
	</detail-page>
</template>

<script setup>
	const route = useRoute();
	const { capitalizeWords } = useUtilities();

	const { data: product } = await useFetchProduct(route.params.id);

	useHead({
		title: capitalizeWords(route.params.slug),
	});
</script>

<style lang="scss" scoped>
	text-content {
		padding-top: 2rem;
		padding-bottom: 2rem;

		p span {
			color: rgb(137, 151, 172);
		}
	}

	product-extras {
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
	}
</style>
