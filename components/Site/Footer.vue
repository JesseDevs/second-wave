<template>
	<footer class="site-footer">
		<inner-column> This is a footer. </inner-column>
	</footer>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	site-footer {
		display: block;
		width: 100%;
		position: relative;
		background-color: rgba(255, 255, 255, 0.211);
	}
</style>
