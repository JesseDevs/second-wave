export default async (item, filters) => {
	const { data, refresh, error } = useFetch(`/api/products/${item}`, {
		params: {
			...filters,
		},
	});

	if (error.value) {
		throw createError({
			...error.value,
			statusMessage: 'Unable to fetch cars',
		});
	}

	return { data, refresh };
};