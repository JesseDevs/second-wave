<template>
	<message-card v-if="message">
		<div class="row">
			<p>{{ message.name }}</p>
			<p>•</p>
			<p>{{ message.phone }}</p>
		</div>
		<p class="email">{{ message.email }}</p>

		<p class="message-text">
			{{ message.text }}
		</p>
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
		display: flex;
		flex-direction: column;

		width: 100%;
		padding: 1rem;
		background-color: #f3f4f6;
		border-radius: 1rem;
		border: 1px solid var(--color-secondary-20);
		background-color: var(--color-primary-30);

		font-size: var(--text-xs);

		* {
			font-size: inherit;
		}

		div.row {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 1rem;
			font-family: 'JetBrains Mono', monospace;
			color: var(--brand);
		}

		.email {
			color: #84abdb;
		}

		.message-text {
			padding-top: 1.2rem;
			min-height: 75px;
		}
	}
</style>
