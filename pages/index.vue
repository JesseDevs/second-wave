<template>
	<section class="landing">
		<inner-column> Hero Landing </inner-column>
		<div class="overlay" />
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
	.landing {
		position: relative;
		height: 100vh;
		background: url('images/tidal-wave.jpg') bottom no-repeat;
		background-size: cover;

		.overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #000000;
			opacity: 0.6;
			top: 0;
		}
	}
</style>
