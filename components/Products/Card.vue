<template>
	<div>
		<p>{{ product.name }}</p>
		<p>{{ product.id }}</p>
	</div>
</template>

<script setup>
	const props = defineProps({
		product: Object,
	});
</script>

<style lang="scss" scoped></style>
