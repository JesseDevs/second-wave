import products from '@/data/collection.json';
export default defineEventHandler((event) => {
	const { id } = event.context.params;

	const product = products.find((p) => {
		return p.id === parseInt(id);
	});

	if (!product) {
		throw createError({
			statusCode: 404,
			statusMessage: `Product ${id} does not exist`,
		});
	}

	return product;
});
