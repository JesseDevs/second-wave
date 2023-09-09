<template>
	<header class="main-tool-bar site-header">
		<inner-column>
			<nav class="main-menu">
				<NuxtLink to="/"><h2 class="Logo">SecondWave Shop</h2></NuxtLink>
				<button class="hamburger-button icon-button" @click="ui.toggleMainMenu">
					<Icon name="grommet-icons:menu" size="21" color="var(--text)" />
				</button>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';

	const ui = useInterfaceStore();
</script>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background-color: var(--background);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
		inner-column {
			padding: 1.5rem 2rem;

			.main-menu {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.icon-button {
					&:hover {
						background-color: rgba(166, 163, 163, 0.4);
					}
				}
			}
		}
	}

	.icon-button {
		outline: none;
		border: none;
		background-color: transparent;
		border-radius: 4px;
		padding: 6px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background-color: var(--fade);
		}
	}
</style>
