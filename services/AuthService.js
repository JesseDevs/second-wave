import { defineStore } from 'pinia';

export const useAuthService = defineStore('auth', () => {
	const supabase = useSupabaseClient();
	const supaUser = useSupabaseUser();

	const router = useRouter();

	const signedIn = computed(() => user.value);

	const user = computed(() => supaUser.value);

	async function signInWithOAuth() {
		// trying this out / not working yet -
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'github',
				options: {
					redirectTo: 'http://localhost:3000/confirm',
				},
			});
			if (error) throw error;
			// http://localhost:3000/confirm?error=server_error&error_description=Error+getting+user+email+from+external+provider
		} catch (error) {
			console.error(error.message);
		}
	}

	async function signUpWithEmail(form) {
		try {
			const { data, error } = await supabase.auth.signUp({
				email: form.email,
				password: form.password,
			});
			if (error) throw error;
			form.successMessage = `Check your email and confirm you're real`;
		} catch (error) {
			form.errorMessage = error.message;
		}
	}

	async function signInWithEmail(form) {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: form.email,
				password: form.password,
			});
			if (error) throw error;
			return true; // for contextual redirect
		} catch (error) {
			form.errorMessage = error.message;
		}
	}

	async function signOut() {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			router.push('/');
		} catch (error) {
			console.error(error.message);
		}
	}

	return {
		user,

		signInWithOAuth,
		signUpWithEmail,
		signInWithEmail,
		signOut,
	};
});
