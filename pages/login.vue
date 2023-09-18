<template>
	<login-page>
		<h1>Log In</h1>
		<button @click="login">Login with Google</button>

		<code v-if="user">
			<pre>{{ user }}</pre>
		</code>
	</login-page>
</template>

<script setup>
	// const supabase = useSupabaseClient();
	// const user = useSupabaseUser();
	// const login = async () => {
	// 	const { error } = supabase.auth.signInWithOAuth({
	// 		provider: 'google',
	// 	});

	// 	if (error) {
	// 		console.log(error);
	// 	}
	// };
</script>

<style lang="scss" scoped></style>
