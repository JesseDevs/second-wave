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
			<bottom-details>
				<p>${{ product.price }}</p>
				<ul>
					<li>
						<p>{{ capitalizeWords(product.size) }}</p>
					</li>
					<li class="bar"><p>|</p></li>
					<li>
						<p>{{ capitalizeWords(product.brand) }}</p>
					</li>
					<li class="bar"><p>|</p></li>
					<li>
						<p>{{ capitalizeWords(product.color) }}</p>
					</li>
				</ul>
			</bottom-details>

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
			padding-top: 2rem;
			padding-bottom: 2rem;

			p span {
				color: rgb(137, 151, 172);
			}
		}

		picture {
			border-radius: 1rem;
			overflow: hidden;
			max-width: 450px;
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

		@media (min-width: 600px) {
			flex-direction: row;
			column-gap: 2rem;
			display: grid;
			grid-template-columns: 1fr 1fr;

			div {
				padding-top: 1rem;
			}

			bottom-details {
				flex-direction: column;
				border: none;
				border-left: 1px solid gray;
				padding-left: 1rem;
				grid-row-gap: 2vw;
				padding-bottom: 0;
				.bar {
					display: none;
				}
				ul {
					flex-direction: column;
				}
			}
		}

		@media (min-width: 850px) {
			bottom-details {
				flex-direction: row;
				border-left: 0px solid gray;
				border-bottom: 1px solid gray;
				padding-left: 0;
				.bar {
					display: block;
				}
				ul {
					flex-direction: row;
				}
			}
		}
	}
</style>
