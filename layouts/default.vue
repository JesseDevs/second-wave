<template>
	<div>
		<SiteNav />
		<ModalContainer>
			<ModalMenu />
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

<script setup></script>

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
