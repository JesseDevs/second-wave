import products from '@/data/collection.json';

export default defineEventHandler((event) => {
	const { item } = event.context.params;
	const { brand, gender, type, minPrice, maxPrice } = getQuery(event);

	let filteredProducts = products;

	if (item === 'all') {
		return (filteredProducts = products);
	}

	filteredProducts = filteredProducts.filter((product) => {
		return product.name.toLowerCase().includes(item.toLowerCase());
	});

	// if (brand) {
	// 	filteredProducts = filteredProducts.filter((product) => {
	// 		return product.brand.toLowerCase() === brand.toLowerCase();
	// 	});
	// }

	// if (gender) {
	// 	filteredProducts = filteredProducts.filter((product) => {
	// 		return product.gender.toLowerCase() === gender.toLowerCase();
	// 	});
	// }

	// if (type) {
	// 	filteredProducts = filteredProducts.filter((product) => {
	// 		return product.type.toLowerCase() === type.toLowerCase();
	// 	});
	// }

	// if (minPrice) {
	// 	filteredProducts.filter((product) => {
	// 		return product.price >= parseInt(minPrice);
	// 	});
	// }

	// if (maxPrice) {
	// 	filteredProducts.filter((product) => {
	// 		return product.price <= parseInt(maxPrice);
	// 	});
	// }

	// const filters = {
	// 	item: item.toLowerCase(),
	// };

	// if (brand) {
	// 	filters.brand = brand;
	// }

	// if (gender) {
	// 	filters.gender = gender;
	// }

	// if (type) {
	// 	filters.type = type;
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
	return filteredProducts;
});
