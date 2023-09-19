<template>
	<login-page>
		<picture>
			<NuxtImg src="fff" alt="logo-img" />
		</picture>
		<h1>Log In</h1>
		<ul>
			<li>
				<button @click="loginWithGoogle">
					<Icon name="logos:google-icon" />

					<span>Continue with Google</span>
				</button>
			</li>
			<li>
				<button>
					<Icon name="mdi:email-multiple" />

					<span>Continue with email</span>
				</button>
			</li>
		</ul>

		<div class="line-divider">
			<div class="line"></div>
			<p class="small-voice">or</p>
			<div class="line"></div>
		</div>

		<p class="confirmed-user">
			Already have an account?
			<span>Log In</span>
		</p>
	</login-page>
</template>

<script setup>
	const supabase = useSupabaseClient();
	const user = useSupabaseUser();
	const loginWithGoogle = async () => {
		const { error } = supabase.auth.signInWithOAuth({
			provider: 'google',
		});

		if (error) {
			console.log(error);
		}
	};
</script>

<style lang="scss" scoped>
	.confirmed-user {
		span {
			cursor: pointer;
			color: rgba(25, 182, 38, 0.912);
			font-weight: 500;
		}
	}

	div.line-divider {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--color-secondary-60);
		pointer-events: none;
		div.line {
			height: 1px;
			width: 100%;
			background-color: var(--color-secondary-30);
		}
	}
</style>
