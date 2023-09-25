export default async (item, filters) => {
	const { data, refresh, error } = await useFetch(`/api/collection/${item}`, {
		query: {
			...filters,
		},
	});

	if (error.value) {
		throw createError({
			...error.value,
			statusMessage: 'Unable to fetch products',
		});
	}

	return { data, refresh };
};
