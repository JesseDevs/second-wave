<template>
	<div>
		<search-bar :class="searchErr ? 'error' : ''">
			<input type="text" placeholder="Search products..." v-model="searchItem" />
			<Button30 :onClick="handleSearch"> Search</Button30>
		</search-bar>

		<div class="recent-searches">
			<h4>Recent Searches</h4>
			<ul>
				<li v-for="item in recentSearches">
					<p class="small-voice" @click="doRecentSearch(item)">
						{{ capitalizeWords(item) }}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	const ui = useInterfaceStore();
	const { capitalizeWords } = useUtilities();

	const searchItem = ref('');
	const searchErr = ref(false);
	const MAX_SEARCHES = 4;

	const formattedItem = computed(() => searchItem.value.toLowerCase().replace(/\s+/g, '-'));

	const recentSearches = computed(() => {
		return JSON.parse(localStorage.getItem('recentSearches') || '[]');
	});

	const doRecentSearch = (item) => {
		navigateTo(`/collection/${item}`);
		ui.forceModalClose();
	};

	const handleSearch = () => {
		let newSearch = formattedItem.value;
		if (!newSearch) {
			newSearch = 'all';
			console.log(newSearch);
		}
		const searches = recentSearches.value.filter((item) => item !== newSearch);

		if (searches.length >= MAX_SEARCHES) {
			searches.pop();
		}
		searches.unshift(newSearch);

		localStorage.setItem('recentSearches', JSON.stringify(searches));

		ui.forceModalClose();
		navigateTo(`/collection/${newSearch}`);
	};
</script>

<style lang="scss" scoped>
	.recent-searches {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 3rem;

		h4 {
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: -0.01em;
		}

		ul {
			display: flex;
			flex-direction: column;
			font-family: 'JetBrains Mono', monospace;
			padding-bottom: 2rem;
			gap: 5px;
			border-bottom: 1px solid var(--color-secondary-20);
			p {
				cursor: pointer;
				padding: 5px 10px;
				border-radius: 5px;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: rgb(83, 82, 82);
				}
			}
		}
	}
	search-bar {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 3rem;
		background-color: transparent;
	}

	input,
	button {
		font-size: var(--text-xs);
	}

	input {
		width: 100%;
		outline: 2px solid transparent !important;
		outline-offset: 2px !important;
		color: white;
		padding-bottom: 1rem;
		border: none;
		background-color: transparent;
		border-bottom: 1px solid var(--color-secondary-20);
	}
</style>
