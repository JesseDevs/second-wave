<template>
	<div class="products">
		<h2 class="strict-voice">Collection</h2>
		<NuxtLink
			class="small-voice collection-link"
			:to="`/collection`"
			@click="ui.forceModalClose"
		>
			<span>Shop Collection</span></NuxtLink
		>
		<article-grid>
			<aside class="product-headers">
				<h4>MEN</h4>
				<h4>WOMEN</h4>
			</aside>

			<article>
				<ul>
					<li><p class="tiny-voice">Tops</p></li>
					<li><p class="tiny-voice">Bottoms</p></li>
					<li><p class="tiny-voice">Accessories</p></li>
					<li><p class="tiny-voice">Jackets</p></li>
					<li><p class="tiny-voice">Outerwear</p></li>
				</ul>
				<ul>
					<li><p class="tiny-voice">Tops</p></li>
					<li><p class="tiny-voice">Bottoms</p></li>
					<li><p class="tiny-voice">Accessories</p></li>
					<li><p class="tiny-voice">Jackets</p></li>
					<li><p class="tiny-voice">Outerwear</p></li>
				</ul>
			</article>
		</article-grid>
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.products {
		background: var(--color-black-20);
		display: flex;
		flex-direction: column;
		gap: 3rem;

		article-grid {
			display: flex;
			flex-direction: column;
			padding: 1.5rem 0;
			color: var(--color-secondary-80);
			font-size: var(--text-xs);
			border: 1px solid var(--color-secondary-20);
			border-radius: 1rem;
			padding: 1.5rem;

			aside.product-headers {
				display: flex;
				width: 100%;
				border-bottom: 1px solid var(--color-secondary-20);
				h4 {
					width: 100%;
					text-transform: uppercase;
					font-weight: 500;
					padding-bottom: 1rem;
				}
			}

			article {
				display: flex;
				gap: 10px;
			}

			ul {
				padding-top: 1.5rem;
				display: flex;
				flex-direction: column;
				gap: 5px;
				flex-grow: 1;
				p {
					cursor: pointer;
					padding: 5px 10px;
					border-radius: 5px;
					transition: background-color 0.3s ease;

					&:hover {
						background-color: rgb(83, 82, 82);
					}
				}
			}
		}
	}
</style>
