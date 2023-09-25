<template>
	<div class="landing">
		<h1 class="chant-voice">
			<span>SecondWave:</span>
			<span>Retail Shop</span>
		</h1>
		<NuxtLink class="small-voice collection-link" :to="`/collection`">
			<span>Shop Collection</span></NuxtLink
		>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.landing {
		position: relative;
		height: 400px;
		background: url('/images/tidal-wave.jpg') bottom no-repeat;
		background-size: cover;
		transition: transform 0.3s ease;
		border-radius: 2rem;

		&:hover {
			transform: translateZ(0) scale(1.01);
			filter: brightness(90%);
			filter: hue-rotate(10deg);

			h1 {
				opacity: 1;
				text-shadow: -2px 1px 5px rgb(0, 0, 0);
			}

			.collection-link {
				border-color: var(--color-secondary-10);
				background-color: rgba(20, 20, 20, 0.706);
				backdrop-filter: blur(5px);
				span {
					color: white;
				}
			}
		}

		h1 {
			mix-blend-mode: overlay;
			max-width: fit-content;
			position: absolute;
			transition: opacity 0.5s ease, text-shadow 0.3s ease;
			top: 60%;
			left: 50%;
			opacity: 0.8;
			transform: translate(-50%, -50%);
			font-weight: 900;
			color: white;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.574);
		}

		h1 span {
			display: block;
			+ span {
				text-align: right;
			}
		}

		.collection-link {
			font-weight: 600;
			background-color: rgba(21, 21, 21, 0.593);
			position: absolute;
			padding: 10px 20px;
			border-radius: 9999px;
			border: 2px solid transparent;
			bottom: 15%;
			right: 10%;
			backdrop-filter: blur(5px);

			transition: border-color 0.3s ease, background-color 0.3s ease,
				backdrop-filter 0.3s ease;

			span {
				transition: color 0.3s ease;
				color: white;
			}

			&:hover {
				background-color: black;
			}
		}
	}
</style>
