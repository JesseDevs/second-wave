export const useUtilities = () => {
	function capitalizeWords(str) {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	return { capitalizeWords };
};
