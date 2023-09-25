<template>
	<profile-page>
		<div class="profile-header">
			<h1 class="strict-voice">My Listings</h1>
			<NuxtLink to="/profile/listings/create">
				<Icon name="emojione-monotone:heavy-plus-sign" size="19" />
			</NuxtLink>
		</div>
		<article-grid>
			<ProductListing
				v-for="listing in listings"
				:key="listing.id"
				:listing="listing"
				@delete-click="handleDelete"
			/>
		</article-grid>
	</profile-page>
</template>

<script setup>
	const user = useSupabaseUser();
	const { data: listings } = await useFetch(`/api/product/listings/user/${user.value.id}`);

	const handleDelete = async (id) => {
		await $fetch(`/api/product/listings/${id}`, {
			method: 'delete',
		});
		listings.value = listings.value.filter((listing) => listing.id !== id);
	};
</script>

<style lang="scss" scoped>
	profile-page {
		display: block;
		width: 100%;

		.profile-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 9999px;
				padding: 1rem;
				font-weight: 700;
				color: #ffffff;
				background-color: var(--brand);
				cursor: pointer;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: #2168c0;
				}
			}
		}
		article-grid {
			display: flex;
			margin-top: 6rem;
			row-gap: 5vw;
			column-gap: 3vw;
			align-items: center;
			flex-direction: column;
		}
	}
</style>
