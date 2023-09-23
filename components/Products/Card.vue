<template>
	<product-card>
		<NuxtLink :to="`/product/${product.slug}-${product.id}`">
			<picture>
				<NuxtImg
					:src="`${config.public.supabase.url}/storage/v1/object/public/images/${product.image}`"
					alt="product-image"
				/>
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
	const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
	product-card {
		display: flex;
		flex-direction: column;
	}
</style>
