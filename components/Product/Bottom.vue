<template>
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
</template>

<script setup>
	const props = defineProps({
		product: Object,
	});
	const { capitalizeWords } = useUtilities();
</script>

<style lang="scss" scoped>
	bottom-details {
		display: flex;
		justify-content: space-between;
		color: rgb(137, 151, 172);
		padding-bottom: 2rem;
		border-bottom: 1px solid gray;

		ul {
			display: flex;
			gap: 1rem;

			.bar {
				color: rgb(200, 206, 215);
			}
		}
	}

	@media (min-width: 600px) {
		bottom-details {
			max-width: 85%;
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

			li:not(.bar) {
				padding-right: 1rem;
				padding-left: 1rem;
			}
		}
	}
</style>
