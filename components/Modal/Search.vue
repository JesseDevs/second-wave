<template>
	<div>
		<search-bar :class="searchErr ? 'error' : ''">
			<input type="text" placeholder="Search products..." v-model="searchItem" />
			<button class="button-30 search-button" role="button" @click="handleSearch">
				Search
			</button>
		</search-bar>

		<div class="recent-searches">
			<h4>Recent Searches</h4>
			<ul>
				<li v-for="item in recentSearches">
					<p class="small-voice">{{ capitalizeWords(item) }}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
	const { capitalizeWords } = useUtilities();

	const searchItem = ref('');
	const searchErr = ref(false);
	const MAX_SEARCHES = 4;

	const formattedItem = computed(() => searchItem.value.toLowerCase().replace(/\s+/g, '-'));

	const recentSearches = computed(() => {
		return JSON.parse(localStorage.getItem('recentSearches') || '[]');
	});

	const handleSearch = () => {
		const newSearch = formattedItem.value;

		const searches = recentSearches.value.filter((item) => item !== newSearch);

		if (searches.length >= MAX_SEARCHES) {
			searches.pop();
		}
		searches.unshift(newSearch);
		//Moves the latest search to the front

		localStorage.setItem('recentSearches', JSON.stringify(searches));

		ui.forceModalClose();
		if (!formattedItem.value) {
			return (searchErr.value = true);
		}

		navigateTo(`/products/${formattedItem.value}`);
	};
</script>

<style lang="scss" scoped>
	.recent-searches {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-top: 2rem;
		h4 {
			text-transform: uppercase;
			font-weight: 500;
			letter-spacing: -0.01em;
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 5px;
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

	.button-30 {
		align-items: center;
		appearance: none;
		background-color: #fcfcfd;
		border-radius: 4px;
		border-width: 0;
		box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		color: #36395a;
		cursor: pointer;
		display: inline-flex;
		font-family: 'JetBrains Mono', monospace;
		height: 48px;
		justify-content: center;
		line-height: 1;
		list-style: none;
		overflow: hidden;
		padding-left: 16px;
		padding-right: 16px;
		position: relative;
		text-align: left;
		text-decoration: none;
		transition: box-shadow 0.15s, transform 0.15s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		will-change: box-shadow, transform;
	}

	.button-30:focus {
		box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
	}

	.button-30:hover {
		box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transform: translateY(-3px);
		background-color: #f1f1f4;
	}

	.button-30:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
		transform: translateY(2px);
	}
</style>
