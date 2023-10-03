<template>
	<footer class="site-footer">
		<inner-column class="tiny-voice">
			<nav>
				<ul>
					<li>
						<NuxtLink to="/login">Login</NuxtLink>
					</li>
					<li>•</li>
					<li>
						<NuxtLink to="/collection">Collection</NuxtLink>
					</li>
				</ul>

				<p class="footnote">
					© 2023 •
					<NuxtLink to="https://jessedevs.net/" target="site">Jesse Felix</NuxtLink> |
					<NuxtLink to="https://github.com/JesseDevs" target="site">Jesse Devs</NuxtLink>
				</p>
			</nav>
		</inner-column>
	</footer>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();
</script>

<style lang="scss" scoped>
	.site-footer {
		display: block;
		margin-top: 100px;
		width: 100%;
		position: relative;
		background-color: var(--color-primary-50);

		inner-column * {
			font-size: inherit;
		}

		nav {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			column-gap: 2rem;
			row-gap: 1rem;

			a {
				&:hover {
					text-decoration: underline;
				}
			}
		}

		.footnote {
			a {
				color: var(--text);
				font-weight: 300;
			}
		}
	}
</style>
