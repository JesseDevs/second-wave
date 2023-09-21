<template>
	<detail-page v-if="product">
		{{ product.name }}
		<!-- <CarDetail :car="car" /> -->
		<!--
		<article class="detail-attr" v-for="feature in car.features" :key="feature"> -->
		<article>
			<p>✔</p>
			<p>
				<code>feature</code>
			</p>
		</article>

		<text-content>
			<p>
				<code>description</code>
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
		title: capitalizeWords(route.params.name),
	});
</script>

<style lang="scss" scoped></style>
