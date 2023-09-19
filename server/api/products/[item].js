import products from '@/data/products.json';

export default defineEventHandler((event) => {
	// const { item } = event.context.params;
	// const { brand, minPrice, maxPrice } = getQuery(event);

	// const filters = {
	// 	city: city.toLowerCase(),
	// };

	// if (make) {
	// 	filters.make = make;
	// }

	// if (minPrice || maxPrice) {
	// 	filters.price = {};
	// }
	// if (minPrice) {
	// 	filters.price.gte = parseInt(minPrice);
	// }

	// if (maxPrice) {
	// 	filters.price.lte = parseInt(minPrice);
	// }
	// return prisma.car.findMany({
	// 	where: filters,
	// });
	return products;
});
