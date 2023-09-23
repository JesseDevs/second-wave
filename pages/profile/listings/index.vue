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
	const { data: listings } = await useFetch(`/api/car/listings/user/${user.value.id}`);

	const handleDelete = async (id) => {
		await $fetch(`/api/car/listings/${id}`, {
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
		div + div {
			padding: 0.75rem;
			margin-top: 1.25rem;
			border-radius: 0.25rem;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		}
	}
</style>
