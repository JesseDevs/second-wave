<template>
	<div class="app-container">
		<SiteNav />
		<ModalContainer>
			<LazyModalMenu v-if="ui.mainMenuOpen" />
			<LazyModalSearch v-if="ui.searchBar" />
			<LazyModalProfile v-if="ui.profileModal" />
			<LazyModalFilters v-if="ui.filtersModal" />
		</ModalContainer>
		<main>
			<section>
				<inner-column>
					<slot />
				</inner-column>
			</section>
		</main>
		<SiteFooter />
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			flex-grow: 1;
		}
	}
</style>
