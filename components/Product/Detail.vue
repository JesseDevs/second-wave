<template>
	<detail-landing>
		<picture class="portrait">
			<NuxtImg
				:src="`${config.public.supabase.url}/storage/v1/object/public/images/${product.image}`"
				alt=""
			/>
		</picture>
		<div>
			<h1>{{ product.name }}</h1>
			<ProductBottom :product="product" />
			<text-content>
				<p><span>Designed for :</span> {{ capitalizeWords(product.gender) }}</p>
				<p><span>Type:</span> {{ capitalizeWords(product.type) }}</p>
				<p>
					<span>Description:</span><br />
					{{ product.description }}
				</p>
			</text-content>
		</div>
	</detail-landing>
</template>

<script setup>
	const props = defineProps({
		product: Object,
	});
	const { capitalizeWords } = useUtilities();
	const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
	detail-landing {
		display: flex;
		flex-direction: column;
		width: 100%;
		row-gap: 2rem;
		div {
			display: flex;
			flex-direction: column;
			row-gap: 2rem;
			width: 100%;
		}

		text-content {
			p span {
				color: rgb(137, 151, 172);
			}
		}

		picture {
			border-radius: 1rem;
			overflow: hidden;
			max-width: 400px;
			margin: 0 auto;
		}

		@media (min-width: 600px) {
			flex-direction: row;
			column-gap: 2rem;
			display: grid;
			grid-template-columns: 1fr 1fr;

			div {
				padding-top: 1rem;
			}
		}
	}
</style>
