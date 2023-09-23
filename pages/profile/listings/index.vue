<template>
	<profile-page>
		<div>
			<h1>My Listings</h1>
			<NuxtLink to="/profile/listings/create">+</NuxtLink>
		</div>
		<div>
			<ProductListing
				v-for="listing in listings"
				:key="listing.id"
				:listing="listing"
				@delete-click="handleDelete"
			/>
		</div>
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
		> div {
			display: flex;
			margin-top: 6rem;
			justify-content: space-between;
			align-items: center;
			a {
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 9999px;
				font-weight: 700;
				color: #ffffff;
				background-color: #60a5fa;
				cursor: pointer;
			}
		}
	}
</style>
