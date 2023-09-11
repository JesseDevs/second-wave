<template>
	<div class="landing">Hero landing</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.landing {
		position: relative;
		height: 100vh;
		background: url('/images/tidal-wave.jpg') bottom no-repeat;
		background-size: cover;
		transition: transform 0.3s ease;

		&:hover {
			transform: translateZ(0) scale(1.03);
		}
	}
</style>
