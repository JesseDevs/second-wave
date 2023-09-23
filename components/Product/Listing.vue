<template>
	<listing-view>
		<div class="listing-landing">
			<picture>
				<NuxtImg
					:src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
					alt="oops"
				/>
			</picture>
			<div class="p-3">
				<h1>{{ listing.name }}</h1>
				<p>${{ listing.price }}</p>
			</div>
		</div>
		<div class="listing-delete">
			<NuxtLink :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
			<p @click="emits('deleteClick', listing.id)">Delete</p>
		</div>
	</listing-view>
</template>

<script setup>
	const props = defineProps({
		listing: Object,
	});

	const config = useRuntimeConfig();

	const emits = defineEmits(['deleteClick']);
</script>

<style lang="scss" scoped>
	listing-view {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		margin-bottom: 1rem;
		justify-content: space-between;
		border-radius: 0.25rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
	.listing-landing {
		picture {
			margin-right: 0.75rem;
			width: 20rem;
			height: 11rem;
		}
		p {
			color: #60a5fa;
		}
	}
	.listing-delete {
		display: flex;
		padding: 0.75rem;
		a {
			margin-right: 1rem;
			color: #60a5fa;
		}
		p {
			color: #f87171;
			cursor: pointer;
		}
	}
</style>
