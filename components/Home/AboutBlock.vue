<template>
	<section>
		<inner-column>
			<article-grid>
				<!-- :style="`flex-direction: ${a.class}`"  -->
				<article v-for="a in articleDetails" :key="a">
					<text-content>
						<h2 class="strict-voice">
							{{ a.headline }}
						</h2>
						<p class="small-voice">{{ a.description }}</p>
					</text-content>
					<picture class="landscape">
						<div class="overlay"></div>
						<img :src="a.img" :alt="a.imgAlt" />
						<Icon :name="a.icon" size="70" />
					</picture>
				</article>
			</article-grid>
		</inner-column>
	</section>
</template>

<script setup>
	const articleDetails = [
		{
			headline: 'Login with Google.',
			description:
				'Begin your journey by logging into your account, ensuring a personalized and hassle-free experience every time.',
			img: '/images/google-log.jpg',
			imgAlt: 'google-login',
			class: 'row',
			icon: 'streamline:interface-login-dial-pad-finger-password-dial-pad-dot-finger',
		},
		{
			headline: 'Capture the Product.',
			description:
				'Capture your products with a single snap! Fill out the information and open the listing to everyone!',
			img: '/images/product-tee.jpg',
			imgAlt: 'tee image',
			class: 'row-reverse',
			icon: 'material-symbols:add-a-photo-outline-rounded',
		},
		{
			headline: 'Make a Trade!',
			description:
				'Explore the marketplace or create your own collection to share with others.',
			img: '/images/transaction.jpg',
			class: 'row',
			icon: 'ph:swap-fill',
		},
		{
			headline: 'Watch your Listings.',
			description: 'Check your post for any messages looking to connect.',
			img: '/images/listings.jpg',
			class: 'row-reverse',
			icon: 'healthicons:eyes',
		},
	];
</script>

<style lang="scss" scoped>
	article-grid {
		display: flex;
		flex-direction: column;
		gap: 6rem;
	}
	article {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		row-gap: 3rem;
		picture {
			border-radius: 1rem;
			overflow: hidden;
			position: relative;

			.overlay {
				opacity: 0.5;
			}

			svg {
				position: absolute;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}

		text-content {
			display: flex;
			flex-direction: column;
			gap: 2vw;

			p {
				padding-left: 1rem;
				border-left: 2px solid var(--color-secondary-20);
				opacity: 0.9;
			}
		}

		@media (min-width: 700px) {
			align-items: center;
			flex-direction: row;
			column-gap: 3rem;

			text-content {
				p {
					padding-left: 0;
					border-left: 0;
				}
			}

			&:nth-of-type(even) {
				flex-direction: row-reverse;
				text-content {
					padding-left: 1.5rem;
					border-left: 2px solid var(--color-secondary-20);
				}
			}
			&:nth-of-type(odd) {
				text-content {
					padding-right: 1.5rem;
					border-right: 2px solid var(--color-secondary-20);
				}
			}
		}
	}
</style>
