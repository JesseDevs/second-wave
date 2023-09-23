import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { item } = event.context.params;
	const { brand, gender, type, minPrice, maxPrice } = getQuery(event);

	if (item === 'all') {
		return await prisma.product.findMany();
	}

	const searchItem = item.toLowerCase();

	let filters = {
		slug: {
			contains: searchItem,
		},
	};

	if (brand) {
		filters = {
			...filters,
			brand,
		};
	}

	if (gender) {
		filters = {
			...filters,
			gender,
		};
	}

	if (type) {
		filters = {
			...filters,
			type,
		};
	}

	if (minPrice || maxPrice) {
		filters.price = {};
	}

	if (minPrice) {
		filters.price.gte = parseInt(minPrice);
	}

	if (maxPrice) {
		filters.price.lte = parseInt(maxPrice);
	}

	return await prisma.product.findMany({
		where: filters,
	});
});
