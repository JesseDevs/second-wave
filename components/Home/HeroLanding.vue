<template>
	<section class="hero-landing">
		<inner-column>
			<div class="landing">
				<picture class="landing-img">
					<NuxtImg
						src="/images/tidal-wave.jpg"
						alt="product-image-from-supadbase"
						quality="30"
						preload
						loading="eager"
					/>
				</picture>
				<div class="test">
					<h1 class="chant-voice back-up">
						<span>SecondWave:</span>
						<span>Retail Shop</span>
					</h1>
					<h1 class="chant-voice">
						<span>SecondWave:</span>
						<span>Retail Shop</span>
					</h1>

					<NuxtLink class="small-voice collection-link" :to="`/collection`">
						<span>Shop Collection</span></NuxtLink
					>
				</div>
			</div>
		</inner-column>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
	section.hero-landing {
		padding-top: 8vw;
		padding-bottom: 10vw;
		inner-column {
			padding-left: 3rem;
			padding-right: 3rem;
		}
	}
	.landing {
		position: relative;
		height: 400px;
		transition: transform 0.3s ease;
		border-radius: 1rem;

		@media (min-width: 700px) {
			background-position: center;
		}
		.test {
			height: 100%;
			background-color: transparent;
		}

		.landing-img {
			aspect-ratio: 3/4;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(17, 17, 17, 0.1);
			transition: opacity 0.5s ease;

			&:before {
				content: '';
				position: absolute;
				background: rgb(78 91 224 /0.3);
				background: radial-gradient(
					circle,
					rgba(72, 140, 176, 0.803) 0%,
					rgba(166 193 216 /0.3) 90%
				);
				left: -1.5rem;
				top: -1.5rem;
				width: 50%;
				height: 50%;
				border-radius: 1rem;
				z-index: -1;
			}
			&:after {
				content: '';
				position: absolute;
				background: rgb(78 91 224 /0.3);
				background: radial-gradient(
					circle,
					rgba(72, 140, 176, 0.803) 0%,
					rgba(166 193 216 /0.3) 90%
				);
				right: -1.5rem;
				bottom: -1.5rem;
				width: 50%;
				height: 50%;
				border-radius: 1rem;
				z-index: -1;
			}
			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
				border-radius: 1rem;
			}
		}

		&:hover {
			transform: translateZ(0) scale(1.01);
			filter: hue-rotate(-2deg);

			&::before {
				opacity: 1;
			}

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
			max-width: fit-content;
			position: absolute;
			transition: opacity 0.5s ease, text-shadow 0.3s ease, font-size 0.3s ease;
			top: 60%;
			left: 50%;
			opacity: 0.8;
			transform: translate(-50%, -50%);
			font-weight: 900;
			color: white;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.574);
		}

		h1.back-up {
			color: rgb(61, 61, 61);
			top: 59%;
			left: 48.5%;
			mix-blend-mode: difference;
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

		@media (min-width: 500px) {
			h1 {
				top: 55%;
			}
			.chant-voice {
				font-size: var(--text-xl);
			}
		}
	}
</style>
