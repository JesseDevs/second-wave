<template>
	<product-card>
		<NuxtLink :to="`/product/${product.slug}-${product.id}`">
			<picture>
				<NuxtImg :src="`${product.image}`" alt="p-image" />
			</picture>
		</NuxtLink>
		<p>{{ product.name }}</p>
		<p>{{ product.id }}</p>
	</product-card>
</template>

<script setup>
	const props = defineProps({
		product: Object,
	});
</script>

<style lang="scss" scoped>
	product-card {
		display: flex;
		flex-direction: column;
	}
</style>
