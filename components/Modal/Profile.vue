<template>
	<profile-modal>
		<div class="profile-box">
			<picture class="account-pic">
				<NuxtImg :src="user.user_metadata.picture" alt="google-image-preview" />
			</picture>
			<p><span class="welcome">Welcome, </span>{{ user.user_metadata.name.split(' ')[0] }}</p>
		</div>
		<ul class="profile-dirs">
			<li>
				<NuxtLink
					class="small-voice"
					:to="`/profile/listings/create`"
					@click="ui.forceModalClose"
					>Sell Your Stuff</NuxtLink
				>
			</li>
			<li>
				<NuxtLink class="small-voice" :to="`/profile/listings`" @click="ui.forceModalClose"
					>View Your Listings</NuxtLink
				>
			</li>
		</ul>
		<Button30 :onClick="logout"> Logout</Button30>
	</profile-modal>
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
		ui.forceModalClose();
		user.value = null;
		navigateTo('/');
	};
</script>

<style lang="scss">
	div.modal-content {
		height: 100%;
		overflow-y: auto;
	}
	profile-modal {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;

		.profile-box {
			padding-bottom: 2rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 3rem;
			flex-wrap: wrap;
			.account-pic {
				overflow: hidden;
				border-radius: 50%;
			}
		}

		ul {
			display: flex;
			flex-direction: column;
			padding-top: 2rem;
			padding-bottom: 2rem;
			border-top: 1px solid var(--color-secondary-20);
			border-bottom: 1px solid var(--color-secondary-20);
			gap: 1vh;
			a {
				display: block;
				cursor: pointer;
				width: 100%;
				padding: 5px 10px;
				border-radius: 5px;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: rgb(83, 82, 82);
				}
			}
		}

		button {
			margin-top: auto;
		}
	}
</style>
