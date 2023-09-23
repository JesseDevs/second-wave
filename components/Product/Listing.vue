<template>
	<listing-view>
		<picture>
			<NuxtImg
				:src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
				alt="image-from-supadbase"
			/>
		</picture>

		<text-content>
			<h1>{{ listing.name }}</h1>
			<p>${{ listing.price }}</p>
		</text-content>
		<listing-buttons>
			<NuxtLink :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
			<span class="vline"></span>
			<p @click="emits('deleteClick', listing.id)">Delete</p>
		</listing-buttons>
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
		display: grid;
		grid-template-columns: 10rem auto;
		width: 100%;
		gap: 20px;
		padding: 10px;

		border-radius: 1rem;
		border: 1px solid var(--color-secondary-20);
		box-shadow: 0 1px 5px 0 var(--color-secondary-20);

		picture {
			max-width: 10rem;
			border-radius: 1rem;
			overflow: hidden;
		}
		text-content p {
			color: #60a5fa;
		}
	}

	listing-buttons {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		height: fit-content;
		grid-column: 1/-1;
		border-top: 1px solid var(--color-secondary-20);

		*:not(.vline) {
			padding: 10px 15px;
			line-height: normal;
			width: 100%;
			text-align: center;
			transition: background-color 0.3s ease, color 0.25s ease;
			font-weight: 500;
		}

		&:before {
			position: absolute;

			background-color: var(--color-secondary-20);
			width: 5px;

			min-height: 100%;
		}

		a {
			display: block;
			border-bottom-left-radius: 1rem;

			&:hover {
				background-color: #60a5fa;
				color: black;
			}
		}
		p {
			cursor: pointer;
			border-bottom-right-radius: 1rem;
			&:hover {
				background-color: #f87171;
				color: black;
			}
		}
	}
</style>
