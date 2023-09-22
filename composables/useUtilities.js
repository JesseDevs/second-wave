export const useUtilities = () => {
	function capitalizeWords(str) {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	function convertToSlug(text) {
		return text.toLowerCase().replace(/ /g, '-');
	}

	return { capitalizeWords, convertToSlug };
};
