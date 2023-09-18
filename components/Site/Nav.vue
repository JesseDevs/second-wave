<template>
	<header class="main-tool-bar site-header">
		<inner-column>
			<nav class="main-menu">
				<NuxtLink to="/"><h2 class="logo">SecondWave</h2></NuxtLink>
				<div class="buttons">
					<div class="profile-options" v-if="user">
						<NuxtLink to="/profile/listings" class="icon-button">
							<Icon name="material-symbols:person" size="21" color="var(--text)" />
						</NuxtLink>
						<button class="logout" @click="logout">Logout</button>
					</div>
					<NuxtLink to="/login" class="icon-button" v-else>
						<Icon
							name="material-symbols:person-add-rounded"
							size="21"
							color="var(--text)"
						/>
					</NuxtLink>
					<div class="icon-button" @click="ui.toggleSearchBar">
						<Icon name="ion:search-sharp" size="21" color="var(--text)" />
					</div>
					<div class="icon-button">
						<Icon name="ph:bag-simple-bold" size="21" color="var(--text)" />
					</div>
					<button class="hamburger-button icon-button" @click="ui.toggleMainMenu">
						<Icon name="grommet-icons:menu" size="21" color="var(--text)" />
					</button>
				</div>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { useInterfaceStore } from '~/stores/interface';
	const ui = useInterfaceStore();

	const user = useSupabaseUser();
	const supabase = useSupabaseClient();
	const logout = () => {
		const { error } = supabase.auth.signOut();
		if (error) {
			console.log(error);
		}

		user.value = null;
		navigateTo('/');
	};
</script>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		box-shadow: 0 0 5rem var(--color-black-20);
		border-bottom-left-radius: 2rem;
		border-bottom-right-radius: 2rem;

		border: 1px solid hsla(var(--color-secondary-hsl), 0.2);
		border-top: none;
		backdrop-filter: saturate(180%) blur(1rem);
		background-color: var(--color-primary-50);

		inner-column {
			padding: 1.5rem 2rem;

			.main-menu {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 0 1rem;

				.icon-button {
					&:hover {
						background-color: rgba(166, 163, 163, 0.4);
					}
				}
			}
		}
	}

	h2.logo {
		font-weight: 500;
	}

	div.buttons {
		display: flex;
		gap: 5px;
	}

	.icon-button {
		outline: none;
		border: none;
		background-color: transparent;
		border-radius: 4px;
		padding: 6px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;

		&:hover {
			background-color: var(--fade);
		}
	}
</style>
