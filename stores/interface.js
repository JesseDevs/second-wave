import { defineStore } from 'pinia';

export const useInterfaceStore = defineStore('interface', function () {
	const modal = computed(() => {
		if (mainMenuOpen.value) {
			return true;
		}

		if (searchBar.value) {
			return true;
		}
		return false;
	});

	const mainMenuOpen = ref(false);
	const toggleMainMenu = () => {
		mainMenuOpen.value = !mainMenuOpen.value;
	};
	const closeMenu = () => {
		mainMenuOpen.value = false;
	};

	const searchBar = ref(false);
	const toggleSearchBar = () => {
		searchBar.value = !searchBar.value;
	};
	const closeSearchBar = () => {
		searchBar.value = false;
	};

	const forceModalClose = () => {
		mainMenuOpen.value = false;
		searchBar.value = false;
	};

	useHead({
		bodyAttrs: {
			class: computed(() => {
				if (modal.value) return 'overflow';
				return '';
			}),
		},
	});

	return {
		modal,
		mainMenuOpen,
		toggleMainMenu,
		closeMenu,
		searchBar,
		toggleSearchBar,
		closeSearchBar,
		forceModalClose,
	};
});
