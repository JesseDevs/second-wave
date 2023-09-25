<template>
	<product-card>
		<NuxtLink :to="`/product/${product.id}-${product.slug}`">
			<picture>
				<NuxtImg
					:src="`${config.public.supabase.url}/storage/v1/object/public/images/${product.image}`"
					alt="product-image"
				/>
			</picture>
		</NuxtLink>
		<text-content>
			<p class="tiny-voice">{{ product.name }}</p>
			<p class="tiny-voice">{{ product.color }}</p>
			<p class="tiny-voice">${{ product.price }}</p>
		</text-content>
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
		gap: 5px;

		a {
			flex-grow: 1;
		}

		picture {
			max-width: 200px;
			max-height: 240px;
			border-radius: 2rem;
			overflow: hidden;
			height: 100%;
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}

		p.tiny-voice:not(:first-of-type) {
			color: rgb(193, 191, 191);
		}
	}
</style>
