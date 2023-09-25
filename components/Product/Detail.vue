<template>
	<detail-landing>
		<picture>
			<NuxtImg
				:src="`${config.public.supabase.url}/storage/v1/object/public/images/${product.image}`"
				alt=""
			/>
		</picture>
		<h1>{{ product.name }}</h1>

		<bottom-details>
			<p>${{ product.price }}</p>
			<ul>
				<li>
					<p>{{ product.size }}</p>
				</li>
				<li class="bar"><p>|</p></li>
				<li>
					<p>{{ product.brand }}</p>
				</li>
				<li class="bar"><p>|</p></li>
				<li>
					<p>{{ product.color }}</p>
				</li>
			</ul>
		</bottom-details>
	</detail-landing>
</template>

<script setup>
	const props = defineProps({
		product: Object,
	});

	const config = useRuntimeConfig();
</script>

<style lang="scss" scoped>
	detail-landing {
		display: flex;
		flex-direction: column;
		width: 100%;
		row-gap: 2rem;

		picture {
			border-radius: 2rem;
			overflow: hidden;
		}

		bottom-details {
			display: flex;
			justify-content: space-between;
			color: rgb(137, 151, 172);
			padding-bottom: 2rem;
			border-bottom: 1px solid gray;

			ul {
				display: flex;
				gap: 2vw;

				.bar {
					color: rgb(200, 206, 215);
				}
			}
		}
	}
</style>
