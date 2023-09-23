export default async (item, filters) => {
	const { data, refresh, error } = useFetch(`/api/collection/${item}`, {
		params: {
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
