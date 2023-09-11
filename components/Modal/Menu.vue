<template>
	<menu-modal>
		<ul class="modal-content">
			<li class="products">
				<span>Products</span>
			</li>
		</ul>
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
			li {
				border: 1px solid var(--color-secondary-20);
				border-radius: 2rem;
				padding: 1.5rem;
				position: relative;
				span {
					position: absolute;
					top: -1rem;
					left: 2rem;
					padding-left: 1rem;
					padding-right: 1rem;
				}
			}
		}
	}
</style>
