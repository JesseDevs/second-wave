<template>
	<ClientOnly>
		<Teleport to="footer">
			<div @click="handleModalContainerClick" :class="`modal-container ${ui.menuClass}`">
				<button class="icon-button close-x" @click="ui.closeMenu">
					<Icon name="mingcute:close-fill" size="21" />
				</button>
				<slot />
			</div>
		</Teleport>
	</ClientOnly>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	const handleModalContainerClick = (event) => {
		if (!event.target.closest('menu-modal')) {
			ui.closeMenu();
		}
	};
</script>

<style lang="scss" scoped>
	// .modal-enter-active,
	// .modal-leave-active {
	// 	transition: all 0.25s ease;
	// }

	// .modal-enter-from,
	// .modal-leave-to {
	// 	opacity: 0;
	// 	transform: scale(1.1);
	// }
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
			right: 3rem;
			background: var(--color-secondary-30);
			color: rgb(210, 200, 200);

			&:hover {
				background-color: var(--fade);
			}
		}
	}

	.modal-container.menu-open {
		backdrop-filter: blur(3px);
		opacity: 1;
		pointer-events: all;
	}
</style>
