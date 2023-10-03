<script setup>
	const route = useRoute();
	const user = useSupabaseUser();
	const { data: messages } = useFetch(`/api/product/listings/${route.params.id}/message`);
	const { data: listing } = await useFetch(`/api/product/listings/detail/${route.params.id}`);
</script>

<template>
	<message-display>
		<h2 class="strict-voice">Listing: {{ listing.name }}</h2>
		<ProductListing class="no-buttons" :listing="listing" />

		<message-container>
			<ProductMessage
				v-if="messages && messages.length > 0"
				v-for="message in messages"
				:key="message.id"
				:message="message"
			/>

			<p v-else class="text-center">There are currently no messages.</p>
		</message-container>
	</message-display>
</template>

<style lang="scss" scoped>
	message-display {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 5vw;
	}

	message-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		row-gap: 5vw;

		border-radius: 1rem;
		border: 1px solid var(--color-secondary-20);
		box-shadow: 0 1px 2px 0 var(--color-secondary-20);
		padding: 2rem 1.2rem;

		@media (min-width: 599px) {
			display: grid !important;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 3rem;
		}
	}

	.text-center {
		text-align: center;
	}

	div {
		margin-top: 5rem;
		border-radius: 0.25rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
</style>
