<template>
	<div>
		<listing-card
			v-for="listing in sortedListings"
			:key="listing.id"
			:style="{ 'animation-delay': `${listing.delay}ms` }"
		>
			<template v-if="listing.imageLoaded">
				<picture class="portrait">
					<NuxtImg
						:src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
						alt="product-image-from-supabase"
						quality="30"
						placeholder
						preload
					/>
				</picture>
			</template>
			<template v-else>
				<!-- You can use a placeholder image or loading spinner here -->
				<img src="/placeholder.jpg" alt="Placeholder Image" />
			</template>
			<!-- Rest of your listing-card content -->
		</listing-card>
	</div>
</template>

<script setup>
	const props = defineProps({
		listing: Object,
	});

	const sortedListings = ref([]);
	const config = useRuntimeConfig();
	const emits = defineEmits(['deleteClick']);

	const preloadImages = () => {
		sortedListings.value.forEach((listing, index) => {
			const img = new Image();
			img.src = `${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`;
			img.onload = () => {
				// Mark the image as loaded
				listing.imageLoaded = true;
			};
			img.onerror = () => {
				// Handle error if the image fails to load
				console.error(`Failed to load image: ${listing.image}`);
			};

			// Set a small delay for the card based on its position
			listing.delay = index * 100; // You can adjust the delay as needed
		});
	};

	onMounted(() => {
		// Sort the listings array by createdAt property in descending order
		sortedListings.value = listings.value.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
		);

		// Preload images with a delay
		preloadImages();
	});
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
