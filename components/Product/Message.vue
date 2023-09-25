<template>
	<message-card>
		<h1>{{ message.name }}</h1>
		<p>
			{{ message.text }}
		</p>
		<div class="message-contact">
			<p>{{ message.email }}</p>
			<p>{{ message.phone }}</p>
		</div>
	</message-card>
</template>

<script setup>
	const props = defineProps({
		message: Object,
		listing: Object,
	});
</script>

<style lang="scss" scoped>
	message-card {
		display: block;
		width: 100%;
		padding: 1rem;
		background-color: #f3f4f6;
		border-radius: 1rem;
		border: 1px solid var(--color-secondary-20);
		> p {
			color: #374151;
		}
	}

	.message-contact {
		p {
			margin-right: 2.5rem;
			color: #047857;
		}
		p + p {
			color: #3b82f6;
		}
	}
</style>
