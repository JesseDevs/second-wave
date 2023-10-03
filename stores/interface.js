import { defineStore } from 'pinia';

export const useInterfaceStore = defineStore('interface', function () {
	const modal = computed(() => {
		if (mainMenuOpen.value) {
			return true;
		}

		if (searchBar.value) {
			return true;
		}

		if (profileModal.value) {
			return true;
		}

		if (filtersModal.value) {
			return true;
		}
		return false;
	});

	const mainMenuOpen = ref(false);
	const toggleMainMenu = () => {
		mainMenuOpen.value = !mainMenuOpen.value;
	};

	const searchBar = ref(false);
	const toggleSearchBar = () => {
		searchBar.value = !searchBar.value;
	};

	const profileModal = ref(false);
	const toggleProfileModal = () => {
		profileModal.value = !profileModal.value;
	};

	const filtersModal = ref(false);
	const toggleFiltersModal = () => {
		filtersModal.value = !filtersModal.value;
	};

	const forceModalClose = () => {
		mainMenuOpen.value = false;
		searchBar.value = false;
		profileModal.value = false;
		filtersModal.value = false;
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
		searchBar,
		toggleSearchBar,
		profileModal,
		toggleProfileModal,
		forceModalClose,
		filtersModal,
		toggleFiltersModal,
	};
});
