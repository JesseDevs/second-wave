<template>
	<div class="products">
		<span>Products</span>
		<article-grid>
			<article>
				<h4>MEN</h4>
				<ul>
					<li><p>Tops</p></li>
					<li><p>Bottoms</p></li>
					<li><p>Accessories</p></li>
				</ul>
			</article>
			<article>
				<h4>WOMEN</h4>
				<ul>
					<li><p>Tops</p></li>
					<li><p>Bottoms</p></li>
					<li><p>Accessories</p></li>
				</ul>
			</article>
		</article-grid>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.products {
		border: 1px solid var(--color-secondary-20);
		border-radius: 2rem;
		padding: 1.5rem;
		position: relative;
		font-size: var(--text-xs);
		background: var(--color-black-10);

		* {
			font-size: inherit;
		}
		span {
			position: absolute;
			top: -1rem;
			left: 2rem;
			padding-left: 10px;
			padding-right: 10px;
			backdrop-filter: saturate(180%) blur(1.5rem);
			background: var(--color-black-10);
			font-weight: 600;
			text-transform: uppercase;
			font-size: var(--text-sm);
		}

		article-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 1.5rem 0;
			color: var(--color-secondary-80);

			h4 {
				text-transform: uppercase;
				font-weight: 500;
				padding-bottom: 1rem;
				border-bottom: 1px solid var(--color-secondary-20);
			}

			article + article {
				ul {
					padding-left: 1rem;
				}
				h4 {
					padding-left: 1rem;
					border-left: 1px solid var(--color-secondary-20);
				}
			}

			ul {
				padding-top: 1.5rem;
				display: flex;
				flex-direction: column;
				gap: 5px;
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
