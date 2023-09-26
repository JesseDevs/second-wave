<template>
	<login-page>
		<text-content>
			<h1 class="strict-voice">SecondWave</h1>
			<p>Log In</p>
		</text-content>

		<Button30 :onClick="loginWithGoogle">
			<Icon name="logos:google-icon" />

			<span>Continue with Google</span>
		</Button30>

		<!--
				<button>
					<Icon name="mdi:email-multiple" />

					<span>Continue with email</span>
				</button> -->
		<!--
		<div class="line-divider">
			<div class="line"></div>
			<p class="small-voice">or</p>
			<div class="line"></div>
		</div>

		<p class="confirmed-user">
			Already have an account?
			<span>Log In</span>
		</p> -->
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

	definePageMeta({
		layout: 'center',
	});
</script>

<style lang="scss" scoped>
	login-page {
		display: grid;
		grid-template-columns: 1fr;
		height: 100%;
		place-items: center;
	}

	button {
		display: flex;
		gap: 1rem;
	}

	text-content {
		display: flex;
		flex-direction: column;
		gap: 2vw;
		padding-bottom: 10vw;
		text-align: center;

		h1 {
			font-weight: 600;
		}
	}
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
