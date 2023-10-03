<template>
	<filters-modal>
		<div>
			<h3>Brand</h3>
			<h3 @click="updateAdjustments('brand')">Brand</h3>
			<div class="modal location-modal">
				<input type="text" />
				<button @click="onChangeBrand">Apply</button>
			</div>
		</div>
		<Button30 :onClick="console.log('hi')"> Apply Filters</Button30>
	</filters-modal>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	const filterAdjustments = ref({
		brand: false,
		gender: false,
		type: false,
		price: false,
	});

	// const priceRange = ref({
	// 	min: '',
	// 	max: '',
	// });

	// const priceRangeText = computed(() => {
	// 	const minPrice = route.query.minPrice;
	// 	const maxPrice = route.query.maxPrice;

	// 	if (!minPrice && !maxPrice) return 'Any';
	// 	else if (!minPrice && maxPrice) {
	// 		return `< ${maxPrice}`;
	// 	} else if (minPrice && !maxPrice) {
	// 		return `> ${minPrice}`;
	// 	} else {
	// 		return `$${minPrice} - $${maxPrice}`;
	// 	}
	// });

	const updateAdjustments = (key) => {
		filterAdjustments.value[key] = !filterAdjustments.value[key];
	};

	const onChangeBrand = (brand) => {
		updateAdjustments('brand');
		navigateTo(`/collection/all?brand=${brand.value}`);
	};
</script>

<style lang="scss">
	filters-modal {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
