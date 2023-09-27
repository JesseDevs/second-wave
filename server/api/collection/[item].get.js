import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { item } = event.context.params;
	const { brand, gender, type, minPrice, maxPrice } = getQuery(event);

	function capitalizeWords(str) {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	}

	let filters = {};

	if (item) {
		filters = {
			slug: {
				contains: item.toLowerCase(),
			},
		};
	}

	if (item === 'all') {
		filters = {};
	}

	if (brand) {
		filters.brand = brand.toLowerCase();
	}

	if (gender) {
		filters.gender = gender.toLowerCase();
	}

	if (type) {
		console.log(type);
		filters.type = type.toLowerCase();
	}

	// if (minPrice || maxPrice) {
	// 	filters.price = {};
	// }

	// if (minPrice) {
	// 	filters.price.gte = parseInt(minPrice);
	// }

	// if (maxPrice) {
	// 	filters.price.lte = parseInt(maxPrice);
	// }

	console.log(filters);

	return await prisma.product.findMany({
		where: filters,
	});
});
