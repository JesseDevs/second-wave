<template>
	<ClientOnly>
		<Teleport to="footer">
			<div
				@click="handleModalContainerClick"
				:class="['modal-container', ui.modal ? 'open' : '']"
			>
				<button class="icon-button close-x" @click="ui.forceModalClose">
					<Icon name="mingcute:close-fill" size="21" />
				</button>
				<menu-modal>
					<div class="modal-content">
						<slot />
					</div>
				</menu-modal>
			</div>
		</Teleport>
	</ClientOnly>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('menu-modal')) {
			ui.forceModalClose();
		}
	};
</script>

<style lang="scss" scoped>
	.modal-container {
		position: fixed;
		overflow-y: auto;
		z-index: 100;
		width: 100vw;
		flex: 1 1 0%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		background: var(--color-black-60);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(0.3px);
		transition: backdrop-filter 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			opacity 0.3s ease-in-out;
		backdrop-filter: blur(5px);
		opacity: 0;
		pointer-events: none;

		.close-x {
			position: absolute;
			top: 1.5rem;
			right: 2rem;
			background: var(--color-secondary-30);
			color: rgb(210, 200, 200);

			&:hover {
				background-color: var(--fade);
			}
		}
	}

	.modal-container.open {
		backdrop-filter: blur(3px);
		opacity: 1;
		pointer-events: all;

		menu-modal {
			bottom: 0;
		}
	}

	menu-modal {
		display: block;
		overflow: hidden;
		width: 100vw;
		max-width: 800px;
		padding: 4rem 3rem;
		pointer-events: all;
		position: fixed;
		bottom: -100%;

		backdrop-filter: saturate(180%) blur(1.5rem);
		background-color: var(--color-primary-50);
		background: var(--color-primary-50);
		border: 1px solid var(--color-secondary-20);
		border-radius: 2rem 2rem 0 0;
		height: 90vh;
		height: calc(var(7.62px, 1vh) * 90);
		transition: 0.3s bottom ease;
		// transform: translateY(100%);
		// width: 90vw;
	}
</style>
