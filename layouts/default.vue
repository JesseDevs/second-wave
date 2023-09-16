<template>
	<div>
		<SiteNav />
		<ModalContainer>
			<ModalMenu v-if="ui.mainMenuOpen" />
			<ModalSearch v-if="ui.searchBar" />
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
	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			flex-grow: 1;
		}
	}
</style>
