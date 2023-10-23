<template>
	<listing-card>
		<picture class="portrait">
			<NuxtImg
				:src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
				alt="product-image-from-supadbase"
				quality="30"
				placeholder
				preload
			/>
		</picture>

		<text-content class="small-voice">
			<h3>${{ listing.price }}</h3>
			<p>{{ listing.name }}</p>
		</text-content>
		<listing-buttons>
			<NuxtLink :to="`/profile/listings/detail/${listing.id}`">View</NuxtLink>
			<span class="vline"></span>
			<p @click="emits('deleteClick', listing.id)">Delete</p>
		</listing-buttons>
	</listing-card>
</template>

<script setup>
	const props = defineProps({
		listing: Object,
	});

	const config = useRuntimeConfig();

	const emits = defineEmits(['deleteClick']);
</script>

<style lang="scss" scoped>
	listing-card {
		display: grid;
		grid-template-columns: 10rem auto;
		width: 100%;
		gap: 20px;
		padding: 10px;

		border-radius: 1rem;
		border: 1px solid var(--color-secondary-20);
		box-shadow: 0 1px 2px 0 var(--color-secondary-20);

		picture {
			max-width: 10rem;
			border-radius: 1rem;
			overflow: hidden;
		}
		text-content h3 {
			color: var(--brand);
			font-weight: 500;
		}

		text-content {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding-top: 3rem;
			* {
				font-size: inherit;
			}
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

		a {
			display: block;
			border-bottom-left-radius: 1rem;
			border-right: 1px solid var(--color-secondary-20);

			&:hover {
				background-color: var(--brand);
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

	.no-buttons {
		listing-buttons {
			display: none;
		}
	}
</style>
