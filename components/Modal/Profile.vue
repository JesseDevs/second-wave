<template>
	<profile-modal>
		<code>
			<pre>
				{{ user }}
			</pre
			>
		</code>
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

<style lang="scss" scoped>
	profile-modal {
		display: flex;
		flex-direction: column;
	}
	code {
		font-size: 10px;
	}
</style>
