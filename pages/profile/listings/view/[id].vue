<script setup>
	const route = useRoute();
	const { data: messages } = useFetch(`/api/product/listings/${route.params.id}/message`);
</script>

<template>
	<div>
		<ProductMessage v-for="message in messages" :key="message.id" :message="message" />
	</div>
</template>

<style lang="scss" scoped>
	div {
		margin-top: 5rem;
		border-radius: 0.25rem;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
</style>
