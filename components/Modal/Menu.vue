<template>
	<menu-modal>
		<div class="modal-content">
			<div class="products">
				<span>Products</span>
				<article-grid>
					<article>
						<h4>MEN</h4>
						<ul>
							<li>Tops</li>
							<li>Bottoms</li>
							<li>Accessories</li>
						</ul>
					</article>
					<article>
						<h4>WOMEN</h4>
						<ul>
							<li>Tops</li>
							<li>Bottoms</li>
							<li>Accessories</li>
						</ul>
					</article>
				</article-grid>
			</div>
		</div>
	</menu-modal>
</template>

<script setup></script>

<style lang="scss" scoped>
	menu-modal {
		display: block;
		overflow: hidden;
		width: 100vw;
		max-width: 800px;
		padding: 4rem 2rem;
		pointer-events: all;
		position: fixed;
		bottom: 0;

		backdrop-filter: saturate(180%) blur(1.5rem);
		background-color: var(--color-primary-50);
		background: var(--color-primary-50);
		border: 1px solid var(--color-secondary-20);
		border-radius: 2rem 2rem 0 0;
		height: 90vh;
		height: calc(var(7.62px, 1vh) * 90);
		// transform: translateY(100%);
		// width: 90vw;

		.modal-content {
			background: var(--color-primary-50);
			.products {
				border: 1px solid var(--color-secondary-20);
				border-radius: 2rem;
				padding: 1.5rem;
				position: relative;
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
					}
				}
			}
		}
	}
</style>
